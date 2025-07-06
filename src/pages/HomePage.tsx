import { useState } from 'react';
import Button from '../components/Button';
import TicketCard from '../components/Ticket/Cards';
import CreateTicketModal from '../components/Modal/CreateTicketModal';
import styles from './HomePage.module.css';

export default function HomePage() {
    const [showModal, setShowModal] = useState(false);

    const handleCreateTicket = (ticketData: {
        title: string;
        note: string;
        type: number;
        assignedUserId: number;
    }) => {
        console.log('Neues Ticket:', ticketData);
        setShowModal(false);
    };

    return (
        <div className={styles.container}>
            <h1>Willkommen beim Ticketsystem</h1>
            <p>Hier kannst du neue Tickets erstellen oder deine bestehenden verwalten.</p>

            <div className={styles.buttonGroup}>
                <Button title="Neues Ticket erstellen" disabled={false} onClick={() => setShowModal(true)} />
                <Button title="Meine Tickets ansehen" disabled={false} />
                <Button title="Deaktivierter Button" disabled={true} />
            </div>

            <div className={styles.cardGrid}>
                <TicketCard id={1} title="Ticket A" note="Dies ist ein Test" type={1} status={1} assignedUserId={123} assignedTesterId={456} />
                <TicketCard id={2} title="Ticket B" note="Etwas anderes" type={2} status={2} assignedUserId={789} assignedTesterId={1011} />
                <TicketCard id={3} title="Ticket C" note="Weitere Infos" type={3} status={3} assignedUserId={1213} assignedTesterId={1415} />
            </div>

            <CreateTicketModal isOpen={showModal} onClose={() => setShowModal(false)} onCreate={handleCreateTicket}/>
        </div>
    );
}