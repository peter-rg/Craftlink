
import Carasal from '@/components/shared/home/carasal'
import data from '@/lib/data'



const page = () => {
  return (
    <Carasal items={data.carousels}/>
  )
}

export default page
