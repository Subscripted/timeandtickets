export interface Token{
    message: string;
    statusCode: number;
    response: {
        token: string;
    };
}