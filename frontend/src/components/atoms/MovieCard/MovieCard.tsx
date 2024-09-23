import styles from './styles.module.css';

export default function MovieCard({ title, year, posterUrl }: { title: string, year: string, posterUrl: string }) {
    return <div className={styles.moviecard}>
        <img src={posterUrl} alt={`${title} poster`} />
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
    </div>
}