import LogoTrans from "../assets/images/Logotrans.png";
import IndiaFlag from "../assets/images/indflag.jpg";
import Avtar1 from "../assets/images/avtar1.jpg";
import Avtar2 from "../assets/images/avtar2.jpg";
import Avtar3 from "../assets/images/avtar3.jpg";
import Avtar4 from "../assets/images/avtar4.jpg";
import art1 from "../assets/images/art1.jpg";
import art2 from "../assets/images/art2.jpg";
import art3 from "../assets/images/art3.jpg";
import art4 from "../assets/images/art4.jpg";
import art5 from "../assets/images/art5.jpg";
import art6 from "../assets/images/art6.jpg";
import art7 from "../assets/images/art7.jpg";
import art8 from "../assets/images/art8.gif";
import art9 from "../assets/images/art9.jpg";
import art10 from "../assets/images/art10.jpg";
import art11 from "../assets/images/art11.jpg";
import art12 from "../assets/images/art12.jpg";
import art13 from "../assets/images/art13.jpg";
import art14 from "../assets/images/art14.jpg";
import art15 from "../assets/images/art15.jpg";
import art16 from "../assets/images/art16.jpg";
import art17 from "../assets/images/art17.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="h-full w-full bg-[#010101] flex justify-center items-center flex-col overflow-hidden relative">
        {/* Landing header */}
        <div className="relative z-30 w-full h-auto  px-20 flex justify-between items-center">
          {/* icon/Logo/text */}
          <div className="flex gap-2  justify-center items-center py-10">
            <img src={LogoTrans} className="w-6  " alt="" />
            <p className="text-white text-xl inter  font-bold select-none uppercase ">
              Inerti<span className="text-[#00CBFB] mx-1">.</span>
              <span className="text-transparent inter  font-bold bg-clip-text bg-gradient-to-r from-[#00D6FD]  to-[#DE26F6] uppercase">
                al
              </span>
            </p>
          </div>
          {/* Links */}
          <div className="flex gap-10 select-none  h-full justify-center items-center">
            <p className="text-sm text-white cursor-pointer h-full relative topOverline flex justify-center items-center px-3">
              Explore
            </p>
            <Link
              to="/chronicles"
              className="text-sm hover:text-white trabsition-color duration-200 cursor-pointer text-gray-500"
            >
              Chronicles
            </Link>
            <p className="text-sm hover:text-white trabsition-color duration-200 cursor-pointer text-gray-500">
              Features
            </p>
            <p className="group text-sm hover:text-white trabsition-color duration-200 cursor-pointer text-gray-500 relative">
              Contact{" "}
              <i className="absolute group-hover:-translate-y-1  transition-all duration-300  ri-arrow-right-up-line"></i>
            </p>
          </div>
          {/* Action buttons */}
          <div className="flex gap-5 items-center">
            <Link to="/login"
              title="Login"
              className="group select-none px-5 py-3 text-white glowingBtn rounded-xl text-xs uppercase font-bold tracking-widest "
            >
              <i className="text-white ri-star-fill transition-all"></i> Motion
            </Link>
            <button
              title="Made in india"
              className="flex gap-2 bg-[#010101] justify-center items-center select-none px-5 py-3 text-white border-2 border-gray-600 rounded-xl text-xs uppercase font-bold tracking-widest "
            >
              <img className="w-4 rounded-sm" src={IndiaFlag} alt="" />
              <p>Ind</p>
            </button>
          </div>
        </div>
        {/* landing Body */}
        <div className="relative z-30 w-full h-full flex flex-col mt-24 select-none">
          {/* Heading */}
          <div className="w-full flex flex-col px-20 ">
            <p className="uppercas GreySansBlack text-white text-6xl">
              DISCOVER
            </p>
            <p className="uppercase GreySansBlack text-white text-6xl mx-12 w-full">
              <span className="GreySansBlack text-transparent bg-clip-text bg-gradient-to-r from-[#00D6FD]  to-[#DE26F6]">
                YOUR
              </span>
              <span className="GreySans text-2xl  mx-7">Digital</span>
              <span className="GreySansBlack">Art</span>
            </p>
            <p className="uppercase GreySansBlack text-white text-6xl  flex mx-[5rem]">
              <span className="GreySans text-2xl  mr-2">And</span>
              <span className="GreySansBlack">collect</span>
            </p>
            <p className="uppercase GreySansBlack text-white text-6xl mx-3 flex justify-center items-center gap-2 relative linearFade w-fit">
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6]"></span>
              <span className="GreySansBlack text-transparent bg-clip-text bg-gradient-to-r from-[#00D6FD]  to-[#DE26F6] relative z-30">
                FRAMES
              </span>
            </p>
          </div>
          {/* avtars */}
          <div className="w-auto items-center flex mt-10 px-20">
            {/* images */}
            <div className="relative  flex w-auto items-center">
              <div className="rounded-full relative bg-[#010101] w-16 h-16 flex justify-center items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={Avtar1}
                    alt=""
                  />
                </div>
              </div>
              <div className="rounded-full relative bg-[#010101] -left-7 w-16 h-16 flex justify-center items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={Avtar2}
                    alt=""
                  />
                </div>
              </div>
              <div className="rounded-full relative bg-[#010101] -left-14 w-16 h-16 flex justify-center items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={Avtar3}
                    alt=""
                  />
                </div>
              </div>
              <div className="rounded-full relative bg-[#010101] -left-[5.25rem] w-16 h-16 flex justify-center items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={Avtar4}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="flex w-auto flex-col relative">
              <p className="text-white  relative -left-16 inter font-bold ">
                800+
              </p>
              <p className="text-gray-600 text-xs font-bold relative -left-16">
                Available Here
              </p>
            </div>
          </div>
          {/* divider */}
          <div className="mx-20 w-96 flex p-5 items-center relative horizontalLinearfade">
            <hr className="w-96  border-t-2 border-white  " />
          </div>
          {/* Statistics */}
          <div className="w-full flex px-20 mt-5 items-center">
            <div className="flex w-auto flex-col relative justify-center items-center">
              <p className="text-white text-2xl relative  GreySansBlack ">
                40K+
              </p>
              <p className="text-gray-600 text-xs font-bold relative ">
                Frames
              </p>
            </div>
            <div className="mx-12 flex flex-col items-center h-[60%]">
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
              <div className="h-full bg-gray-800 w-[0.1rem]"></div>
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
            </div>
            <div className="flex w-auto flex-col relative justify-center items-center">
              <p className="text-white text-2xl relative  GreySansBlack ">
                15K+
              </p>
              <p className="text-gray-600 text-xs font-bold relative ">Auras</p>
            </div>
            <div className="mx-12 flex flex-col items-center h-[60%]">
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
              <div className="h-full bg-gray-800 w-[0.1rem]"></div>
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
            </div>
            <div className="flex w-auto flex-col relative justify-center items-center">
              <p className="text-white text-2xl relative  GreySansBlack ">
                27K+
              </p>
              <p className="text-gray-600 text-xs font-bold relative ">
                Whispers
              </p>
            </div>
          </div>
        </div>

        {/* 3d image grid*/}
        <div className="z-10 skew swarmFade w-full h-full flex gap-5 absolute top-0 left-0 py-5">
          <div className="flex flex-col gap-5 h-full w-[40%] overflow-hidden">
            <div className="w-full">
              <img
                className="w-full h-[15rem] object-cover rounded-xl"
                src={art1}
                alt=""
              />
            </div>
            <div className="w-full flex gap-5">
              <img
                src={art2}
                className="rounded-xl w-full h-[10rem]  object-cover"
                alt=""
              />
              <img
                src={art3}
                className="rounded-xl w-full h-[10rem]  object-cover"
                alt=""
              />
              <img
                src={art4}
                className="rounded-xl w-full h-[10rem]  object-cover"
                alt=""
              />
            </div>
            <div className="w-full flex gap-5">
              <img
                src={art5}
                className="rounded-xl w-full h-[13rem] object-cover"
                alt=""
              />
              <img
                src={art6}
                className="rounded-xl w-full h-[13rem] object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col h-full w-[30%] gap-5">
            <div className="flex w-full gap-5">
              <img
                className="rounded-xl w-full h-32 object-cover"
                src={art9}
                alt=""
              />
              <img
                className="rounded-xl w-full h-32 object-cover"
                src={art10}
                alt=""
              />
            </div>
            <div className="flex w-full gap-5 z-50 bg-gray-600 rounded-xl ">
              <img
                className="rounded-xl object-cover w-full h-96"
                src={art11}
                alt=""
              />
            </div>
            <div className="flex w-full gap-5">
              <img
                className="rounded-xl w-full h-32 object-cover"
                src={art12}
                alt=""
              />
              <img
                className="rounded-xl w-full h-32 object-cover"
                src={art13}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-[30%] gap-5 py-6 pb-10">
            <div className="flex gap-5 w-full h-1/3">
              <img src={art7} alt="" className="h-full w-1/2 rounded-xl" />
              <img src={art14} alt="" className="h-full w-1/2 rounded-xl" />
            </div>
            <div className="flex gap-5 w-full h-1/3">
              <img src={art8} alt="" className="h-full w-1/2 rounded-xl" />
              <img src={art15} alt="" className="h-full w-1/2 rounded-xl" />
            </div>
            <div className="flex gap-5 w-full h-1/3">
              <img src={art16} alt="" className="h-full w-1/2 rounded-xl" />
              <img src={art17} alt="" className="h-full w-1/2 rounded-xl" />
            </div>
          </div>
        </div>
        <div className="z-10 downFade w-full h-full  absolute top-0 left-0"></div>
      </div>
    </>
  );
};

export default LandingPage;
