import Image from 'next/image'
import { IAsteroidInfo } from '@/types'

const AsteroidImg = ({ asteroid }: { asteroid: IAsteroidInfo }) => {
  return asteroid.estimated_diameter.meters.estimated_diameter_min > 300 ?
    <Image src='/img/asteroid.png' width={36} height={36} alt='asteroid' /> :
    <Image src='/img/asteroid.png' width={22} height={22} alt='asteroid' />
}

export default AsteroidImg