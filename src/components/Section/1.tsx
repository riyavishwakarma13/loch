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
      <div className="xl:hidden flex">ddfgkjfdljk</div>
    </div>
  );
};

export default One;
