import React, { useState } from 'react';
import styles from './CreateTicketModal.module.css';

interface CreateTicketModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (ticket: {
        title: string;
        note: string;
        type: number;
        assignedUserId: number;
    }) => void;
}

export default function CreateTicketModal({ isOpen, onClose, onCreate }: CreateTicketModalProps) {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [type, setType] = useState(1);
    const [assignedUserId, setAssignedUserId] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate({ title, note, type, assignedUserId });
        onClose(); // optional: automatisch schließen
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>🎫 Neues Ticket erstellen</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Titel:
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                    </label>

                    <label>
                        Notiz:
                        <textarea value={note} onChange={e => setNote(e.target.value)} required />
                    </label>

                    <label>
                        Typ:
                        <select value={type} onChange={e => setType(Number(e.target.value))}>
                            <option value={1}>Bug</option>
                            <option value={2}>Feature</option>
                            <option value={3}>Frage</option>
                        </select>
                    </label>

                    <label>
                        Zugewiesener Nutzer:
                        <input type="number" value={assignedUserId} onChange={e => setAssignedUserId(Number(e.target.value))} />
                    </label>

                    <div className={styles.buttons}>
                        <button type="submit">Erstellen</button>
                        <button type="button" onClick={onClose}>Abbrechen</button>
                    </div>
                </form>
            </div>
        </div>
    );
}