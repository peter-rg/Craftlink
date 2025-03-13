
import data from '@/lib/data'

import Product from './models/product.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import dbConnect from './mongodb'
import User from './models/user.model'

loadEnvConfig(cwd())
console.log(process.env.MONGODB_URI);
const main = async () => {
    try {
    const { products,users } = data
    await dbConnect(process.env.MONGODB_URI)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)
    await User.deleteMany()
    const createdUser = await User.insertMany(users)

    console.log({
        createdProducts,
        createdUser,
        message: 'Seeded database successfully',
    })
    process.exit(0)
    } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
    }
}

main()
