import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './stylesMainProductsSlider.css'

// import required modules
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router'

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
      {mainProducts.map((item, index) => (
        <SwiperSlide key={index} className='swiper-slide-main-products'>
          <article className='grid lg:grid-cols-2 place-content-center w-full text-center'>
            <div className=''>
              <img src={item} alt='' />
            </div>
            <div className='lg:row-start-1 grid place-content-center place-items-center gap-4'>
              <p className='font-semibold md:text-lg '>
                Work light, LED, White
              </p>
              <h2 className='text-3xl md:text-5xl font-bold text-pretty'>
                Styles Accessories & <br /> New Table Lamp
              </h2>
              <Link
                to='/products'
                className='btn btn-primary btn-md md:btn-lg md:btn-wide mt-4'
              >
                Show Now
              </Link>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
