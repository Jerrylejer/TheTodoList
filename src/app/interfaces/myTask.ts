
export interface ITodo {
    id: number;
    content: string;
    category:string;
    isUrgent: boolean;
    doneDate: Date | null;
}