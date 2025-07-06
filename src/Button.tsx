import type {ButtonInterface} from './interfaces/ButtonInterface';

export default function Button({ title, disabled }: ButtonInterface) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}