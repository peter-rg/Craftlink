import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type CardItem = {
    title: string,
    link: { text: string, href: string },
    items: {
        name: string,
        items?: string[],
        image: string,
        href:string,
    }[]
}

const HomeCard = ({cards}:{cards: CardItem[]}) => {
  console.log("cards: ",cards)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4'>
      {cards.map((card)=>(
        <Card key={card.title} className='flex flex-col rounded-none'>
              <CardContent>
                  <h3 className='text-xl font-bold mb-4'>{card.title}</h3>
                  <div className='grid grid-cols-2 gap-4'>
                      {card.items.map((item) => (
                        <Link href={item.href} key={item.name}
                        className='flex flex-col'>
                              <Image
                                src={item.image} alt={item.name}
                                height={120} width={120}
                                className='aspect-square object-scale-down max-w-full h-auto mx-auto'
                              />
                              <p className='text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</p>
                        </Link>
                      ))}
                  </div>
              </CardContent>
              {card.link && (
                  <CardFooter>
                    <Link href={card.link.href}
                    className='mt-4 block'>{card.link.text}</Link>
                  </CardFooter>
              )}
        </Card>
      ))}
    </div>
  )
}

export default HomeCard
