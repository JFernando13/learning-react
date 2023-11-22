import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { Product } from './Product'
import style from '../../styles/product.module.css'

export function ListOfProducts() {
  const { products: { filteredProducts } } = useContext(ProductContext)

  if (filteredProducts.length === 0) return <p>No hay productos con ese filtro</p>

  return (
    <section className={style.products}>
      {
        filteredProducts.map(product => <Product product={product} key={product.id} />)
      }
    </section>
  )
}