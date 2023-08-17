'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { debounce } from '@/utils'
import css from './index.module.scss'

interface IImageProps {
  src: string,
  width: number,
  height: number
}

const EarthImage = () => {
  const [image, setImage] = useState<IImageProps>({ src: '/img/earth-sm.png', width: 48, height: 436 })

  useEffect(() => {
    const resizeHandler = debounce(() => {
      const screenWidth = document.documentElement.clientWidth

      if (screenWidth < 1024) {
        setImage({
          src: '/img/earth-sm.png',
          width: 48,
          height: 436
        })
        return
      }
      if (screenWidth > 1024 && screenWidth < 1364) {
        setImage({
          src: '/img/earth-md.png',
          width: 304,
          height: 436,
        })
        return
      }
      if (screenWidth > 1364) {
        setImage({
          src: '/img/earth-lg.png',
          width: 400,
          height: 620,
        })
      }
    })

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }

  }, [])

  return <Image
    src={image.src}
    width={image.width}
    height={image.height}
    priority={false}
    alt='earth'
    className={css.img}
  />
}

export default EarthImage