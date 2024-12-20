export interface AnimalType {
  id: string;
  name: string;
  age: string;
  register_date: string;
  adopted: boolean;
  description: string;
  photos: string;
  type: string;
  size: string;
  genre: string;
}

export interface TursoDataResponse {
  columns: string[];
  columnTypes: string[];
  rows: AnimalType[];
  rowsAffected: number;
  lastInsertRowid: number | undefined;
}
