import styles from './TicketCard.module.css';
import type {TicketInterface} from '../../../interfaces/TicketInterface';

export default function TicketCard({
                                       id,
                                       title,
                                       note,
                                       type,
                                       status,
                                       assignedUserId,
                                       assignedTesterId
                                   }: TicketInterface) {
    return (
        <div className={styles.card}>
            <h2 className={styles.header}>📄 Ticketübersicht</h2>

            <div className={styles.row}>
                <span className={styles.label}>Ticket-ID</span>
                <span className={`${styles.value} ${styles.id}`}>#{id}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Titel</span>
                <span className={styles.value}>{title}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Notiz</span>
                <span className={styles.value}>{note}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Typ</span>
                <span className={styles.value}>{type}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Status</span>
                <span className={styles.value}>{status}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Zugewiesener Nutzer</span>
                <span className={styles.value}>{assignedUserId}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Tester</span>
                <span className={styles.value}>{assignedTesterId}</span>
            </div>
        </div>
    );
}