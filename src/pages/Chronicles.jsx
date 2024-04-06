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

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Chronicles = () => {
  const cursor = useRef(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isActive) {
      cursor.current.style.scale = 2.5;
    } else {
      cursor.current.style.scale = 1;
    }
  }, [isActive]);
  const cursormove = (e) => {
    cursor.current.style.left = e.clientX - 20 + "px";
    cursor.current.style.top = e.clientY - 5 + "px";
  };
  useEffect(() => {
    window.addEventListener("mousemove", cursormove);

    return () => {
      window.removeEventListener("mousemove", cursormove);
    };
  }, []);
  const split = useRef();
  const tl = useRef();
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: split.current,
            // markers: true,
            start: "52% 50%",
            end: "120% 50%",
            scrub: 2,
            pin: true,
          },
        })
        .to(
          ".center",
          {
            height: "100%",
          },
          "a"
        )
        .to(
          ".top",
          {
            top: "-100%",
          },
          "a"
        )
        .to(
          ".bottom",
          {
            bottom: "-100%",
          },
          "a"
        )
        .to(
          ".top h1",
          {
            top: "120%",
          },
          "a"
        )
        .to(
          ".bottom h1",
          {
            bottom: "90%",
          },
          "a"
        );
    },
    { scope: split }
  );
  return (
    <>
      <style>
        {`
        body{
          background:#010101;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        .circle{
          transition:border-radius  ease 0.45s;
          border-radius:50%;
        }
        .circle:hover{
          border-radius:0;
        }
        .cursor{
          mix-blend-mode:difference;
          transition:scale ease 0.45s;
        }
        .downarrow{
          position: absolute;
          animation:fadedown 2s ease-in-out infinite;
        }
        @keyframes fadedown {
          0%   { transform:translate(-50%,-20px); opacity: 0;  }
          50%  { opacity: 1;  }
          100% { transform:translate(-50%,20px); opacity: 0; }
        }
        .outline{
          color: #000;
          text-shadow:
            1px 1px 0 #fff,
            -1px 1px 0 #fff,
            -1px -1px 0 #fff,
            1px -1px 0 #fff;
        }
      `}
      </style>
      <div className="chronicles h-auto w-full bg-[#010101] flex flex-col p-5">
        {/* header */}
        <div className="w-full h-10 flex justify-between">
          <p className="StretchPro text-white uppercase flex items-center select-none  ">
            DOOPE
          </p>
          <Link
            to="/start"
            title="Home"
            className="cursor-pointer   text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </Link>
        </div>
        {/* Body */}
        <div className="w-full h-full mt-10 flex flex-col gap-20">
          {/* title */}
          <div className="w-full flex justify-center items-center">
            <div className="relative select-none text-5xl w-fit text-white  text-center GreySansBlack uppercase flex  items-center group cursor-pointer">
              <span className="StretchPro uppercase">ART</span>
              <div className="relative  cursor-pointer">
                {/* Badge */}
                <p className="absolute -top-5 left-[0.15rem] overflow-hidden  text-[0.6rem] text-black  rounded-full text-center bg-white transition-all duration-500 group-hover:bg-[#FF5F1F] w-1 h-1 p-2 group-hover:w-20  group-hover:h-[1.2rem] group-hover:-translate-y-3 group-hover:-translate-x-1/2 group-hover:left-1/2 group-hover:py-[0.35rem] pointer-events-none ">
                  <span className="group-hover:opacity-100 opacity-0 ransition-all duration-300 UnisonBold tracking-widest">
                    CRAFT
                  </span>
                </p>
                <div className="w-3 bg-white h-8 mx-1 transition-all duration-500 group-hover:translate-y-[0.15rem]  group-hover:rounded-md"></div>
              </div>
              <span className="StretchPro uppercase">STS</span>
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
          <div className="w-full flex justify-center items-center flex-col select-none mb-10">
            <hr className="w-[25%] border-t-2  border-gray-500 rounded-xl mb-10" />
            <p className="text-gray-400 text-xs font-bold UnisonBold uppercase">
              WE Create Web Designs
            </p>
            <p className="text-gray-400 text-xs font-bold UnisonBold upepcase">
              WE Create ART
            </p>
            <a href="#split" className="mt-5 relative">
              <i className="ri-arrow-down-wide-line text-4xl downarrow text-gray-300  cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Div Split */}
      <div
        ref={split}
        id="split"
        className="split w-full h-screen bg-[#010101] relative overflow-hidden"
      >
        {/* top div */}
        <div className="select-none z-20 top w-full h-1/2  bg-[#010101]  absolute top-0  overflow-hidden">
          <h1 className="text-white UnisonBold absolute text-9xl left-1/2 -translate-x-1/2 -translate-y-1/2 top-full ">
            CREATIVE
          </h1>
        </div>
        {/* center div */}
        <div className="z-10 center  w-full h-full top-0 left-0  text-white absolute overflow-hidden">
          <div className="w-full h-full gridBg py-10 items-center flex flex-col  relative">
            {/* title */}
            <h1
              onMouseOver={() => {
                setIsActive(true);
              }}
              onMouseLeave={() => {
                setIsActive(false);
              }}
              className=" text-3xl relative z-40 uppercase select-none StretchPro  text-white"
            >
              DDesigns
            </h1>
            <div className="text-3xl relative z-40 select-none text-white flex justify-center items-center mt-2 gap-3">
              <span
                onMouseOver={() => {
                  setIsActive(true);
                }}
                onMouseLeave={() => {
                  setIsActive(false);
                }}
                className="StretchPro uppercase"
              >
                That SpPeaks
              </span>{" "}
              <span
                onMouseOver={() => {
                  setIsActive(true);
                }}
                onMouseLeave={() => {
                  setIsActive(false);
                }}
                className="py-1 px-3 StretchPro font-thin leading-[1rem] text-[0.65rem] border-[1.65px] rounded-full"
              >
                True Art
              </span>
            </div>
            {/* canvas */}
            <div className="w-full h-full absolute z-30">
              <Canvas3d />
            </div>
            <div className="w-full h-full absolute transparent -bottom-10 left-0">
              <div className="w-full absolute bottom-12 flex justify-center items-center">
                <hr className="w-[45%] invisible" />
                <Link
                  onMouseOver={() => {
                    setIsActive(true);
                  }}
                  onMouseLeave={() => {
                    setIsActive(false);
                  }}
                  to="/login"
                  className="z-30 text-sm leading-1 border-2 border-gray-400 cursor-pointer select-none text-gray-300 uppercase py-2 px-4 GreySansBlack rounded-md"
                >
                  Explore Now
                </Link>
                <hr className="w-[30%] relative z-40" />
                <p
                  onMouseOver={() => {
                    setIsActive(true);
                  }}
                  onMouseLeave={() => {
                    setIsActive(false);
                  }}
                  className="text-7xl relative z-30 cursor-none -translate-x-1 StretchPro outline text-center"
                >
                  O7
                </p>
              </div>
            </div>
          </div>

          {/* cursor */}
          <div
            ref={cursor}
            className="fixed -bottom-10 z-50 cursor w-10 h-10 ease-in pointer-events-none rounded-full bg-white"
          ></div>
        </div>
        {/* Bottom div */}
        <div className="select-none z-20 bottom bg-[#010101] w-full h-1/2  absolute bottom-0 overflow-hidden">
          <h1 className="text-white UnisonBold absolute text-9xl left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            CREATIVE
          </h1>
        </div>
      </div>
    </>
  );
};

// 3d canvas component
const Canvas3d = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </>
  );
};

const Model = () => {
  const { nodes } = useGLTF("/models/torrus.glb");
  const object = useRef(null);
  // console.log(nodes);
  useFrame(() => {
    // object.current.geometry.center();

    // // Translate object to center
    // object.current.position.set(0, 0, 0);
    // object.current.position.z = -17;
    object.current.rotation.x += 0.002;
    object.current.rotation.y += 0.0032;
    object.current.rotation.z -= 0.0062;
  });

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.04,
    backside: true,
  };
  return (
    <>
      <group scale={4}>
        <Text
          font={"/Public_Fonts/StretchPro.otf"}
          position={[0, 0, -1]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          DISCOVER
        </Text>
        <mesh ref={object} {...nodes.Torus002}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </>
  );
};
export default Chronicles;
