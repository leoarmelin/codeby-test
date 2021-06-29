export interface IProduct {
  imageUrl: string;
  name: string;
  price: number;
  sellingPrice: number;
  uniqueId: string;
}

export interface ProductResponse {
  value: number;
  items: IProduct[];
}
