'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  { src: '/placeholder.svg?height=400&width=800&text=Slide1', alt: 'Slide 1' },
  { src: '/placeholder.svg?height=400&width=800&text=Slide2', alt: 'Slide 2' },
  { src: '/placeholder.svg?height=400&width=800&text=Slide3', alt: 'Slide 3' },
]

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px]">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
  )
}

export default ImageSlider

