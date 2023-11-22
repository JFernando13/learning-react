import { useContext, useMemo, useState } from "react"
import { CartContext } from "../../context/CartContext"
import style from "../../styles/cart.module.css"
import { CartIcon } from "../icons/CartIcon"
import { CloseIcon } from "../icons/CloseIcon"

export function Cart() {
  const [isVisibleCart, setIsVisibleCart] = useState(false)
  const { cart, handlerCart } = useContext(CartContext)

  const handleVisible = () => {
    window.document.body.classList.toggle("cart-show")
    setIsVisibleCart(!isVisibleCart)
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
        <section className={`${style.cart} ${isVisibleCart && style.showCart}`}>
          <button onClick={handleVisible} className={`${style.btn} ${style.btnClose}`}><CloseIcon /></button>
          {
            cart.map(cartProduct => (
              <article key={cartProduct.id}>
                <h1>{cartProduct.title}</h1>
                <strong>{cartProduct.quantity}</strong>
                <button onClick={() => handlerCart.removeOne(cartProduct.id)}>Delete One Product</button>
              </article>
            ))
          }

          <button onClick={() => handlerCart.removeAll()} className={`${style.btn}`}>Delete All Cart</button>
        </section>
      </div>
    </>
  )
}