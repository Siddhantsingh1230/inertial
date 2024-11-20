import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jfif";
import s3 from "../assets/images/s3.jfif";
import s4 from "../assets/images/s4.jfif";
import s5 from "../assets/images/s5.jfif";
import s6 from "../assets/images/s6.jfif";
import s7 from "../assets/images/s7.jfif";
import s8 from "../assets/images/s8.jfif";
import s9 from "../assets/images/s9.jpg";
import s10 from "../assets/images/s10.jfif";
import s11 from "../assets/images/s11.jfif";
import s12 from "../assets/images/s12.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LogoTrans from "../assets/images/Logotrans.png";
import { useDispatch } from "react-redux";
import { signupAsync } from "../slices/authSlice";
const SignUp = () => {
  const [passType, setPassType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignup = async (data) => {
    const { email, password, username } = data;
    const sanitizedObject = {
      name: username.trim(),
      email: email.trim(),
      password,
    };
    dispatch(signupAsync(sanitizedObject)).then((action) => {
      if (action.type === "auth/signup/fulfilled") {
        // Navigate to verify account page after signup is successful
        navigate(`/verifyaccount/email/${encodeURIComponent(email.trim())}`);
      }
    });
  };
  return (
    <>
      <style>
        {`
        .triangular-img-card,.reverse-triangular-img-card{
          margin:0 -55px;
        }
        .triangular-img-card{
          padding-top:15px 
        }
        .reverse-triangular-img-card{
          padding-bottom:10px 
        }
          .triangular-img{
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            overflow:hidden;
          }
          .reverse-triangular-img{
            clip-path: polygon(50% 100%, 0 0, 100% 0);
            overflow:hidden;
          }
        input:-webkit-autofill,
        input:-webkit-autofill:focus {
            transition: background-color 600000s 0s, color 600000s 0s;
        }
        input[data-autocompleted] {
            background-color: transparent !important;
        }
      `}
      </style>
      <div className="flex h-full w-full bg-black relative">
        {/* signup form */}
        <form
          className="flex w-full h-full absolute left-0 justify-end items-center px-28 max-xl:px-8 max-sm:px-6"
          onSubmit={handleSubmit(onSignup)}
        >
          <div className="flex flex-col xl:w-[30%] max-xl:w-[35%] max-lg:w-[35%] max-md:w-[50%] max-sm:w-full gap-8 ">
            <div className="flex flex-col justify-center items-center gap-1 text-center">
              <p className="text-transparent GreySansBlack text-5xl font-bold bg-clip-text bg-gradient-to-r from-[#35cce7]  to-[#d865e8] uppercase select-none">
                Join us
              </p>
              <div className=" text-zinc-300 text-xs select-none">
                Unlock exclusive access by registering now and dive into the
                latest updates and features.
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              {/* username div */}
              <div className="flex flex-col gap-2">
                <input
                  autoComplete="username"
                  type="username"
                  placeholder="Username"
                  name="username"
                  title="username"
                  {...register("username", {
                    required: "Add a username",
                  })}
                  className="rounded-xl p-3 px-4 text-sm bg-zinc-900 text-gray-100 outline-none hover:bg-zinc-800"
                />
                {errors.username && (
                  <p className="inline-flex items-center rounded-md  px-2 py-0 text-[11px] text-red-700 select-none">
                    {errors.username.message}
                  </p>
                )}
              </div>
              {/* email div */}
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
                  <p className="inline-flex items-center rounded-md  px-2 py-0 text-[11px] text-red-700 select-none">
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
                  <p className="inline-flex items-center rounded-md select-none px-2 text-[11px] text-red-700 ">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* terms and condition */}
              <div className="flex flex-col w-full gap-2">
                <div className="flex w-full mt-2 px-2 gap-2 items-start">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    {...register("agreeTerms", {
                      required:
                        "You must agree to the terms before signing up.",
                    })}
                  />
                  <p className="text-zinc-500 text-xs select-none">
                    I agree to abide by Inertials's Terms of Service and its
                    Privacy Policy
                  </p>
                </div>
                {errors.agreeTerms && (
                  <p className="inline-flex items-center rounded-md select-none px-2 py-0 text-[11px] text-red-700 ">
                    {errors.agreeTerms.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center w-full items-center">
              <button
                className="text-white font-bold cursor-pointer signInBtn w-full bg-gradient-to-r from-[#41cfe8] py-3
             rounded-xl  to-[#d955ea] shadow-md hover:shadow-lg select-none"
              >
                Sign Up
              </button>
              <div className="flex gap-2 text-gray-400 text-sm select-none">
                Already have an account ?{" "}
                <p className="inter font-bold position-relative cursor-pointer">
                  <Link
                    to="/login"
                    className="bg-gradient-to-r from-[#41cfe8] to-[#d955ea] bg-clip-text text-transparent hover:text-[#41cfe8] hover:underline transition-all duration-300"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
        {/* triangular image grid */}
        <div className="flex w-[70%] max-md:w-[60%] max-sm:hidden top-0 left-0 justify-start overflow-hidden">
          <div className="flex flex-col h-screen w-full gap-[26px] max-2xl:gap-[13px] max-xl:gap-[8px] max-lg:gap-[16px] max-md:gap-[8px] overflow-hidden select-none">
            <div className="flex h-1/3 w-full px-[55px] overflow-hidden">
              <div className="flex w-full max-md:hidden reverse-triangular-img-card">
                <img
                  src={s12}
                  className="reverse-triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full  triangular-img-card">
                <img
                  src={s2}
                  className="triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s10}
                  className="reverse-triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full max-lg:hidden triangular-img-card">
                <img
                  src={s9}
                  className="triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full max-lg:hidden reverse-triangular-img-card">
                <img
                  src={s5}
                  className="reverse-triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full  triangular-img-card"></div>
            </div>
            <div className="flex h-1/3 w-full px-[55px] overflow-hidden ">
              <div className="flex w-full max-md:hidden triangular-img-card"></div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s6}
                  className="reverse-triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full max-lg:hidden triangular-img-card">
                <img
                  src={s7}
                  className="triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full max-lg:hidden reverse-triangular-img-card">
                <img
                  src={s8}
                  className="reverse-triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full triangular-img-card"></div>
              <div className="flex w-full reverse-triangular-img-card"></div>
            </div>
            <div className="flex h-1/3 w-full px-[55px] overflow-hidden">
              <div className="flex w-full max-md:hidden reverse-triangular-img-card"></div>
              <div className="flex w-full triangular-img-card"></div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s3}
                  className="reverse-triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full triangular-img-card">
                <img
                  src={s1}
                  className="triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full max-lg:hidden reverse-triangular-img-card">
                <img
                  src={s11}
                  className="reverse-triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
              <div className="flex w-full max-lg:hidden triangular-img-card">
                <img
                  src={s4}
                  className="triangular-img w-full h-full object-cover hover:scale-110 transition-all  duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex top-[51%] left-[51%] max-sm:hidden max-lg:left-[43%] max-md:left-[30%] absolute">
        <Link
          to="/start"
          title="Inertial"
          className="flex gap-2  justify-center items-center p-2 py-2.5 border-2 rounded-full hover:bg-zinc-900"
        >
          <img src={LogoTrans} className="w-6 select-none " alt="" />
        </Link>
      </div>
    </>
  );
};

export default SignUp;
