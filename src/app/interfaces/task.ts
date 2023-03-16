
type CategoryType="shopping"|"health"|"work"|"bills"|"cleaning"|"other";

export interface myTask {
    id: number;
    content: string;
    category: CategoryType;
    isUrgent: boolean;
    doneDate: Date | null;
}