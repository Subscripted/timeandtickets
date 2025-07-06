import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import { TicketConnector } from './api/TicketConnector';
import LoginPage from './pages/LoginPage';
import type {Login} from "./api/Types/Login.ts";


export default function App() {
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const isLoggedIn = token !== null;

    useEffect(() => {
        const loginData = {
            email: 'myemail',
            clientId: 9302,
            clientSecret: 94202,
        };

        TicketConnector.fetchToken(loginData)
            .then(res => setToken(res.response.token))
            .catch(err => setError(err.message));
    }, []);


    const handleLogin = (loginData: Login) => {
        TicketConnector.fetchToken(loginData)
            .then((res) => {
                setToken(res.response.token);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            });
    };


    if (!isLoggedIn) {
        return <LoginPage onLogin={handleLogin} error={error} />;
    }

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '200px', padding: '2rem', flex: 1 }}>
                <HomePage />

                <div style={{ marginTop: '2rem', background: '#f9fafb', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Token-Antwort</h2>

                    {error && (
                        <p style={{ color: 'red' }}>Fehler beim Abrufen: {error}</p>
                    )}

                    {token ? (
                        <div>
                            <p><strong>Token:</strong> {token}</p>
                        </div>
                    ) : (
                        !error && <p>Token wird geladen...</p>
                    )}
                </div>
            </div>
        </div>
    );
}