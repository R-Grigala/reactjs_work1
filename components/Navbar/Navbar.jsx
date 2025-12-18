import styles from "./Navbar.module.css";

const Navbar = ({ navList }) => {
  return (
    <header className={styles.header}>
      <ul>
        {navList.map((list) => (
          <li key={list}>
            <a href="#">{list}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Navbar;