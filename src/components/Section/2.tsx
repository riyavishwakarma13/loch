const Two = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3  md:pr-20">
      <div className="lg:order-1 flex flex-col items-end gap-4 w-full max-w-[300px]">
        <img src="/assets/Eye.svg" alt="Eye" height={32} width={32} />
        <h3 className="text-3xl text-center lg:text-right font-medium text-white">
          Watch what the whales are doing
        </h3>
        <p className="text-base text-center lg:text-right text-[#F2F2F2]">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
      <img
        src="/assets/dashboard.png"
        alt="dashboard"
        className="rounded-xl border border-gray-200"
        height={306}
        width={335}
      />
    </div>
  );
};

export default Two;