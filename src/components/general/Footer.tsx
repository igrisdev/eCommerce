import { Container } from './Container'

export const Footer = () => {
  return (
    <Container element='footer' className='flex flex-col mt-20 mb-4'>
      <div className='navbar bg-base-100 w-full justify-between gap-4 border-b-[1px] border-base-content mb-3 pb-5 flex-wrap'>
        <div>
          <a href='/' className='text-xl font-bold'>
            eCommerce
          </a>
        </div>

        <nav>
          <ul className='flex gap-3'>
            <li>
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </nav>

        <div className='flex gap-3'>
          <a href='/' className='btn btn-circle btn-outline'>
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
              className='icon icon-tabler icons-tabler-outline icon-tabler-brand-github'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
            </svg>
          </a>

          <a href='/' className='btn btn-circle btn-outline'>
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
              className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z'></path>
              <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0'></path>
              <path d='M16.5 7.5v.01'></path>
            </svg>
          </a>
          <a href='/' className='btn btn-circle btn-outline'>
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
              className='icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3'></path>
            </svg>
          </a>
        </div>
      </div>
      <div>Derechos</div>
    </Container>
  )
}
