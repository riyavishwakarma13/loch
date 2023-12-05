import NotificationSwiper from "../NotificationSwiper";

const One = () => {
  return (
    <div>
      <div className="xl:flex hidden flex-wrap justify-center 2xl:justify-between items-center gap-3">
        <div className="xl:max-w-[322px] space-y-4 w-full">
          <img
            src="/assets/Bell.svg"
            height={32}
            width={32}
            alt="notify bell"
          />
          <h2 className=" text-xl lg:text-3xl font-medium text-shadow ">
            Get notified when a highly correlated whale makes a move
          </h2>
          <p className="text-base text-[#F2F2F2]">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <NotificationSwiper />
      </div>
      <div className="xl:hidden px-5 max-w-[610px] w-full py-10 rounded-lg gap-5 flex flex-col justify-center backdrop-blur-lg bg-white bg-opacity-20 items-center text-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="/assets/Bell.svg"
            height={32}
            width={32}
            alt="notify bell"
          />
          <h2 className=" text-xl font-semibold text-shadow">
            Get notified when a highly correlated whale makes a move
          </h2>
          <p className="text-base text-[#F2F2F2]">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="text-black">
          <NotificationSwiper />
        </div>
      </div>
    </div>
  );
};

export default One;
