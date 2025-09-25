import { useNavigate } from "react-router-dom";
import SearchMenu from "../SearchMenu";
import styles from "./style.module.css";
import { CornerDownLeft } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const isRoot = () => window.location.href.includes("plate");

  return (
    <header className={styles.navbarHeader}>
      <h1 className={styles.navbarTitle}>Eating Sky</h1>
      <nav className={styles.navbarNav}>
        {isRoot() ? (
          <CornerDownLeft
            className={styles.icon}
            onClick={() => navigate("/")}
          />
        ) : (
          <></>
        )}
        <a href="#">Início</a>
        <a href="#">Receitas</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        <SearchMenu />
      </nav>
    </header>
  );
}
