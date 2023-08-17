import Link from 'next/link'
import css from './index.module.scss'

const SendButton = () => {
  return <Link href='/order'>
    <button className={css.btn}>Отправить</button>
  </Link >
}

export default SendButton