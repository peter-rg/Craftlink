import CartButton from './cart-button'
import UserButton from './user-button'

const Menu = ({ forAdmin = false }: { forAdmin?: boolean }) => {

  
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <UserButton />
        {forAdmin ? null : <CartButton />}
      </nav>
    </div>
  )
}

export default Menu