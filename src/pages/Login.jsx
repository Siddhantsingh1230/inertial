import login1 from "../assets/images/login1.jfif";
import login2 from "../assets/images/login2.jfif";
import login3 from "../assets/images/login3.jfif";
import login4 from "../assets/images/login4.jfif";
import login5 from "../assets/images/login5.jfif";
import login6 from "../assets/images/login6.jpg";
import login7 from "../assets/images/login7.jfif";
import login8 from "../assets/images/login8.jfif";
import login9 from "../assets/images/login9.jfif";
import LogoTrans from "../assets/images/Logotrans.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [passType, setPassType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* login page main div */}
      <div className="flex flex-col bg-black w-full h-full overflow-hidden relative">
        {/* header */}
        <div className="z-30 flex w-full h-auto relative px-20">
          <Link to="/start" className="flex gap-2  justify-center items-center py-10">
            <img src={LogoTrans} className="w-6 select-none" alt="" />
            <p className="text-white text-xl inter  font-bold select-none uppercase ">
              Inerti<span className="text-[#00CBFB] mx-1">.</span>
              <span className="text-transparent inter  font-bold bg-clip-text bg-gradient-to-r from-[#00D6FD]  to-[#DE26F6] uppercase">
                al
              </span>
            </p>
          </Link>
        </div>
        {/* Login form */}
        <form
          className="z-30 flex w-full h-full relative left-0 justify-start items-center px-12 mb-20 "
          onSubmit={handleSubmit()}
        >
          <div className="flex flex-col xl:w-[30%] max-xl:w-[40%] max-lg:w-[60%] max-md:w-full sm:mb-12 gap-8 ">
            <div className="flex flex-col justify-center items-center gap-2 text-center px-6">
              <p className="text-transparent GreySansBlack text-4xl font-bold bg-clip-text bg-gradient-to-r from-[#35cce7]  to-[#d865e8] uppercase select-none">
                welcome Back
              </p>
              <div className=" text-zinc-300 text-xs select-none">
                Login to access your account and explore the latest updates and
                features.
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              {/* username div */}
              <div className="flex flex-col gap-2">
                <input
                  autoComplete="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  title="email"
                  {...register("email", {
                    required: "Enter email",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Enter valid email",
                    },
                  })}
                  className="rounded-xl p-3 px-4 text-sm bg-zinc-900 text-gray-100 outline-none hover:bg-zinc-800"
                />
                {errors.email && (
                  <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-semibold text-red-700 select-none">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* password div */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="rounded-xl group p-3 px-4 gap-2 flex justify-between text-sm bg-zinc-900 text-gray-100 hover:bg-zinc-800"
                >
                  <input
                    autoComplete="password"
                    id="password"
                    type={passType}
                    placeholder="Password"
                    title="password"
                    name="password"
                    {...register("password", {
                      required: "Enter password",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                        message: `- at least 8 characters
                    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                    - Can contain special characters`,
                      },
                    })}
                    className=" bg-transparent text-sm text-gray-100 outline-none w-full"
                  />
                  <i
                    className={`${
                      passType === "password"
                        ? "ri-eye-off-line"
                        : "ri-eye-line"
                    } cursor-pointer`}
                    onClick={() => {
                      passType === "password"
                        ? setPassType("text")
                        : setPassType("password");
                    }}
                  ></i>
                </label>
                {errors.password && (
                  <p className="inline-flex items-center rounded-md select-none px-2 py-0 text-xs font-semibold text-red-700 ">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Link
                to="/forgotpassword"
                className="flex w-full cursor-pointer justify-end text-xs text-white select-none"
              >
                <p className="text-cyan-200 hover:underline">
                  Forgot password ?
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-5 justify-center w-full items-center">
              <button
                className="text-white font-bold cursor-pointer signInBtn w-full bg-gradient-to-r from-[#41cfe8] py-3
             rounded-xl  to-[#d955ea] shadow-md hover:shadow-lg select-none"
              >
                Log In
              </button>
              <div className="flex gap-2 text-gray-400 text-sm select-none">
                Don't have an account.{" "}
                <p className="inter font-bold position-relative cursor-pointer">
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-[#41cfe8] to-[#d955ea] bg-clip-text text-transparent hover:text-[#41cfe8] hover:underline transition-all duration-300"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
        {/* bg image grid */}
        <div className="flex w-full top-0 left-0 sm:px-24 overflow-hidden max-md:hidden justify-end absolute">
          <div className="login-skew flex w-[70%] max-xl:w-full gap-8">
            <div className="flex flex-col w-full gap-8 mt-10 mb-2 login-skew-items">
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login8} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login7} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login2} />
              </div>
            </div>
            <div className="flex flex-col w-full gap-8 mt-2 mb-10 login-skew-items">
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login3} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login4} />
              </div>
              <div className="w-full max-h-64">
                <img className="w-full rounded-2xl" src={login6} />
              </div>
            </div>
            <div className="flex flex-col w-full gap-8 mt-8 mb-4 login-skew-items">
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login9} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login5} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login1} />
              </div>
            </div>
          </div>
        </div>
        {/* div for black bg gradient effect */}
        <div className=" hidden max-xl:flex absolute h-full w-[45%] max-lg:w-[65%] bg-black z-20 top-0 left-0"></div>
      </div>
    </>
  );
};

export default Login;
