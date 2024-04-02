import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";
import p9 from "../assets/images/p9.jpg";
import p10 from "../assets/images/p10.jpg";
import p11 from "../assets/images/p11.jpg";
import p12 from "../assets/images/p12.jpg";
import p13 from "../assets/images/p13.jpg";
import p14 from "../assets/images/p14.jpg";

const Chronicles = () => {
  return (
    <>
      <style>
        {`
        .circle{
          transition:border-radius  ease 0.45s;
          border-radius:50%;
        }
        .circle:hover{
          border-radius:0;
        }
        /* Custom Scrollbar */
        chronicles::-webkit-scrollbar {
          width: var(--sb-size);
        }
        
        chronicles::-webkit-scrollbar-track {
          background: var(--sb-track-color);
          border-radius: 26px;
        }
        
        chronicles::-webkit-scrollbar-thumb {
          background: var(--sb-thumb-color);
          border-radius: 26px;
        }
        
        @supports not selector(::-webkit-scrollbar) {
          chronicles {
              scrollbar-color: var(--sb-thumb-color)
                             var(--sb-track-color);
          }
        }
        .cursor{
          mix-blend-mode:difference;
        }
      `}
      </style>
      <div className="chronicles h-full w-full bg-[#010101] flex flex-col overflow-hidden p-5">
        {/* header */}
        <div className="w-full h-10">
          <p className="UnisonBold text-white uppercase flex items-center select-none  ">
            D<span className="o-stretch"></span>PE
          </p>
        </div>
        {/* Body */}
        <div className="w-full h-full mt-10 flex flex-col gap-20">
          {/* title */}
          <div className="w-full flex justify-center items-center">
            <div className="relative select-none text-5xl w-fit text-white  text-center GreySansBlack uppercase flex  items-center group cursor-pointer">
              <span className="GreySansBlack uppercase">ART</span>
              <div className="relative  cursor-pointer">
                {/* Badge */}
                <p className="absolute -top-5 left-[0.15rem] overflow-hidden  text-[0.6rem] text-black  rounded-full text-center bg-white transition-all duration-500 group-hover:bg-[#FF5F1F] w-1 h-1 p-2 group-hover:w-20  group-hover:h-[1.2rem] group-hover:-translate-y-3 group-hover:-translate-x-1/2 group-hover:left-1/2 group-hover:py-[0.35rem] pointer-events-none ">
                  <span className="group-hover:opacity-100 opacity-0 ransition-all duration-300 UnisonBold tracking-widest">
                    CRAFT
                  </span>
                </p>
                <div className="w-3 bg-white h-8 mx-1 transition-all duration-500 group-hover:translate-y-[0.15rem]  group-hover:rounded-md"></div>
              </div>
              <span className="GreySansBlack uppercase">STS</span>
            </div>
          </div>
          {/* Avtars */}
          <div className="w-full relative h-auto flex overflow-hidden overflow-x-auto ">
            <div className="h-[16rem] absolute -left-[8rem] w-[16rem] ">
              <img
                src={p1}
                className="object-cover cursor-pointer w-full h-full circle warpImg"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[8rem]  ml-[8rem] flex flex-col">
              <img
                src={p2}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
              <img
                src={p3}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[8rem] ">
              <img
                src={p4}
                className="oobject-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
              <img
                src={p5}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[16rem] ">
              <img
                src={p6}
                className="object-cover cursor-pointer w-full h-full circle"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[16rem] ">
              <img
                src={p7}
                className="object-cover cursor-pointer w-full h-full circle"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[8rem] ">
              <img
                src={p8}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
              <img
                src={p9}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[16rem] ">
              <img
                src={p10}
                className="object-cover cursor-pointer w-full h-full circle"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[8rem] ">
              <img
                src={p11}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
              <img
                src={p12}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
            </div>
            <div className="h-[16rem]  w-[8rem] ">
              <img
                src={p13}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
              <img
                src={p14}
                className="object-cover  cursor-pointer h-[8rem] w-[8rem] circle"
                alt=""
              />
            </div>
          </div>

          {/* Footer text */}
          <div className="w-full flex justify-center items-center flex-col">
            <hr className="w-[25%] border-t-2  border-gray-500 rounded-xl mb-10" />
            <p className="text-gray-400 text-xs font-bold UnisonBold uppercase">
              WE Create Web Designs
            </p>
            <p className="text-gray-400 text-xs font-bold UnisonBold upepcase">
              WE Create ART
            </p>
          </div>
        </div>
        {/* cursor */}
        <div className="fixed -bottom-10 cursor w-10 h-10 transition-transform ease-in pointer-events-none rounded-full bg-white"></div>
      </div>
    </>
  );
};

export default Chronicles;
