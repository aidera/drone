import { useEffect } from 'react';
import styles from './Content.module.scss';
import gsap from 'gsap';

export default function Content() {
  useEffect(() => {
    gsap.fromTo(
      '[data-animation="h1"]',
      { opacity: 0, scale: 0.8, x: -140 },
      { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      '[data-animation="h2"]',
      { opacity: 0, scale: 0.8, x: 140 },
      { opacity: 1, scale: 1, x: 0, duration: 0.5, delay: 0.7 }
    );
    gsap.fromTo(
      '[data-animation="text"]',
      { opacity: 0, scale: 0.8, y: 80 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: 0.8 }
    );
    gsap.fromTo(
      '[data-animation="btn"]',
      { opacity: 0, x: -120 },
      { opacity: 1, x: 0, duration: 0.5, delay: 1 }
    );
  }, []);

  return (
    <div className={styles.container}>
      <h1 data-animation="h1">Drones for</h1>
      <h2 data-animation="h2">Ukraine</h2>
      <p data-animation="text">
        Your donations will help us supply the defenders in Ukraine with modern
        drones and equipment to counter the invasion. Support to Ukraine's
        Defenders. Now is the best moment to help.
      </p>

      <div className={styles['btn-container']}>
        <a
          data-animation="btn"
          href="https://www.dronesforukraine.fund/"
          target="_blank"
        >
          Donate
        </a>
      </div>
    </div>
  );
}
