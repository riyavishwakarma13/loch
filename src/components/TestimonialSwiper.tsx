import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSwiper = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        roundLengths={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper pr-3"
      >
        <SwiperSlide className="bg-white w-full max-w-[350px] rounded-xl box-gradient space-y-3 p-4">
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold">Jack F</p>
            <p className="text-sm text-gray-400 font-medium">Ex Blackrock PM</p>
          </div>
          <p>
            “Love how Loch integrates portfolio analytics and whale watching
            into one unified app.”
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white w-full max-w-[350px] rounded-xl box-gradient space-y-3 p-4">
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold">Yash P</p>
            <p className="text-sm text-gray-400 font-medium">
              Research, 3poch Crypto Hedge Fund
            </p>
          </div>
          <p>
            “I use Loch everyday now. I don't think I could analyze crypto whale
            trends markets without it. I'm addicted!”
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-white w-full max-w-[530px] rounded-xl box-gradient space-y-3 p-4">
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold">Shiv S</p>
            <p className="text-sm text-gray-400 font-medium">
              Co-Founder Magik Labs
            </p>
          </div>
          <p>
            “Managing my own portfolio is helpful and well designed. What&apos;s
            really interesting is watching the whales though. No one else has
            made whale tracking so simple.”
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
