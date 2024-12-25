import { useStorDom } from '../../stores/storeDom'
import { Container } from './Container'

import {
  AlignJustify,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  User,
} from 'lucide-react'

export const Header = () => {
  const { showAside, setShowAside } = useStorDom()

  const handleClick = () => {
    setShowAside({ showAside: !showAside })
  }

  const isSession = false

  return (
    <Container
      element='header'
      className='flex flex-col w-full pb-2 h-[114px] lg:h-[65px] fixed left-1/2 -translate-x-1/2 z-40 bg-base-100'
    >
      <div className='navbar bg-base-100 w-full justify-between gap-4'>
        <div>
          <a href='/' className='text-xl font-bold'>
            eCommerce
          </a>
        </div>

        <div className='relative hidden lg:flex gap-6 max-w-5xl w-full'>
          <button className='btn btn-ghost flex  gap-2' onClick={handleClick}>
            <p className='text-lg font-semibold'>Paginas</p>

            <AlignJustify size={20} />
          </button>

          <input
            type='text'
            defaultValue={''}
            className='w-full py-2 px-5 truncate rounded-full border-base-content border-[1px] bg-base-200 outline-none'
          />
          <button className='absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 text-black'>
            <Search size={24} />
          </button>
        </div>

        <div className='flex-none'>
          <button className='btn btn-ghost btn-circle'>
            {/* <!-- sun icon --> */}
            <Sun size={22} className='hidden' />

            {/* <!-- moon icon --> */}
            <Moon size={22} />
          </button>

          <div className='dropdown dropdown-end'>
            <div role='button' className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <ShoppingCart size={22} />
                <span className='badge badge-sm indicator-item'>8</span>
              </div>
            </div>

            <div className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'>
              <div className='card-body'>
                <span className='text-lg font-bold'>8 Items</span>
                <span className='text-info'>Subtotal: $999</span>
                <div className='card-actions'>
                  <button className='btn btn-primary btn-block'>
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isSession ? (
            <div className='dropdown dropdown-end'>
              <div role='button' className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <a href='/' className='btn btn-circle btn-ghost'>
              <User size={22} />
            </a>
          )}

          <button
            className='flex lg:hidden btn btn-ghost btn-circle items-center gap-2'
            onClick={handleClick}
          >
            <AlignJustify size={22} />
          </button>
        </div>
      </div>

      <div className='relative block lg:hidden'>
        <input
          type='text'
          defaultValue={''}
          className='w-full py-2 px-5 truncate rounded-full border-base-content border-[1px] bg-base-300 outline-none'
        />

        <button className='absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 text-black'>
          <Search size={22} />
        </button>
      </div>
    </Container>
  )
}
