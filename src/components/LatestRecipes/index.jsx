import styles from "./style.module.css";
import { useGetAll } from "../../_hooks/use-get-all";

export default function LatestRecipes() {
  const data = useGetAll();
  const recipes = data?.pratos?.slice(0, 2);

  return (
    <section className={styles.latestRecipesSection}>
      <h2 className={styles.title}>Últimos Pratos</h2>
      <div className={styles.recipesGrid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className={styles.recipeImage}
            />
            <div className={styles.recipeTitle}>{recipe.nome}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
