import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './stylesMainProductsSlider.css'

// import required modules
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router'
import { CardProductStrong } from '../../components/general/CardProductStrong'

export function MainProductsSlider() {
  const value =
    'https://cdn.shopify.com/s/files/1/0631/6815/1720/files/Group1000005037.png?v=1700127846'

  const mainProducts = Array(5).fill(value)
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet-main-products',
        bulletActiveClass: 'swiper-pagination-bullet-active-main-products',
      }}
      modules={[Pagination]}
      className='my-swiper-main-products'
    >
      {mainProducts.map(index => (
        <SwiperSlide key={index} className='swiper-slide-main-products'>
          <CardProductStrong key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
