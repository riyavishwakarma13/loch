import One from "./components/Section/1";
import Two from "./components/Section/2";
import Three from "./components/Section/3";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className=" flex items-center">
      <div className=" lg:block hidden radial-gradient space-y-20 flex-1 lg:pl-40 py-10">
        <One />
        <Two />
        <Three />
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center bg-white lg:max-w-[640px]">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
