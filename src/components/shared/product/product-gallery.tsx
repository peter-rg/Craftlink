'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductGallery = ({images}:{images:string[]}) => {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <div className='flex gap-2'>
      <div className='flex flex-col gap-2 mt-8'>
        {images.map((image, index)=>(
            <button key={index}
                onClick={()=>setSelectedImage(index)}
                onMouseOver={()=>setSelectedImage(index)}
                >
                <Image src={image} alt={'product image'} width={48} height={48}/>
            </button>
        ))}
      </div>
      <div className='w-full'>
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
      </div>
    </div>
  )
}

export default ProductGallery

