import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const navList = ["Home", "About", "Contact", "Cart"];
const socialList = ["Facebook", "Linkedin", "Viber", "YouTube", "Email"];
export default function Home() {
  return (
    <>
      <Navbar navList={navList} />
      <Footer socialList={socialList}></Footer>
    </>
  );
}