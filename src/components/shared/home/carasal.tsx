'use client'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const Carasal = (
    {items}:{
        items:{
            title:string,
            url:string,
            image:string,
            buttonCaption:string,
        }[]
}) => {
    const plugin = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: true
         }))
return (
    <Carousel 
        dir='ltr' 
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className='w-full mx-auto'
        >
        <CarouselContent>
        {items.map((item)=>(
            <CarouselItem key={item.title}>
                <Link href='/'>
                    <div className='flex relative aspect-[16/6] items-center justify-items-center p-6 m--1'>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            className='object-cover'
                        />
                    
                        <div className='absolute top-1/2 left-12 w-1/3 -translate-y-1/2' >
                            <h2 className='md:text-6xl text-xl mb-4 text-primary font-bold'>{item.title}</h2>
                            <Button className='hidden md:block '>{item.buttonCaption}</Button>
                        </div>
                    </div>
                </Link>    
                    
            </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious className='left-1 md:left-12'/>
        <CarouselNext className='right-1 md:right-12'/>
    </Carousel>
)
}

export default Carasal
