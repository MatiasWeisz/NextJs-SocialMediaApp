import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>WEMOX</h1>
        <p className={styles.description}>Descripcion</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Aprende Mas</button>
          <button className={styles.button}>Contactanos</button>
        </div>
        <div className={styles.brands}>
          <Image src= "/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
}
