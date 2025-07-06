// src/pages/LoginPage.tsx

import { useState } from 'react';
import { LoginButton } from '../components/Button/Button';
import type { Login } from '../api/Types/Login';

interface Props {
    onLogin: (data: Login) => void;
    error?: string | null;
}

export default function LoginPage({ onLogin, error }: Props) {
    const [email, setEmail] = useState('lor.els@gmx.de');
    const [clientId, setClientId] = useState(9302);
    const [clientSecret, setClientSecret] = useState(94202);

    const handleSubmit = () => {
        onLogin({ email, clientId, clientSecret });
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
            <h2>Login</h2>

            <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
            />
            <input
                type="number"
                placeholder="Client ID"
                value={clientId}
                onChange={(e) => setClientId(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
            />
            <input
                type="number"
                placeholder="Client Secret"
                value={clientSecret}
                onChange={(e) => setClientSecret(Number(e.target.value))}
                style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <LoginButton
                title="Login"
                onClick={handleSubmit}
            />
        </div>
    );
}