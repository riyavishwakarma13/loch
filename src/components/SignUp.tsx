const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="font-medium pl-2 self-start text-4xl text-gray-400">
        Sign up for <br /> exclusive access.
      </h1>
      <form className="flex flex-col gap-5 w-full max-w-[340px]">
        <input
          type="text"
          placeholder="Your email address"
          className="border border-gray-300 py-5 px-6 rounded-lg shadow-md placeholder:text-gray-300"
        />
        <button className="bg-black  text-white font-semibold py-4 px-7 rounded-lg">
          Get Started
        </button>
      </form>
      <p className="font-semibold">
        You&apos;ll receive an email with an invite link to join.
      </p>
    </div>
  );
};

export default SignUp;
