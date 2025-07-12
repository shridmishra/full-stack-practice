import { PrismaClient } from "./generated/prisma";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "shrid",
      password: "asdfd",
      age: 21,
    },
  });
}


createUser();