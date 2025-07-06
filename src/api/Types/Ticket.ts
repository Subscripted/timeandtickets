export interface Ticket {
    id: number;
    title: string;
    note: string;
    type: number;
    status: number;
    assignedUserId: number;
    assignedTesterId: number;

}