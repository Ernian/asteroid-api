import { useAppContext } from '@/hooks/useAppContext'
import SendButton from '../sendButton'
import css from './index.module.scss'

const Cart = () => {
  const [state] = useAppContext()

  return (
    <section className={css.cart}>
      <div>
        <h3 className={css.title}>Корзина</h3>
        <p>Заказано астероидов: {state.order.length}</p>
      </div>
      <SendButton />
    </section>
  )
}

export default Cart