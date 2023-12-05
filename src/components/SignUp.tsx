import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    window.location.href = "https://app.loch.one/welcome";
  };

  return (
    <div>
      <div className="hidden xl:flex flex-col items-center justify-center gap-5">
        <h1 className="font-medium pl-2 self-start text-4xl text-gray-400">
          Sign up for <br /> exclusive access.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-[80%] xl:w-full  max-w-[340px]"
        >
          <input
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border border-gray-300 py-5 px-6 rounded-lg shadow-md placeholder:text-gray-300"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button className="bg-black  text-white font-semibold py-4 px-7 rounded-lg">
            Get Started
          </button>
        </form>
        <p className="font-semibold">
          You&apos;ll receive an email with an invite link to join.
        </p>
      </div>
      <div className="flex xl:hidden flex-col items-center bg-white backdrop-blur-lg p-5 rounded-xl w-full md:w-[500px] h-[500px] text-white bg-opacity-25 justify-center gap-5">
        <h1 className="font-medium pl-2 text-center text-4xl ">
          Sign up for exclusive access.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-[80%] xl:w-full  max-w-[340px]"
        >
          <input
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border border-gray-300 py-5 px-6 rounded-lg shadow-md bg-black bg-opacity-50  placeholder:text-gray-300"
          />
          {errorMessage && <p className="text-red-200">{errorMessage}</p>}
          <button className="bg-white  text-black font-semibold py-4 px-7 rounded-lg">
            Get Started
          </button>
        </form>
        <p className="font-semibold text-center">
          You&apos;ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
