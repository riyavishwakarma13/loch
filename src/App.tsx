import One from "./components/Section/1";
import Two from "./components/Section/2";
import Three from "./components/Section/3";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className=" flex items-center h-[100vh]">
      <div className="xl:block hidden space-y-12 flex-1 pl-4 2xl:pl-40 py-6">
        <One />
        <Two />
        <Three />
      </div>
      <div className="w-full flex items-center justify-center h-full bg-white xl:w-[640px] ">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
