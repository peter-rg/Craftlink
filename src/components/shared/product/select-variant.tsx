import { Button } from '@/components/ui/button'
import { IProduct } from '@/lib/db/models/product.model'
import Link from 'next/link'

export default function SelectVariant({
  product,
  size,
  color,
}: {
  product: IProduct
  color: string
  size: string
}) {
  const selectedColor = color || product.colors[0]
  const selectedSize = size || product.sizes[0]

  return (
    <>
      {product.colors.length > 0 && (
        <div className='space-x-2 space-y-2'>
          <div>Color:</div>
          {product.colors.map((colour: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedColor === colour ? 'border-2 border-primary' : 'border-2'
              }
              key={colour}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: colour,
                  size: selectedSize,
                })}`}
                key={colour}
              >
                <div
                  style={{ backgroundColor: colour }}
                  className='h-4 w-4 rounded-full border border-muted-foreground'
                ></div>
                {colour}
              </Link>
            </Button>
          ))}
        </div>
      )}
      {product.sizes.length > 0 && (
        <div className='mt-2 space-x-2 space-y-2'>
          <div>Size:</div>
          {product.sizes.map((needSize: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedSize === needSize
                  ? 'border-2  border-primary'
                  : 'border-2  '
              }
              key={needSize}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  color: selectedColor,
                  size: needSize,
                })}`}
              >
                {needSize}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  )
}