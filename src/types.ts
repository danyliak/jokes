export interface Category {}

export interface Joke {
  categories: Category[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
