export interface TodoI {
  id?: string;
  project_id?: string;
  name?: string;
  description?: string;
  due_on?: string;
  priority?: number;
  status?: 'complete' | 'incomplete';
  created_at?: string;
  updated_at?: string;
}
