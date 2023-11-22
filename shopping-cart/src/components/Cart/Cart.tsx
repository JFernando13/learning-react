import { useContext, useMemo, useState } from "react"
import { CartContext } from "../../context/CartContext"
import style from "../../styles/cart.module.css"
import { CartIcon } from "../icons/CartIcon"
import { CloseIcon } from "../icons/CloseIcon"
import { DeleteIcon } from "../icons/DeleteIcon"

export function Cart() {
  const [isVisibleCart, setIsVisibleCart] = useState(false)
  const { cart, handlerCart } = useContext(CartContext)

  const handleVisible = () => {
    window.document.body.classList.toggle("cart-show")
    setIsVisibleCart(!isVisibleCart)
  }

  const managePropagation = (e: React.SyntheticEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  const totalQuantity = useMemo(() => {
    const number = cart.reduce((prev, current) => {
      return prev + current.quantity
    }, 0)

    return number
  }, [cart])


  return (
    <>
      <button onClick={handleVisible} className={`${style.btnOpenCart} ${style.btn}`}>
        <span>{totalQuantity}</span>
        <CartIcon />
      </button>

      <div className={`${style.layoutCart} ${isVisibleCart && style.showCart}`} onClick={handleVisible}>
        <section className={`${style.cart} ${isVisibleCart && style.showCart}`} onClick={managePropagation}>
          <button onClick={handleVisible} className={`btn ${style.btnClose} ${style.btn}`}><CloseIcon /></button>
          <main>
            <section className={style.cartList}>
              {
                cart.length > 0 ? cart.map(cartProduct => (
                  <article key={cartProduct.id} className={style.product}>
                    <div className={style.infoCartProduct}>
                      <h1>{cartProduct.title}</h1>
                      <strong>Cantidad: {cartProduct.quantity}</strong>
                    </div>
                    <button onClick={() => handlerCart.removeOne(cartProduct.id)} className={style.btnDeleteOne}><DeleteIcon /></button>
                  </article>
                )) : <p>No hay productos en el carro</p>
              }
            </section>
            <button onClick={() => handlerCart.removeAll()} className={`${style.btnDeleteAll}`}>Delete All Cart</button>
          </main>
        </section>
      </div>
    </>
  )
}