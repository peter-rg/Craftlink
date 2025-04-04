import CartButton from './cart-button'
import UserButton from './user-button'

const Menu = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <UserButton />
        {!isAdmin && <CartButton />}  {/* Only show CartButton if not admin */}
      </nav>
    </div>
  )
}

export default Menu
