import styles from './Button.module.css';
import type {ButtonInterface} from '../../interfaces/ButtonInterface';

export default function Button({ title, disabled = false, onClick}: ButtonInterface) {
    return (
        <button onClick={onClick} className={styles.button} disabled={disabled}>
            {title}
        </button>
    );
}


export function LoginButton({ title, disabled = false, onClick}: ButtonInterface) {
    return (
        <button onClick={onClick} className={styles.loginbutton} disabled={disabled}>
            {title}
        </button>
    );
}
