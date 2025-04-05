
import data from '@/lib/data'

import Product from './models/product.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import dbConnect from './mongodb'
import User from './models/user.model'
import WebPage from './models/webpage.model'
import Review from './models/review.model'

loadEnvConfig(cwd())
console.log(process.env.MONGODB_URI);
const main = async () => {
    try {
        const { users, products, reviews, webPages } = data
        await dbConnect(process.env.MONGODB_URI)
    
        await User.deleteMany()
        const createdUser = await User.insertMany(users)
    
        await WebPage.deleteMany()
        await WebPage.insertMany(webPages)
    
        await Product.deleteMany()
        const createdProducts = await Product.insertMany(
          products.map((x) => ({ ...x, _id: undefined }))
        )
    
        await Review.deleteMany()
        const rws = []
        for (let i = 0; i < createdProducts.length; i++) {
          let x = 0
          const { ratingDistribution } = createdProducts[i]
          for (let j = 0; j < ratingDistribution.length; j++) {
            for (let k = 0; k < ratingDistribution[j].count; k++) {
              x++
              rws.push({
                ...reviews.filter((x) => x.rating === j + 1)[
                  x % reviews.filter((x) => x.rating === j + 1).length
                ],
                isVerifiedPurchase: true,
                product: createdProducts[i]._id,
                user: createdUser[x % createdUser.length]._id,
                updatedAt: Date.now(),
                createdAt: Date.now(),
              })
            }
          }
        }
        const createdReviews = await Review.insertMany(rws)
        console.log({
          createdUser,
          createdProducts,
          createdReviews,
          message: 'Seeded database successfully',
        })
    process.exit(0)
    } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
    }
}

main()
