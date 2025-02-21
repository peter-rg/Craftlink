'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import Zoom from 'react-medium-image-zoom'

const ProductGallery = ({images}:{images:string[]}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <div className='flex gap-2'>
      <div className='flex flex-col gap-2 mt-8'>
        {images.map((image, index)=>(
            <Button key={index}
                onClick={()=>setSelectedImage(index)}
                onMouseOver={()=>setSelectedImage(index)}
                >
                <Image src={image} alt={'product image'} width={48} height={48}/>
            </Button>
        ))}
      </div>
      <div className='w-full'>
      <Zoom>
        <div className='relative h-[500px]'>
        <Image
            src={images[selectedImage]}
            alt={'product image'}
            fill
            sizes='90vw'
            className='object-contain'
            priority
        />
        </div>
      </Zoom>
      </div>
    </div>
  )
}

export default ProductGallery

