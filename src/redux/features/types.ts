export interface RetailPrice {
  amount: number;
  currencyCode: string;
}

export interface SaleInfo {
  retailPrice: RetailPrice;
}

export interface ImageLinks {
  thumbnail: string;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  averageRating?: number;
  ratingsCount?: number;
  description?: string;
  imageLinks: ImageLinks;
  publisher?: string;
  publishedDate?: string;
  pageCount?: number;
  categories?: string[];
}

export interface ApiBook {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  status: "buy now" | "in the cart";
  qty: number;
}

interface CartItem {
  id: string;
  qty: number;
}

export interface BooksState {
  genre: string;
  startIndex: number;
  purchasedBooks: Book[];
  allBooks: Book[];
  items: CartItem[];
}

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  status: boolean;
}
