import { Layout } from '../layouts/Layout'
import { CollectionsSlider } from '../sections/CollectionsSlider'
import { FeaturedProducts } from '../sections/FeaturedProducts'
import { MainProductsSlider } from '../sections/MainProductsSlider'
import { OfferProduct } from '../sections/OfferProduct'

export default function Home() {
  return (
    <Layout>
      <MainProductsSlider />
      <CollectionsSlider />
      <FeaturedProducts />
      <OfferProduct />
    </Layout>
  )
}
