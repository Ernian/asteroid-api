import Link from 'next/link'
import { memo } from 'react'
import AsteroidImg from '../asteroidImage'
import { IAsteroidInfo } from '@/types'
import { getDiameter, getDistance, getFormattedDate, isDanger } from '@/utils'
import OrderButton from '../orderButton'
import Arrow from '../arrow'
import css from './index.module.scss'

interface IProps {
  asteroid: IAsteroidInfo,
  isKm: boolean,
  showBtn?: boolean
}

const AsteroidCard = ({ asteroid, isKm, showBtn = true }: IProps) => {

  return (
    <div className={css.card}>
      <Link href={`/asteroid/${asteroid.id}`} className={css.link}>
        <h3 className={css.title}>
          {getFormattedDate(asteroid.close_approach_data[0].close_approach_date)}
        </h3>

        <div className={css.info}>
          <div className={css.distance}>
            <span>{getDistance(isKm, asteroid)}</span>
            <Arrow />
          </div>

          <div className={css.details}>
            <AsteroidImg asteroid={asteroid} />
            <div>
              <div className={css.name}>{asteroid.name}</div>
              &#8960;{getDiameter(asteroid)}
            </div>
          </div>
        </div>
      </Link>
      <div className={css.order}>
        {showBtn && <OrderButton asteroid={asteroid} />}
        {isDanger(asteroid) && <div className={css.danger}>&#9888; Опасен</div>}
      </div>
    </div>

  )
}

export default memo(AsteroidCard)