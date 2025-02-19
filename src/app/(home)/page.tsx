
import Carasal from '@/components/shared/home/carasal'
import HomeCard from '@/components/shared/home/home-card'
import ProductSlider from '@/components/shared/product/product-slider'
import { Card, CardContent } from '@/components/ui/card'
import { getAllCategories, getProductsByTag, getProductsForCard } from '@/lib/actions/product-action'
import data from '@/lib/data'
import { toSlug } from '@/lib/utils'



const Homepage = async () => {
  const todaysDeals = await getProductsByTag({ tag: 'todays-deal' })
  const categories = (await getAllCategories()).slice(0, 4)
  const newArrivals = await getProductsForCard({ tag: 'new-arrival' })
  const featured = await getProductsForCard({ tag: 'featured' })
  const bestSellers = await getProductsForCard({ tag: 'best-seller' })

  const cards = [
  {
    title: 'categories to explore',
    link: { text: 'See More', href:'/search' },
    items: categories.map(category => ({
      name: category,
      image: `/images/${toSlug(category)}.jpg`,
      href: `/search?category=${category}`
    }))
  },
    {
      title: 'Explore New Arrivals',
      link: { text: 'View All', href: '/search?tag=new-arrival' },
      items: newArrivals
    },
    {
      title: 'Discover Best Sellers',
      link: { text: 'View All', href:'/search?tag=best-seller' },
      items: bestSellers
    },
    {
      title: 'Featured Products',
      link: { text: 'Shop Now', href: '/search?tag=featured' },
      items: featured
    }
  ]
  return (
    <>
      <Carasal items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard cards={cards} />
        <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card>
      </div>
    </>
    
  )
}

export default Homepage
