import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <button className={styles.button}>
        Install
      </button>
    </main>
  );
}
