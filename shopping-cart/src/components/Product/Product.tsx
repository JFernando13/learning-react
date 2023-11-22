import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ProductType } from '../../models/products'
import style from '../../styles/product.module.css'

interface Props {
  product: ProductType
}

export function Product({ product }: Props) {

  const { handlerCart } = useContext(CartContext)


  return (
    <article className={style.product}>
      <img src={product.thumbnail} alt={`${product.id}-${product.title}`} className={style.imgProduct} />
      <main className={style.productDetails}>
        <header className={style.productInfoHeader}>
          <div className={style.info}>
            <h2>{product.title}</h2>
            <strong>${product.price}</strong>
          </div>
          <p>{product.description}</p>
        </header>
          <button className={style.btnAddToCart} onClick={() => handlerCart.add(product)}>Add</button>
      </main>
    </article>
  )
}