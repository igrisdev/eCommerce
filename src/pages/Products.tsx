import { Plus } from 'lucide-react'
import { CardProductAddToCart } from '../components/general/CardProductAddToCart'
import { Layout } from '../layouts/Layout'

export const Products = () => {
  const products = Array(6).fill('')

  return (
    <Layout>
      <section className='grid gap-4 lg:grid-cols-2 pt-10 lg:pt-20'>
        <div className='min-h-[82vh]'>
          <h1>Products</h1>
        </div>

        <div className='max-w-3xl lg:max-w-full mx-auto w-full'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl font-semibold'>Lampara</h2>

            <div className='flex gap-3 items-center'>
              <p className='text-2xl font-semibold'>$ 300,000</p>
              <span className='text-lg  line-through'>$ 300,000</span>
            </div>
          </div>

          <div className='flex flex-col gap-4 mt-4'>
            <h2 className='text-2xl font-semibold'>Color</h2>

            <div className='flex justify-between gap-2 w-max'>
              <a href='/products' className='btn btn-square btn-lg'>
                <img
                  className='w-full h-full object-contain'
                  src='https://cdn.shopify.com/s/files/1/0631/6815/1720/files/90_mini_mini_desk_lamp_carbon_black_2_2.jpg?v=1700024191'
                  alt=''
                />
              </a>
              <a href='/products' className='btn btn-square btn-lg'>
                <img
                  className='w-full h-full object-contain'
                  src='https://cdn.shopify.com/s/files/1/0631/6815/1720/files/90_mini_mini_desk_lamp_carbon_black_2_2.jpg?v=1700024191'
                  alt=''
                />
              </a>
              <a href='/products' className='btn btn-square btn-lg'>
                <img
                  className='w-full h-full object-contain'
                  src='https://cdn.shopify.com/s/files/1/0631/6815/1720/files/90_mini_mini_desk_lamp_carbon_black_2_2.jpg?v=1700024191'
                  alt=''
                />
              </a>
            </div>
          </div>

          <form className='flex flex-col gap-4 mt-4'>
            <div className='flex flex-col gap-4 mt-4'>
              <label htmlFor='tamaño' className='text-2xl font-semibold'>
                Tamaño
              </label>
              <select
                name='tamaño'
                id='tamaño'
                className='w-max p-2 rounded-md bg-base-200'
              >
                <option value='pequeño'>pequeño</option>
                <option value='mediano'>mediano</option>
                <option value='grande'>grande</option>
              </select>
            </div>

            <button className='btn btn-primary btn-md font-bold w-max tracking-wider text-md'>
              Add to Cart
            </button>
          </form>
        </div>
      </section>

      <section>
        <div className='flex gap-4 mt-12'>
          <button className='bg-base-100 translate-y-[2px] z-10 border-x-2 border-t-2 border-primary p-4 rounded-t-md w-max'>
            características
          </button>
          <button className='hidden bg-base-100 translate-y-[2px] z-10 border-x-2 border-t-2 border-primary p-4 rounded-t-md w-max'>
            características
          </button>
        </div>

        <div className='border-2 border-primary p-4 rounded-tr-md rounded-b-md'>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in
            aut vel consectetur facilis recusandae ipsa? Consequatur sapiente
            temporibus ea minima ut maiores. Rerum quidem assumenda voluptatum
            eius quae labore!
          </article>
          <article className='hidden'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum in
            aut vel consectetur facilis recusandae ipsa? Consequatur sapiente
            temporibus ea minima ut maiores. Rerum quidem assumenda voluptatum
            eius quae labore!
          </article>
        </div>
      </section>

      <section>
        <h2 className='text-center text-3xl font-semibold py-12'>
          Productos Destacados
        </h2>

        <div className='flex flex-wrap gap-5 justify-evenly'>
          {products.map((_, index) => (
            <CardProductAddToCart key={index} />
          ))}
        </div>

        <div className='grid place-content-center mt-10'>
          <a href='/' className='btn btn-lg btn-wide btn-primary'>
            <Plus size={24} />
            See All Products
          </a>
        </div>
      </section>
    </Layout>
  )
}
