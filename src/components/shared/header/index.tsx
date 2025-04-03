import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import Search from './search'
import { getAllCategories } from '@/lib/actions/product-action'
import Sidebar from './sidebar'

export default async function Header() {
  const categories = await getAllCategories()
  return (
    <header className='bg-lt-brown text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          {/* Logo and Name */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1 '
            >
              <Image
                src='/icons/Log.svg'
                width={60}
                height={60}
                alt={`${APP_NAME} logo`}
                className=''
              />
              {APP_NAME}
            </Link>
          </div>
          {/* search bar which is not visible on mobile */}
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>
          {/* menu bar > sign in and cart */}
          <Menu />
        </div>
        {/* search bar which is visible on mobile */}
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      
      <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
        <Sidebar categories={categories} />
        {/* header menu for tags */}
        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className='header-button !p-2'
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
