import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const navigate = useNavigate();
  const container = useRef();
  useGSAP(
    () => {
      gsap.from(".main", {
        opacity: 0,
        duration: 2,
      });
    },
    { scope: container }
  );
  return (
    <>
      <style>
        {`
        input:-webkit-autofill,
        input:-webkit-autofill:focus {
            transition: background-color 600000s 0s, color 600000s 0s;
        }
        input[data-autocompleted] {
            background-color: transparent !important;
        }
        `}
      </style>
      <div
        ref={container}
        className="bg-[#010101] w-full h-auto flex xl:flex-row sm:flex-col-reverse max-sm:flex-col-reverse overflow-y-auto main"
      >
        {/* Contact form */}
        <div className="main w-[80%] sm:h-auto xl:overflow-hidden xl:h-screen flex select-none flex-col justify-center px-28 max-sm:px-5 max-sm:w-full max-sm:pb-10">
          <h1 className="uppercase StretchPro  max-sm:text-3xl max-sm:text-center text-4xl text-white mb-10">
            Coontact Us
          </h1>

          <form className="flex w-full h-auto flex-col">
            {/* name */}
            <label
              htmlFor="name"
              className="relative block overflow-hidden rounded-md border-2 border-gray-700 px-3 pt-3 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white-600 mb-5"
            >
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="peer h-8 w-full border-none text-white bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Name
              </span>
            </label>
            {/* Email */}
            <label
              htmlFor="email"
              className="relative block overflow-hidden rounded-md border-2 border-gray-700 px-3 pt-3 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white-600 mb-5"
            >
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="peer h-8 w-full text-white border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Email
              </span>
            </label>
            {/* query */}
            <textarea
              placeholder="Query"
              rows={"8"}
              className="text-white bg-transparent border-2 resize-none border-gray-700 rounded-md py-5 px-4"
            />
            <button className="rounded-md uppercase StretchPro mt-5 px-5 py-2 text-sm bg-white text-black hover:bg-gray-300  transition-color duration-200">
              Submit
            </button>
          </form>
        </div>
        {/* 3d canvas */}
        <div className="main w-full sm:h-[30rem] max-sm:h-[15rem] overflow-hidden xl:h-screen  flex justify-end">
          <div className="w-full h-full">
            <Canvas3d />
          </div>
        </div>
        {/* Back button */}
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-gray-400 hover:text-white transition-color duration-300 text-xl absolute top-10 left-10 cursor-pointer "
        ></i>
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
  //   console.log(nodes);
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
    thickness: 0.1,
    roughness: 0,
    transmission: 1,
    ior: 1.3,
    chromaticAberration: 0.02,
    backside: true,
  };
  return (
    <>
      <group scale={4}>
        <mesh ref={object} {...nodes.Torus002}>
          <MeshTransmissionMaterial {...materialProps} />
          <OrbitControls enableZoom={false} />
        </mesh>
      </group>
    </>
  );
};
export default Contact;
