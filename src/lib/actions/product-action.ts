import { PAGE_SIZE } from "../constants";
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

export async function getProductBySlug(slug:string){
    await dbConnect()
    const product = await Product.findOne({slug, isPublished:true})
    if(!product) throw new Error('product not found')
    return JSON.parse(JSON.stringify(product)) as IProduct
}

export async function getProductsRelatedByCategory({category,productId,limit= PAGE_SIZE, page=1}:{
    category:string, productId:string, limit?:number, page:number
}){
    await dbConnect()
    const skipAmount = (Number(page)-1)*limit
    const conditions = { 
        isPublished:true, category, _id:{$ne: productId}
    }

    const products = await Product.find(conditions)
        .sort({numSales :'desc'})
        .skip(skipAmount)
        .limit(limit)
    const productscount = await Product.countDocuments(conditions)

    return {
        data: JSON.parse(JSON.stringify(products)) as IProduct[],
        totalPages: Math.ceil(productscount / limit)
    }
}