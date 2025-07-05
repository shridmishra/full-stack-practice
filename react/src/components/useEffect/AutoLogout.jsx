import React, { useEffect, useState } from "react";

export const AutoLogout = () => {
  const [session, setSession] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setSession(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(id);
  }, []); // ✅ Only on mount

  return (
    <div>
      <p>{session ? "✅ Session valid" : "⛔ Session expired"}</p>
    </div>
  );
};
