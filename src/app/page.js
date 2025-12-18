import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const navList = ["Home", "About", "Contact", "Cart"];

  const footerList = ["Facebook", "LinkedIn", "Viber", "YouTube", "Email"];

  return (
    <div className={styles.page}>
      <Navbar list={navList} />

      <main>
        <h1>Home Page</h1>
      </main>

      <Footer list={footerList} />
    </div>
  );
}