import { useState } from "react";
import Login from "./Login";
import Countdown from "./Countdown";
import Christmas from "./Christmas";

export default function App() {
  const [user, setUser] = useState(null);
  const [isMidnight, setIsMidnight] = useState(false);

  if (!user) return <Login setUser={setUser} />;

  if (!isMidnight)
    return <Countdown onMidnight={() => setIsMidnight(true)} />;

  return <Christmas user={user} />;
}
