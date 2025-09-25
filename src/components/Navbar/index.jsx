import styles from './style.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbarHeader}>
      <h1 className={styles.navbarTitle}>Eating Sky</h1>
      <navbar className={styles.navbarNav}>
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </navbar>
    </header>
  );
}
