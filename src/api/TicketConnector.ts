import type { Token } from './Types/Token';

export class TicketConnector {
    static async fetchToken(data: object): Promise<Token> {
        const response = await fetch('http://localhost:8080/api/v1/ticket/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP-Error: ${response.status}`);
        }

        return await response.json();
    }
}