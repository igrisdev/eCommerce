import { Layout } from '../layouts/Layout'
import { CollectionsSlider } from '../sections/home/CollectionsSlider'
import { FeaturedProducts } from '../sections/home/FeaturedProducts'
import { MainProductsSlider } from '../sections/home/MainProductsSlider'
import { OfferProduct } from '../sections/home/OfferProduct'

export const Home = () => {
  return (
    <Layout>
      <MainProductsSlider />
      <CollectionsSlider />
      <FeaturedProducts />
      <OfferProduct />
    </Layout>
  )
}
