import { Container } from './Container'

export const Header = () => {
  const isSession = false

  return (
    <Container
      element='header'
      className='flex flex-col w-full pb-2 h-[114px] lg:h-[65px] fixed left-1/2 -translate-x-1/2 z-50 bg-base-100'
    >
      <div className='navbar bg-base-100 w-full justify-between gap-4'>
        <div>
          <a href='/' className='text-xl font-bold'>
            eCommerce
          </a>
        </div>

        <div className='relative hidden lg:flex gap-6 max-w-5xl w-full'>
          <button
            id='open-menu'
            className='btn btn-ghost flex items-center gap-2'
          >
            <p className='text-lg font-semibold'>Paginas</p>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-menu-2'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M4 6l16 0'></path>
              <path d='M4 12l16 0'></path>
              <path d='M4 18l16 0'></path>
            </svg>
          </button>

          <input
            type='text'
            value=''
            className='w-full py-2 px-5 truncate rounded-full border-base-content border-[1px] bg-base-200 outline-none'
          />
          <button className='absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-search'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
              <path d='M21 21l-6 -6'></path>
            </svg>
          </button>
        </div>

        <div className='flex-none'>
          <button className='btn btn-ghost btn-circle'>
            <label className='swap swap-rotate'>
              {/* <!-- this hidden checkbox controls the state --> */}
              <input
                type='checkbox'
                className='theme-controller'
                value='synthwave'
              />

              {/* <!-- sun icon --> */}
              <svg
                className='swap-off h-10 w-10 fill-current scale-[0.6]'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z'></path>
              </svg>

              {/* <!-- moon icon --> */}
              <svg
                className='swap-on h-10 w-10 fill-current scale-[0.6]'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z'></path>
              </svg>
            </label>
          </button>

          <div className='dropdown dropdown-end'>
            <div role='button' className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  ></path>
                </svg>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-user'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
                <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
              </svg>
            </a>
          )}
          <button
            id='open-menu'
            className='btn btn-ghost btn-circle flex items-center gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='icon icon-tabler icons-tabler-outline icon-tabler-menu-2'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M4 6l16 0'></path>
              <path d='M4 12l16 0'></path>
              <path d='M4 18l16 0'></path>
            </svg>
          </button>
        </div>
      </div>

      <div className='relative block lg:hidden'>
        <input
          type='text'
          value=''
          className='w-full py-2 px-5 truncate rounded-full border-base-content border-[1px] bg-base-300 outline-none'
        />
        <button className='absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 text-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-search'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
            <path d='M21 21l-6 -6'></path>
          </svg>
        </button>
      </div>
    </Container>
  )
}
