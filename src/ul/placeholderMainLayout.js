import styles from "../styles/placeholderMainLayout.module.css";

export const PlaceholderMainLayout = ({ todos }) => {
  return (
    <section className={styles.placeholderContainer}>
      <div className={styles.todosContainer}>
        <ol className={styles.todosTable}>
          {todos.map(({ id, title }) => (
            <li>
              <a>{title}</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
