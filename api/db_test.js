import DbConnect from "@/lib/db/mongodb"


const handler = async(_req,res) => {
    await DbConnect()
    res.status(200).json({message:"Database connected"})
}

export default handler
