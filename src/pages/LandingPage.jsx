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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  // Mobile viewport
  let isMobileMode = false;
  const [mobileMode, setMobileMode] = useState(false);
  const container = useRef();
  useGSAP(
    () => {
      if (!isMobileMode) {
        const tl = gsap.timeline();
        tl.from(".navUi", { y: -100, stagger: 0.2 });
        tl.from(".main", {
          x: "-100%",
          stagger: 0.15,
          ease: "power1.inOut",
        });
        tl.from(".imgGrid img", {
          scale: 0,
          x: "100%",
          y: "100%",
          duration: 0.25,
          stagger: -0.1,
          ease: "power3.out",
        });
      } else {
        const tl = gsap.timeline();
        tl.from(".header", {
          y: "-100%",
          stagger: 0.1,
        });
        tl.from(".cardDownFade img", {
          y: "-300%",
          stagger: 0.1,
          ease: "back",
        });
        tl.from(".main", {
          x: "-200%",
          stagger: 0.1,
        });
        gsap.from(".mobileLogin", {
          opacity: 0,
          scale:0,
          duration:0.1,
          ease:"power2.out",
          scrollTrigger: {
            trigger: ".mobileLogin",
            // markers: true,
            scrub: 3,
            start: "top bottom",
            end: "bottom bottom",
          },
        });
      }
    },
    { scope: container }
  );

  useEffect(() => {
    const handleResize = () => {
      // Check if viewport width is less than or equal to 768px (you can adjust this threshold as needed)
      isMobileMode = window.innerWidth <= 768;
      setMobileMode(isMobileMode);
      // console.log(isMobileMode)
    };

    // Initial call to handleResize to set initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect when component is loaded for the first time

  return (
    <>
      <style>
        {`
          .glassBG{
              background: rgba(255, 255, 255, 0.01);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
              backdrop-filter: blur(5px);
              -webkit-backdrop-filter: blur(5px);
          }
          .centerFade::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(to bottom, #010101 2%, transparent 60%);
            z-index: 10;
          }
          .centerFade::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 60%;
            width: 100%;
            background: linear-gradient(to right, #010101 10%, transparent 97%);
            z-index: 10;
          }
          .linearFadeR::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 20;
            background: linear-gradient(to left, #010101 5%, transparent 95%);
          }
          .cardDownFade::before{
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            height: 50%;
            width: 100%;
            z-index: 50;
            background: linear-gradient(to top, #010101 1%, transparent 95%);
          }
      `}
      </style>
      <div
        ref={container}
        className="h-full w-full bg-[#010101] flex justify-center items-center flex-col overflow-hidden max-sm:h-auto max-sm:pb-10 relative"
      >
        {/* Landing header */}
        <div
          className={` z-30 header w-full h-auto  xl:px-20 sm:px-5 max-sm:px-5 flex justify-between  items-center ${
            mobileMode ? "glassBG fixed top-0 left-0 z-50" : "relative "
          }`}
        >
          {/* icon/Logo/text */}
          <div className="navUi flex gap-2  justify-center items-center py-10 max-sm:py-5">
            <img src={LogoTrans} className="w-6 max-sm:w-5  " alt="" />
            <p className="text-white text-xl max-sm:text-base inter  font-bold select-none uppercase ">
              Inerti<span className="text-[#00CBFB] mx-1">.</span>
              <span className="text-transparent inter  font-bold bg-clip-text bg-gradient-to-r from-[#00D6FD]  to-[#DE26F6] uppercase">
                al
              </span>
            </p>
          </div>
          {/* Links */}
          <div className="navUi flex xl:gap-10 sm:gap-2 select-none  h-full justify-center items-center  max-sm:hidden">
            <p className="text-sm text-white cursor-pointer h-full relative topOverline flex justify-center items-center px-3">
              Explore
            </p>
            <Link
              to="/chronicles"
              className="text-sm hover:text-white transition-color duration-200 cursor-pointer text-gray-500"
            >
              Chronicles
            </Link>
            <p className=" text-sm hover:text-white transition-color duration-200 cursor-pointer text-gray-500">
              Features
            </p>
            <Link
              to="/contact"
              className="group text-sm hover:text-white transition-color duration-200 cursor-pointer text-gray-500 relative"
            >
              Contact{" "}
              <i className="absolute group-hover:-translate-y-1  transition-all duration-300  ri-arrow-right-up-line"></i>
            </Link>
          </div>
          {/* Action buttons */}
          <div className="navUi max-sm:hidden flex xl:gap-5 sm:gap-2 items-center">
            <Link
              to="/login"
              title="Login"
              className="group select-none xl:px-5 sm:px-3 xl:py-3 sm:py-2 text-white glowingBtn xl:rounded-xl sm:rounded-md xl:text-xs sm:text-[0.5rem] leading-1  uppercase font-bold tracking-widest "
            >
              <i className="text-white ri-star-fill transition-all"></i> Motion
            </Link>
            <button
              title="Made in india"
              className="flex gap-2 xl:bg-[#010101] justify-center items-center select-none xl:px-5 sm:px-3 xl:py-3 sm:py-2 text-white xl:border-2 border-gray-600 xl:rounded-xl sm:rounded-md xl:text-xs sm:text-[0.5rem] md:text-[0.65rem] leading-1  uppercase font-bold tracking-widest "
            >
              <img className="w-4 rounded-sm " src={IndiaFlag} alt="" />
              <p className="sm:hidden md:block">Ind</p>
            </button>
          </div>
          {/* mobile menu icon */}
          <div className="header h-[60%] p-1 sm:hidden flex justify-center items-center cursor-pointer">
            <i className="ri-menu-3-line text-white text-xl max-sm:text-lg"></i>
          </div>
        </div>
        {/* landing Body */}
        <div className="relative z-30 w-full h-full flex flex-col mt-24 max-sm:mt-20 max-sm:px-5 select-none">
          {/* Mobile cards */}
          <div className="w-full cardDownFade  h-72 relative sm:hidden overflow-hidden ">
            <img
              src={art2}
              className="w-[8rem] object-cover z-30 rounded-xl h-[8rem] absolute rotate-[20deg] top-5 left-0"
              alt=""
            />
            <img
              src={art10}
              className="w-[8rem] object-cover z-10 rounded-xl h-[8rem] absolute rotate-12 top-[45%] left-[45%] -translate-x-1/2"
              alt=""
            />
            <img
              src={art3}
              className="w-[8rem] object-cover z-20 rounded-xl h-[8rem] absolute -rotate-12 top-20 right-0"
              alt=""
            />
          </div>
          {/* Heading */}
          <div className="main w-full flex flex-col max-sm:flex-row max-sm:flex-wrap max-sm:mt-5 sm:px-20 ">
            <p className="uppercas GreySansBlack text-white text-6xl max-sm:text-4xl">
              DISCOVER
            </p>
            <p className="uppercase GreySansBlack text-white text-6xl max-sm:text-4xl max-sm:flex-wrap max-sm:flex sm:mx-12 sm:w-full">
              <span className="GreySansBlack text-transparent bg-clip-text bg-gradient-to-r from-[#00D6FD]  to-[#DE26F6]">
                YOUR
              </span>
              <span className="GreySans text-2xl max-sm:text-xl  mx-7 max-sm:mx-4">
                Digital
              </span>
              <span className="GreySansBlack">Art</span>
            </p>
            <p className="uppercase GreySansBlack text-white text-6xl max-sm:text-4xl  flex max-sm:flex-wrap sm:mx-[5rem]">
              <span className="GreySans text-2xl max-sm:text-xl  mr-2">
                And
              </span>
              <span className="GreySansBlack">connect</span>
            </p>
            <p
              className={`uppercase GreySansBlack text-white text-6xl max-sm:text-4xl sm:mx-3 flex  justify-center items-center gap-2 relative ${
                mobileMode ? "linearFadeR" : "linearFade "
              } w-fit max-sm:flex-row-reverse`}
            >
              <span className="h-[70%] w-[8px] max-sm:hidden rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px] max-sm:hidden rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] mr-2"></span>
              <span className="h-[70%] w-[8px]  rounded-md  inline-block  bg-[#DE26F6] max-sm:mr-2"></span>
              <span className="GreySansBlack text-transparent bg-clip-text bg-gradient-to-r from-[#00D6FD]  to-[#DE26F6] relative z-30">
                FRAMES
              </span>
            </p>
          </div>
          {/* avtars */}
          <div className="main w-auto items-center flex mt-10 sm:px-20">
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
              <p className="text-gray-600 text-xs max-sm:text-[0.65rem] max-sm:leading font-bold relative -left-16">
                Available Here
              </p>
            </div>
          </div>
          {/* divider */}
          <div className="main sm:mx-20 max-sm:mx-0  -left-[20px]  w-96 flex p-5 items-center relative horizontalLinearfade">
            <hr className="w-96  border-t-2 border-white  " />
          </div>
          {/* Statistics */}
          <div className="main w-full flex sm:px-20 mt-5 items-center max-sm:justify-center">
            <div className="flex w-auto flex-col relative justify-center items-center">
              <p className="text-white sm:text-2xl max-sm:text-xl  relative  GreySansBlack ">
                40K+
              </p>
              <p className="text-gray-600 text-xs font-bold relative ">
                Frames
              </p>
            </div>
            <div className="sm:mx-12 max-sm:mx-10 flex flex-col items-center h-[60%]">
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
              <div className="h-full bg-gray-800 w-[0.1rem]"></div>
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
            </div>
            <div className="flex w-auto flex-col relative justify-center items-center">
              <p className="text-white sm:text-2xl max-sm:text-xl  relative  GreySansBlack ">
                15K+
              </p>
              <p className="text-gray-600 text-xs font-bold relative ">Auras</p>
            </div>
            <div className="sm:mx-12 max-sm:mx-10 flex flex-col items-center h-[60%]">
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
              <div className="h-full bg-gray-800 w-[0.1rem]"></div>
              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
            </div>
            <div className="flex w-auto flex-col relative justify-center items-center">
              <p className="text-white sm:text-2xl max-sm:text-xl  relative  GreySansBlack ">
                27K+
              </p>
              <p className="text-gray-600 text-xs font-bold relative ">
                Whispers
              </p>
            </div>
          </div>
          {/* Mobile Login */}
          <Link
            to="/login"
            className="group mobileLogin w-full h-10 mt-10 bg-[#151515] rounded-full sm:hidden max-sm:flex justify-between items-center px-5"
          >
            <p className="text-gray-400 group-hover:text-white transition-all duration-200 inter text-sm font-bold">
              Start Adventure
            </p>
            <i className="text-gray-400 group-hover:text-white transition-all duration-200 text-xl ri-arrow-right-up-line"></i>
          </Link>
        </div>

        {/* 3d image grid*/}
        <div
          className={`imgGrid z-10  swarmFade skew max-sm:hidden w-full h-full flex gap-5 absolute top-0 left-0 py-5 overflow-hidden`}
        >
          <div className="flex flex-col gap-5 h-full w-[40%]  ">
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
          <div className="flex flex-col h-full w-[30%]  gap-5">
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
            <div className="flex w-full gap-5 z-50  rounded-xl ">
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
          <div className="flex flex-col w-[30%] gap-5  py-6 pb-10">
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
