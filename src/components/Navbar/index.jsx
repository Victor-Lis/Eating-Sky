import SearchMenu from "../SearchMenu";
import styles from "./style.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbarHeader}>
      <h1 className={styles.navbarTitle}>Eating Sky</h1>
      <nav className={styles.navbarNav}>
        <a href="#">Início</a>
        <a href="#">Receitas</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        <SearchMenu />
      </nav>
    </header>
  );
}
