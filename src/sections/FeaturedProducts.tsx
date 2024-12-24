import { Plus } from 'lucide-react'
import './stylesFeaturedProducts.css'

export const FeaturedProducts = () => {
  const featuredProducts = Array(31).fill('').slice(0, 8)

  return (
    <section>
      <div className='text-center pt-20 pb-10'>
        <h2 className='text-4xl font-bold'>Featured Products</h2>
        <p className='text-lg font-semibold'>Explore Today's Featured Picks!</p>
      </div>

      <div className='container-featured-products'>
        {featuredProducts.map((_, index) => (
          <article key={index} className='relative group flex flex-col w-max'>
            <a href='/products' className='absolute w-full h-full z-20' />
            <div className='relative aspect-[1.1/1] max-h-[300px] rounded-lg bg-white overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src='https://cdn.shopify.com/s/files/1/0631/6815/1720/files/90_mini_mini_desk_lamp_carbon_black_2_2.jpg?v=1700024191'
                alt=''
              />

              <button className='absolute btn group-hover:bottom-6 -bottom-12 right-1/2 !translate-x-1/2 transition-[bottom] z-40'>
                Add to Cart
              </button>
            </div>
            <div className='text-center'>
              <h3 className='text-2xl font-bold mt-2'>Features products</h3>
              <p className='text-lg font-semibold'>$ 303030 COP</p>
            </div>
          </article>
        ))}
      </div>

      <div className='grid place-content-center mt-10'>
        <a href='/' className='btn btn-lg btn-wide btn-primary'>
          <Plus size={24} />
          See All Products
        </a>
      </div>
    </section>
  )
}
