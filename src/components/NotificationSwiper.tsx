import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const NotificationSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="bg-white w-[190px] rounded-lg box-gradient space-y-3 h-[171px] p-3">
          <div className="flex justify-between items-start  ">
            <img
              src="/assets/bell 2.svg"
              height={28}
              width={28}
              alt="bell carousel"
            />
            <p className="font-semibold text-[9px]">Save</p>
          </div>
          <p className="text-sm font-medium">
            We&apos;ll be sending notifications to you <br /> here
          </p>
          <p className="text-xs p-2 bg-white border border-gray-200 rounded-md">
            hello@gmail.com
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NotificationSwiper;
