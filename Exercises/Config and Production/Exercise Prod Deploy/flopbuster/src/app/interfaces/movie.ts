export interface Movie {
  id: number;
  year: number;
  stars: number;
  rating: number;
  director: string;
  cast: string[];
  imdblink: string;
  image: string;
  cost: number;
  onSale: boolean;
  imageUrl: string;
}
