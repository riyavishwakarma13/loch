import One from "./components/Section/1";
import Two from "./components/Section/2";
import Three from "./components/Section/3";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-[0.7] xl:block hidden max-h-screen scrollbar-none overflow-auto">
        <div className="space-y-9 flex-1 min-h-screen pl-4 2xl:pl-32 pt-10 py-6">
          <One />
          <Two />
          <Three />
        </div>
      </div>
      <div className="flex-1 xl:flex-[0.3]  bg-white">
        <div className="w-full flex items-center h-[100dvh] justify-center bg-white xl:w-[640px] ">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;
