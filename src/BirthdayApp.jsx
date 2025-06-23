import React, { useState, useEffect } from "react";
import CountdownPage from "./CountdownPage";
import BirthdayPage from "./BirthdayPage";

const BirthdayApp = () => {
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const releaseDate = new Date(now.getFullYear(), 5, 23, 0, 0, 0); // June is month 5 (0-indexed)

      if (now >= releaseDate) {
        setIsBirthday(true);
      }
    };

    checkTime();

    const interval = setInterval(checkTime, 1000); // Check every second
    return () => clearInterval(interval);
  }, []);

  return isBirthday ? <BirthdayPage /> : <CountdownPage />;
};

export default BirthdayApp;
