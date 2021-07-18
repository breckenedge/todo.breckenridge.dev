export interface TodoI {
  id?: string;
  project_id?: string;
  name?: string;
  description?: string;
  due_date?: string;
  priority?: number;
  status?: 'complete' | 'incomplete';
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
