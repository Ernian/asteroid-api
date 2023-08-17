import { IAsteroidInfo, IResponseAPI } from './types'

export const debounce = (fn: Function, ms = 250) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export const fetchAsteroids = async (url = process.env.NEXT_PUBLIC_API_ASTEROIDS_URL) => {
  if (!url) {
    throw new Error('Не найден url для запроса данных')
  }
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Не удалось загрузить данные с сервера')
  }
  const data = await response.json() as IResponseAPI
  return data
}

export const getFormattedDate = (asteroid: IAsteroidInfo): string => {
  const date = asteroid.close_approach_data[0].close_approach_date

  const months = [,
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]

  const [year, month, day] = date.split('-')

  return `${day} ${months[parseInt(month)]} ${year}`
}

export const getDiameter = (asteroid: IAsteroidInfo) => (
  asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(0)
)

export const getDistance = (isKm: boolean, asteroid: IAsteroidInfo) => {
  return isKm ?
    `${parseInt(asteroid.close_approach_data[0].miss_distance.kilometers)} км` :
    `${parseInt(asteroid.close_approach_data[0].miss_distance.lunar)} лунные орбиты`
}

export const isDanger = (asteroid: IAsteroidInfo) => asteroid.is_potentially_hazardous_asteroid

export const getNearEarthObjects = (data: IResponseAPI) => {
  return Object.values(data.near_earth_objects).sort((prev, next) => {
    return prev[0].close_approach_data[0].close_approach_date >
      next[0].close_approach_data[0].close_approach_date ? 1 : -1
  })
}
