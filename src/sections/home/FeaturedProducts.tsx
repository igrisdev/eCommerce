import { Plus } from 'lucide-react'
import './stylesFeaturedProducts.css'
import { CardProductAddToCart } from '../../components/general/CardProductAddToCart'
import { Link } from 'react-router'

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
          <CardProductAddToCart key={index} />
        ))}
      </div>

      <div className='grid place-content-center mt-10'>
        <Link to='/' className='btn btn-lg btn-wide btn-primary'>
          <Plus size={24} />
          See All Products
        </Link>
      </div>
    </section>
  )
}
