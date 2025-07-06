export interface TokenResponse {
    message: string;
    statusCode: number;
    response: {
        token: string;
    };
}