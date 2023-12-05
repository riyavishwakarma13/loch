const Two = () => {
  return (
    <div>
      <div className="xl:flex hidden flex-wrap items-center justify-center 2xl:justify-between gap-5 md:pr-20">
        <div className="2xl:order-1 flex flex-col items-end gap-4 w-full max-w-[300px]">
          <img src="/assets/Eye.svg" alt="Eye" height={32} width={32} />
          <h3 className="text-3xl text-center lg:text-right font-medium text-white">
            Watch what the whales are doing
          </h3>
          <p className="text-base text-center lg:text-right text-[#F2F2F2]">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
        <div>
          <img
            src="/assets/dashboard.png"
            alt="dashboard"
            className="rounded-xl border border-gray-200"
            height={306}
            width={335}
          />
        </div>
      </div>
      <div className="xl:hidden px-5 py-10 rounded-lg gap-5 flex sm:flex-row flex-col justify-center backdrop-blur-lg bg-white bg-opacity-20 items-center text-center">
        <div className="2xl:order-1 flex flex-col items-center gap-4 w-full max-w-[300px]">
          <img src="/assets/Eye.svg" alt="Eye" height={32} width={32} />
          <h3 className="text-xl text-center font-medium text-white">
            Watch what the whales are doing
          </h3>
          <p className="text-sm text-center text-[#F2F2F2]">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
        <div>
          <img
            src="/assets/dashboard.png"
            alt="dashboard"
            className="rounded-xl border border-gray-200"
            height={250}
            width={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Two;
