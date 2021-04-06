export interface ProjectI {
  id?: string;
  name?: string;
  details?: string;
  due_date?: string;
  status?: 'complete' | 'incomplete';
  created_at?: string;
  updated_at?: string;
}
