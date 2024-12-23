import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

export const CollectionsSlider = () => {
  const [_, setInit] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const collections = Array(6).fill('')

  return (
    <section>
      <div>
        <h2 className='text-4xl font-bold pt-20 pb-10 text-center'>
          Collections
        </h2>
      </div>

      <div
        className='relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          //trigger a re-render by updating the state on swiper initialization
          onInit={() => setInit(true)}
          className='my-swiper-collections w-full'
        >
          {collections.map((_, index) => (
            <SwiperSlide key={index} className='swiper-slide-collections'>
              <a href='/products'>
                <article className=''>
                  <div className='rounded-lg bg-white overflow-hidden'>
                    <img
                      className='w-full h-[306px] object-cover'
                      src='https://cdn.shopify.com/s/files/1/0631/6815/1720/collections/category-1.webp?v=1703562365'
                      alt=''
                    />
                  </div>
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold mt-2'>
                      Features products
                    </h3>
                    <p className='text-lg font-semibold'>items 8</p>
                  </div>
                </article>
              </a>
            </SwiperSlide>
          ))}
          <div
            className={`hidden md:block w-full absolute top-[33%] z-10 px-4 text-black ${
              isHovered
                ? 'opacity-100 transition-opacity duration-300 ease-in-out'
                : 'opacity-0 transition-opacity duration-300 ease-in-out'
            }`}
          >
            <div
              ref={prevRef}
              className='p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute left-4'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-left'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l14 0' />
                <path d='M5 12l6 6' />
                <path d='M5 12l6 -6' />
              </svg>
            </div>
            <div
              ref={nextRef}
              className='p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute right-4'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-right'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 12l14 0' />
                <path d='M13 18l6 -6' />
                <path d='M13 6l6 6' />
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
