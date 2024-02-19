import { useState, useEffect } from "react";
import styles from "./App.module.css";

const ClockTime = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className={styles.clockTime}>
      <h1 className={styles.clock}>CLOCK</h1>
      <section className={styles.timer}>
        <h2 className={styles.pm}>{date.toLocaleTimeString()}</h2>
      </section>
    </div>
  );
};

export default ClockTime;
