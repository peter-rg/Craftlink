
import data from '@/lib/data'

import Product from './models/product.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import dbConnect from './mongodb'

loadEnvConfig(cwd())

const main = async () => {
    try {
    const { products } = data
    await dbConnect(process.env.MONGODB_URI)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)

    console.log({
        createdProducts,
        message: 'Seeded database successfully',
    })
    process.exit(0)
    } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
    }
}

main()
