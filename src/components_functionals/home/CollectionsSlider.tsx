import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './stylesCollectionsSlider.css'

// import required modules
import { Navigation } from 'swiper/modules'

export function CollectionsSlider() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiperCollections"
      >
        <SwiperSlide>
          <article className="">
            <div className="aspect-[1.5/1] max-h-[300px] rounded-lg bg-white overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src="https://cdn.shopify.com/s/files/1/0631/6815/1720/files/90_mini_mini_desk_lamp_carbon_black_2_2.jpg?v=1700024191"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mt-2">Features products</h3>
              <p className="text-lg font-semibold">items 8</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
