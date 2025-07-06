import { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <button
                className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menü"
            >
                <span />
                <span />
                <span />
            </button>

            <nav className={styles.nav}>
                <ul>
                    <li><span className={isOpen ? styles.label : styles.labelHidden}>🏠 Dashboard</span></li>
                    <li><span className={isOpen ? styles.label : styles.labelHidden}>📝 Tickets</span></li>
                    <li><span className={isOpen ? styles.label : styles.labelHidden}>➕ Neues Ticket</span></li>
                    <li><span className={isOpen ? styles.label : styles.labelHidden}>⚙️ Einstellungen</span></li>
                </ul>
            </nav>
        </aside>
    );
}