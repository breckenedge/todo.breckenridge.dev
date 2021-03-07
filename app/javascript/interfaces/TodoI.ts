export interface TodoI {
    id?: number;
    project_id?: number;
    name?: string;
    description?: string;
    due_on?: string;
    priority?: number;
    status?: 'complete' | 'incomplete';
    created_at?: string;
    updated_at?: string;
}
