import One from "./Section/1";
import Two from "./Section/2";

const Mobile = () => {
  return (
    <div className="flex justify-center flex-col relative items-center gap-5 px-3 xl:hidden radial-gradient bg-black text-white">
      <div className="bg-black z-50 flex w-full cursor-pointer sticky top-2 justify-between bg-opacity-40 backdrop-blur-xl rounded-full px-4 py-2">
        <img src="/assets/Vector.svg" height={50} width={50} alt="Loch Logo" />
        <img
          src="/assets/hamburger.svg"
          alt="hamburger menu"
          height={40}
          width={40}
        />
      </div>
      <div className="space-y-5">
        <One />
        <Two />
      </div>
    </div>
  );
};

export default Mobile;
