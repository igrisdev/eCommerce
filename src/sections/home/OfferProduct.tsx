import { Link } from 'react-router'

export const OfferProduct = () => {
  return (
    <section className='mt-20 bg-base-300 rounded-md h-[85vh] lg:h-[60vh] flex items-center'>
      <article className='grid lg:grid-cols-2 place-content-center w-full text-center'>
        <div className=''>
          <img
            src='https://cdn.shopify.com/s/files/1/0631/6815/1720/files/Group1000005037.png?v=1700127846'
            alt=''
          />
        </div>
        <div className='lg:row-start-1 grid place-content-center place-items-center gap-4'>
          <p className='font-semibold md:text-lg'>Work light, LED, White</p>
          <h2 className='text-3xl md:text-5xl font-bold text-pretty'>
            Styles Accessories & <br /> New Table Lamp
          </h2>
          <Link
            to='/products'
            className='btn btn-primary btn-md md:btn-lg md:btn-wide'
          >
            Show Now
          </Link>
        </div>
      </article>
    </section>
  )
}
