import Link from 'next/link'
import { Passion_One } from 'next/font/google'
import css from './index.module.scss'

const passion = Passion_One({ weight: '400', subsets: ['latin'] })

const Header = () => {
  return (
    <header className={css.header}>
      <Link href='/'>
        <h1 className={`${passion.className} ${css.title}`}>
          ARMAGEDDON 2023
        </h1>
      </Link>
      <p>ООО “Команда им. Б. Уиллиса”.</p>
      <p>Взрываем астероиды с 1998 года.</p>
    </header>
  )
}

export default Header