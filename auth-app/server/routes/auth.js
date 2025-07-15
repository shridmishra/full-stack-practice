import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const secret = process.env.JWT_SECRET;

router.post("/api/auth/register", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
const user = new User({ email, password, username });

    await user.save();

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });

    return res.status(200).json({
      user: { username, email },
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const validUser = await user.comparePasswords(password);

    if (!validUser) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });

    return res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
