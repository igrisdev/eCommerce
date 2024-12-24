import { Github, Instagram, Linkedin } from 'lucide-react'
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
            <Github size={24} />
          </a>

          <a href='/' className='btn btn-circle btn-outline'>
            <Instagram size={24} />
          </a>

          <a href='/' className='btn btn-circle btn-outline'>
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div>Derechos</div>
    </Container>
  )
}
