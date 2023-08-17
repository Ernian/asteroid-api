// @ts-nocheck
'use client'
import { useEffect, useState, useRef } from 'react'
import { useAppContext } from '@/hooks/useAppContext'
import { appActions } from '@/context'
import AsteroidCard from '../asteroidCard'
import Cart from '../cart'
import { getNearEarthObjects } from '@/utils'
import { IAsteroidInfo, IResponseAPI } from '@/types'
import css from './index.module.scss'


const AsteroidList = ({ data }: { data: IResponseAPI }) => {
  const [state, dispatch] = useAppContext()
  const [nextLink, setNextLink] = useState(data.links.next)
  const [fetchedAsteroids, setFetchedAsteroids] = useState<IAsteroidInfo[][]>([])

  const lastElement = useRef<HTMLDivElement>()
  const observer = useRef()

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }
    const callback = async (entries, observer) => {
      if (!entries[0].isIntersecting) return

      const response = await fetch(nextLink)
      const data = await response.json() as IResponseAPI
      const nearEarthObjects = getNearEarthObjects(data).slice(1)

      setFetchedAsteroids([...fetchedAsteroids, ...nearEarthObjects])
      setNextLink(data.links.next)
    }
    observer.current = new IntersectionObserver(callback)
    observer.current.observe(lastElement.current)
  }, [nextLink])


  useEffect(() => {
    dispatch(appActions.clearOrder())
  }, [])

  const nearEarthObjects = getNearEarthObjects(data)
  const handlerKm = () => {
    if (!state.isKm) {
      dispatch(appActions.setIsKm())
    }
  }
  const handlerLunar = () => {
    if (state.isKm) {
      dispatch(appActions.setIsKm())
    }
  }

  const renderAsteroids = (asteroids: IAsteroidInfo[][]) => {
    return asteroids.reduce((jsx, asteroids) => {
      jsx.push(...asteroids.map(asteroid => (
        <AsteroidCard
          key={asteroid.id}
          asteroid={asteroid}
          isKm={state.isKm}
        />
      )))
      return jsx
    }, [] as JSX.Element[])
  }

  return (
    <>
      <section className={css.container}>
        <h2 className={css.title}>Ближайшие подлёты астероидов</h2>
        <div>
          <span
            onClick={handlerKm}
            className={state.isKm ? css['selected-measure'] : css['measure']}
          >
            в километрах
          </span>
          <span> | </span>
          <span
            onClick={handlerLunar}
            className={state.isKm ? css['measure'] : css['selected-measure']}
          >
            в лунных орбитах
          </span>
        </div>

        {
          renderAsteroids(nearEarthObjects)
        }
        {
          !!fetchedAsteroids.length && renderAsteroids(fetchedAsteroids)
        }
      </section>
      <div
        ref={lastElement}
        className={css.last}
      />
      <Cart />
    </>
  )
}

export default AsteroidList