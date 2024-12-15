import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './stylesCollectionsSlider.css'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

export function CollectionsSlider() {
  const [_, setInit] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        // navigation={true}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
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
        className="my-swiper-collections w-full"
      >
        <SwiperSlide className="swiper-slide-collections">
          <article className="">
            <div className="rounded-lg bg-white overflow-hidden">
              <img
                className="w-full h-[306px] object-cover"
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/collections/category-1.webp?v=1703562365"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mt-2">Features products</h3>
              <p className="text-lg font-semibold">items 8</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-collections">
          <article className="">
            <div className="rounded-lg bg-white overflow-hidden">
              <img
                className="w-full h-[306px] object-cover"
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/collections/category-1.webp?v=1703562365"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mt-2">Features products</h3>
              <p className="text-lg font-semibold">items 8</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-collections">
          <article className="">
            <div className="rounded-lg bg-white overflow-hidden">
              <img
                className="w-full h-[306px] object-cover"
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/collections/category-1.webp?v=1703562365"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mt-2">Features products</h3>
              <p className="text-lg font-semibold">items 8</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-collections">
          <article className="">
            <div className="rounded-lg bg-white overflow-hidden">
              <img
                className="w-full h-[306px] object-cover"
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/collections/category-1.webp?v=1703562365"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mt-2">Features products</h3>
              <p className="text-lg font-semibold">items 8</p>
            </div>
          </article>
        </SwiperSlide>
        <div
          className={`hidden md:block w-full absolute top-[33%] z-10 px-4 text-dark ${
            isHovered
              ? 'opacity-100 transition-opacity duration-300 ease-in-out'
              : 'opacity-0 transition-opacity duration-300 ease-in-out'
          }`}
        >
          <div
            ref={prevRef}
            className="p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute left-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </div>
          <div
            ref={nextRef}
            className="p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  )
}
