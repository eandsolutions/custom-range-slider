import Image from "next/image";
import styles from './styles/page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className={styles.container}>
          <h1 className={styles.title}>Custom Slider Component</h1>
          <p className={styles.description}>
            Our custom slider component offers a flexible and user-friendly interface for selecting a range of values.
            With its smooth drag-and-drop feature and responsive design, it enhances user experience across all devices.
            It supports both normal and fixed-value ranges, ensuring versatility for various use cases. Customizable
            styles and interactive elements make it a valuable addition to any UI toolkit.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/custom-range-slider/src/pages/BoundedSlider">
              <button className={styles.button}>Go to Exercise 1</button>
            </Link>
            <Link href="/custom-range-slider/src/pages/FixedSlider">
              <button className={styles.button}>Go to Exercise 2</button>
            </Link>
          </div>
        </div>
      </main>
  );
}
