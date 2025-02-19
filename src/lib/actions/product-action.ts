import Product, { IProduct } from "../db/models/product.model";
import dbConnect from "../db/mongodb";

export async function getAllCategories() {
    await dbConnect()
    const categories = await Product.find({
        isPublished: true
    }).distinct('category')
    return categories
}

export async function getProductsForCard({
    tag, limit=4
}: {
    tag: string,
    limit?:number
}){
    await dbConnect()
    const products = await Product.find({
        tags:{$in:[tag]}, isPublished: true
    },
    {
        name: 1, href: { $concat: ['/product/', '$slug'] },
        image: {$arrayElemAt: ['$images', 0]}
    })
        .sort({ createdAt: 'desc' })
        .limit(limit)
    return (
        JSON.parse(JSON.stringify(products)) as {
            name: string,
            href: string,
            image:string
        }[]
    )
}

export const getProductsByTag = async ({ tag, limit = 10 }: { tag: string, limit?: number }) => {
    await dbConnect()
    const products = await Product.find({
        tags:{$in:[tag]}, isPublished:true
    })
        .sort({createdAt: 'desc'})
        .limit(limit)
    
    return (
        JSON.parse(JSON.stringify(products)) as IProduct[]
    )
}

