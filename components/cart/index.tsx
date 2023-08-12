import SendButton from '../sendButton'
import css from './index.module.scss'

const Cart = () => {
  return (
    <section className={css.cart}>
      <div>
        <h3 className={css.title}>Корзина</h3>
        <p>2 астероида</p>
      </div>
      <SendButton />
    </section>
  )
}

export default Cart