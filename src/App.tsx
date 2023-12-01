import One from "./components/Section/1";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="radial-gradient flex items-center">
      <div className=" md:block hidden flex-1 pl-20 py-20">
        <One />
      </div>
      <div className="w-full h-[100vh] flex items-center justify-center bg-white max-w-[640px]">
        <SignUp />
      </div>
    </div>
  );
}

export default App;
