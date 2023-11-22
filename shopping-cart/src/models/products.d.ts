export interface ProductsType {
  filteredProducts: ProductType[]
  maxPrice: number
}

export interface ProductType {
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
  images: string[]
  quantity: number
}

export interface FilterType {
  price: { min: number, max: number }
  category: string
}