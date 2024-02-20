import { useState, useEffect } from "react";
import styles from "./App.module.css";

const ClockTime = () => {

  const [date, setDate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate((prevDate) => prevDate + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className={styles.clockTime}>
      <h1 className={styles.clock}>TIMER</h1>
      <section className={styles.timer}>
        <h2 className={styles.pm}>{date}</h2>
      </section>
    </div>
  );
};

export default ClockTime;
