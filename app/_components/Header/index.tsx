import styles from "./index.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="SIMPLE"
          width={348}
          height={133}
          priority
        />
      </a>
    </header>
  );
}
