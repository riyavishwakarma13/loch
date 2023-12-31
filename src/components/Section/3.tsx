import TestimonialSwiper from "../TestimonialSwiper";

const Three = () => {
  return (
    <>
      <div className="hidden xl:flex flex-col">
        <div className="pb-6 mr-20 border-b border-[#E5E5E680]">
          <h4 className="text-white text-2xl text-center 2xl:text-right">
            Testimonials
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-end py-5 justify-between gap-6">
          <img
            src="/assets/Vector.svg"
            alt="Loch Logo"
            height={60}
            width={60}
          />
          <TestimonialSwiper />
        </div>
      </div>
      <div className="xl:hidden pb-10 flex flex-col text-black">
        <div className="pb-6 my-10 border-b border-[#E5E5E680]">
          <h4 className="text-white text-2xl font-semibold text-center">
            Testimonials
          </h4>
        </div>
        <TestimonialSwiper />
      </div>
    </>
  );
};

export default Three;
