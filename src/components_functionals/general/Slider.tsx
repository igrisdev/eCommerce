// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Pagination } from 'swiper/modules'

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <article className="grid lg:grid-cols-2 place-content-center w-full text-center">
            <div className="">
              <img
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/files/Group1000005037.png?v=1700127846"
                alt=""
              />
            </div>
            <div className="lg:row-start-1 grid place-content-center place-items-center gap-4">
              <p className="font-semibold text-lg">Work light, LED, White</p>
              <h2 className="text-5xl font-bold text-pretty">
                Syles Accessories & <br /> New Table Lamp
              </h2>
              <button className="btn btn-primary btn-lg btn-wide">
                Show Now
              </button>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="grid lg:grid-cols-2 place-content-center w-full text-center">
            <div className="">
              <img
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/files/Group1000005037.png?v=1700127846"
                alt=""
              />
            </div>
            <div className="lg:row-start-1 grid place-content-center place-items-center gap-4">
              <p className="font-semibold text-lg">Work light, LED, White</p>
              <h2 className="text-5xl font-bold text-pretty">
                Syles Accessories & <br /> New Table Lamp
              </h2>
              <button className="btn btn-primary btn-lg btn-wide">
                Show Now
              </button>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
