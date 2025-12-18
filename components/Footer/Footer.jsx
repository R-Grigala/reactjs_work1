import styles from "./Footer.module.css";

const Footer = ({ socialList }) => {
  return (
    <footer className={styles.footer}>
      <ul>
        {socialList.map((list) => (
          <li key={list}>
            <a href="#">{list}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;