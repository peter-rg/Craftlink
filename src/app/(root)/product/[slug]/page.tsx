import { Card, CardContent, CardFooter } from '@/components/ui/card'

import SelectVariant from '@/components/shared/product/select-variant'
import ProductPrice from '@/components/shared/product/product-price'
import ProductGallery from '@/components/shared/product/product-gallery'
import { Separator } from '@/components/ui/separator'
import ProductSlider from '@/components/shared/product/product-slider'
import { getProductBySlug, getProductsRelatedByCategory } from '@/lib/actions/product-action'
import BrowsingHistoryList from '@/components/shared/browsing-history'
import AddToBrowsingHistory from '@/components/shared/product/add-to-browsing-history'
import AddToCart from '@/components/shared/product/add-to-cart'
import { generateId } from '@/lib/utils'
import { auth } from '@/auth'
import RatingSummary from '@/components/shared/product/rating-summary'
import ReviewList from './review-list'


export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const product = await getProductBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails(props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page: string; color: string; size: string }>
}) {
  const searchParams = await props.searchParams
  const { page, color, size } = searchParams
  const params = await props.params
  const { slug } = params
  const product = await getProductBySlug(slug)
  const session = await auth()

  const relatedProducts = await getProductsRelatedByCategory({
    category: product.category,
    productId: product._id,
    page: Number(page || '1'),
  })

  return (
    <>
      <AddToBrowsingHistory id={product._id} category={product.category} />
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5  '>
          {/* Product image */}
          <div className='col-span-2'>
            <ProductGallery images={product.images} />
          </div>
          {/* product details */}
          <div className='flex w-full flex-col gap-2 md:p-5 col-span-2'>
            <div className='flex flex-col gap-3'>
              <p className='p-medium-16 rounded-full bg-grey-500/10   text-grey-500'>
                Brand {product.brand} {product.category}
              </p>
              <h1 className='font-bold text-lg lg:text-xl'>
                {product.name}
              </h1>
              <RatingSummary
                avgRating={product.avgRating}
                numReviews={product.numReviews}
                asPopover
                ratingDistribution={product.ratingDistribution}
              />
              <Separator />
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <div className='flex gap-3'>
                  <ProductPrice
                    price={product.price}
                    listPrice={product.listPrice}
                    isDeal={product.tags.includes('todays-deal')}
                    forListing={false}
                  />
                </div>
              </div>
            </div>
            <div>
              <SelectVariant
                product={product}
                size={size || product.sizes[0]}
                color={color || product.colors[0]}
              />
            </div>
            {/* product description */}
            <Separator className='my-2' />
            <div className='flex flex-col gap-2'>
              <p className='p-bold-20 text-grey-600'>Description:</p>
              <p className='p-medium-16 lg:p-regular-18'>
                {product.description}
              </p>
            </div>
          </div>
          <div>
            {/* price and stock details */}
            <Card>
              <CardContent className='p-4 flex flex-col  gap-4'>
                <ProductPrice price={product.price} />

                {product.countInStock > 0 && product.countInStock <= 3 && (
                  <div className='text-destructive font-bold'>
                    {`Only ${product.countInStock} left in stock - order soon`}
                  </div>
                )}
                {product.countInStock !== 0 ? (
                  <div className='text-green-700 text-xl'>In Stock</div>
                ) : (
                  <div className='text-destructive text-xl'>
                    Out of Stock
                  </div>
                )}
              </CardContent>
              <CardFooter>
                    {/* Add to cart */}
                    {product.countInStock !== 0 && (
                      <div className='flex justify-center items-center'>
                        <AddToCart
                          item={{
                            clientId:generateId(),
                            product: product._id,
                            countInStock: product.countInStock,
                            name: product.name,
                            slug: product.slug,
                            category: product.category,
                            quantity: 1,
                            image: product.images[0],
                            price: product.price,
                            size: size || product.sizes[0],
                            color: color || product.colors[0],
                          }}
                        />
                      </div>
                    )}
              </CardFooter>
            </Card>
          </div>
        </div>
      <section className='mt-10'>
        <h2 className='h2-bold mb-2' id='reviews'>
          Customer Reviews
        </h2>
        <ReviewList product={product} userId={session?.user.id} />
      </section>
      </section>
      {/* related items */}
      <section className='mt-10'>
        <ProductSlider
          products={relatedProducts.data}
          title={`Best Sellers in ${product.category}`}
        />
      </section>
      {/* products viewed */}
      <section>
        <BrowsingHistoryList className='mt-10' />
      </section>
    </>
  )
}