import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type BrowsingHistory = {products:{id:string, category:string}[]}
const initialState: BrowsingHistory = {products:[]}

export const BrowsingHistoryStore = create<BrowsingHistory>()(
    persist(()=>initialState,{name:'browsingHistoryStore'})
)

export default function useBrowsingHistory(){
    const {products} = BrowsingHistoryStore()

    return {
        products,
        addItem: (product:{id:string, category:string})=>{
            const index= products.findIndex(p=>p.id ===product.id)
            if(index !==-1) products.splice(index,1)//Remove duplicate if it exists
            products.unshift(product) //Add id to the start
            if(products.length>10) products.pop() //Remove excess items 
            
            BrowsingHistoryStore.setState({products})
        },
        clear: ()=>{
            BrowsingHistoryStore.setState({products:[]})
        }
    }
}