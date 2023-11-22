export interface FilterProductsType {
  filteredProducts: OriginalProductType[]
  maxPrice: number
}

export interface OriginalProductType {
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
}

export interface ProductType extends OriginalProductType {
  quantity: number
}

export interface FilterType {
  price: { min: number, max: number }
  category: string
}