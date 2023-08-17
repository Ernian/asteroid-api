'use client'

import AsteroidCard from '@/components/asteroidCard'
import { useAppContext } from '@/hooks/useAppContext'
import css from '/components/asteroidList/index.module.scss'

const OrderPage = () => {
  const [state] = useAppContext()
  return (
    <>
      <section className={css.container}>
        <h2 className={css.title}>Заказ отправлен!</h2>
        {
          state.order.map(asteroid => (
            <AsteroidCard
              key={asteroid.id}
              asteroid={asteroid}
              isKm={state.isKm}
              showBtn={false}
            />
          ))
        }
      </section>
      <footer className={css.footer}>&copy; Все права и планета защищены</footer>
    </>
  )
}

export default OrderPage