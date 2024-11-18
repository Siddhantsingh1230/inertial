import { useState, useEffect } from "react";
import lionImg from "../assets/images/lionpng.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const [spots, setSpots] = useState([]);

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const newSpot = {
      id: `${Date.now()}-${Math.random()}`, // Ensure unique keys
      x: e.pageX,
      y: e.pageY,
      color: "#aaeec4",
    };
    setSpots((prevSpots) => [...prevSpots, newSpot]);

    // Remove the spot after 0.5 seconds for quicker fading
    setTimeout(() => {
      setSpots((prevSpots) =>
        prevSpots.filter((spot) => spot.id !== newSpot.id)
      );
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>
        {`
          /* Define smooth fading effect */
          @keyframes fadeSpot {
            0% {
              transform: scale(2);
              opacity: 0.6;
              filter: blur(4px);
            }
            100% {
              transform: scale(0.5);
              opacity: 0;
              filter: blur(8px);
            }
          }
          .animate-fade-spot {
            animation: fadeSpot 0.5s ease-out forwards;
          }
        `}
      </style>
      <div className="w-screen h-screen bg-black overflow-hidden relative cursor-none">
        {spots.map((spot) => (
          <div
            key={spot.id}
            className="absolute rounded-full animate-fade-spot"
            style={{
              left: `${spot.x - 10}px`, // Offset to center the smaller spot
              top: `${spot.y - 10}px`, // Offset to center the smaller spot
              width: "60px", // Smaller size for subtlety
              height: "60px",
              backgroundColor: spot.color,
              opacity: 0.4,
            }}
          ></div>
        ))}
        <div className="flex flex-col gap-16 w-full h-full absolute z-50 items-center justify-center">
          <div className="flex justify-center items-center text-white">
            <p className="text-9xl">4</p>
            <img src={lionImg} className="flex w-36" />
            <p className="text-9xl">4</p>
          </div>
          <div className="flex flex-col gap-4 text-white items-center justify-center w-[350px]">
            <p className="text-3xl AvenirRegular">Lost in the digital jungle.</p>
            <p className="text-xl AvenirLight text-center">
              The lion's roar in the digital jungle is silent on this page.
            </p>
          </div>
          <Link
            to="/"
            className="flex text-sm text-white p-4 px-10 cursor-pointer rounded-full border-2"
          >
            <p>Back to home</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
