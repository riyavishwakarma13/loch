import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, A11y } from "swiper/modules";

const NotificationSwiper = () => {
  return (
    <div className="px-4  max-w-[320px] w-[250px] sm:w-full xl:max-w-[400px]">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        roundLengths={true}
        loop={true}
        modules={[Autoplay, A11y]}
        className="mySwiper"
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        // breakpoints={{
        //   // when window width is >= 320px
        //   576: {
        //     slidesPerView: 2,
        //   },
        //   // when window width is >= 480px
        //   992: {
        //     slidesPerView: 3,
        //   },
        //   // when window width is >= 640px
        //   1400: {
        //     slidesPerView: 4,
        //   },
        // }}
      >
        <SwiperSlide className="bg-white max-w-full !w-[190px] rounded-lg space-y-3 h-[171px] p-3">
          <div className="flex justify-between items-start">
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
        <SwiperSlide className="bg-white max-w-full !w-[190px] rounded-lg flex flex-col justify-between h-[171px] p-3">
          <div className="flex justify-between items-start">
            <img
              src="/assets/bar-chart-2.svg"
              alt="bar chart"
              height={28}
              width={28}
            />
            <img
              src="/assets/icon.svg"
              alt="checkbox"
              className="bg-[#0071E3] rounded-[4.2px] p-[3px]"
              height={16}
              width={16}
            />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-medium">
              Notify me when any wallets move more than
            </p>
            <div className="bg-[#e5e5e680] flex items-center gap-1 w-max p-1 rounded-sm">
              <span className="text-[9px] font-medium">$1,000.00</span>
              <img src="/assets/triangle-down.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white max-w-full !w-[190px] rounded-lg flex flex-col justify-between h-[171px] p-3">
          <div className="flex justify-between items-start">
            <img
              src="/assets/clock.svg"
              alt="bar chart"
              height={28}
              width={28}
            />
            <img
              src="/assets/icon.svg"
              alt="checkbox"
              className="bg-[#0071E3] rounded-[4.2px] p-[3px]"
              height={16}
              width={16}
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium">
              Notify me when any wallet dormant for
            </p>
            <div className="bg-[#e5e5e680] flex items-center gap-1 w-max p-1 rounded-sm">
              <span className="text-[9px] font-medium">&gt; 30 days</span>
              <img src="/assets/triangle-down.svg" alt="" />
            </div>
            <p className="text-xs font-medium">becomes active</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NotificationSwiper;
