import { createPortal } from 'react-dom'
import { useStorDom } from '../../stores/storeDom'
import { X } from 'lucide-react'

export const Aside = () => {
  const { showAside, setShowAside } = useStorDom()

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement

    if (
      target.className.includes('showAsideContainer') ||
      target.nodeName === 'LI' ||
      target.nodeName === 'UL'
    ) {
      return
    }
    console.log(target)

    setShowAside({ showAside: !showAside })
  }

  return createPortal(
    <div
      className='fixed top-0 bg-base-300/80 w-full h-screen z-[60]'
      onClick={e => handleClick(e)}
    >
      <div className='showAsideContainer flex flex-col gap-14 w-full md:w-[380px] h-full bg-base-100 p-4'>
        <div className='flex justify-between items-center'>
          <a href='/' className='text-3xl font-bold'>
            eCommerce
          </a>

          <button
            id='close-menu'
            className='btn btn-md btn-circle btn-ghost'
            onClick={handleClick}
          >
            <X size={24} />
          </button>
        </div>

        <nav>
          <ul className='font-semibold text-2xl grid gap-5 pl-4'>
            <li>
              <a className='hover:text-primary' href='/d'>
                Home
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='/'>
                About Us
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='/'>
                Hola 1
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>,
    document.body
  )
}
