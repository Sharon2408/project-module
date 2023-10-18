export interface ProductDetails{
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images:string[]
}

export interface Products{
    products:Products[];
   total:number;
   skip:number;
   limit:number;
  }