'use client'

import { useState } from 'react'
import { useAppContext } from '@/hooks/useAppContext'
import { appActions } from '../../context'
import { IAsteroidInfo } from '@/types'
import css from './index.module.scss'

const OrderButton = ({ asteroid }: { asteroid: IAsteroidInfo }) => {
  const [inOrder, setInOrder] = useState(false)
  const [_, dispatch] = useAppContext()

  const styles = inOrder ?
    `${css.btn} ${css['in-order']}` :
    `${css.btn} ${css['no-order']}`


  const handlerClick = () => {
    if (inOrder) {
      dispatch(appActions.removeFromOrder(asteroid))
    } else {
      dispatch(appActions.addToOrder(asteroid))
    }
    setInOrder(!inOrder)
  }

  return (
    <button
      className={styles}
      onClick={handlerClick}
    >
      {inOrder ? 'В корзине' : 'Заказать'}
    </button>
  )
}

export default OrderButton