import { Plus } from 'lucide-react'
import { CardProductAddToCart } from '../components/general/CardProductAddToCart'
import { Layout } from '../layouts/Layout'

export const Products = () => {
  const products = Array(5).fill('')

  return (
    <Layout>
      <section>
        <h1>Products</h1>
      </section>
      <div>Options products</div>
      <div>Information products</div>
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
