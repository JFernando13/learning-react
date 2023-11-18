import styles from './loading.module.css'
export function Loading() {
  return <article className={styles.container}>
    <div className={styles.loading}></div>
  </article>
}