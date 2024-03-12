import Image from "next/image";
import styles from "../styles/page.module.css";
import Navbar from "../components/navbar";

export default function Home() {


  return (
    <main className={styles.main}>
      <Navbar />
      <p>Hello</p>
    </main>
  );
}
