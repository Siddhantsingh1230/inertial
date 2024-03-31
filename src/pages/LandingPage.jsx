import LogoTrans from "../assets/images/Logotrans.png";

const LandingPage = () => {
  return (
    <>
      <div className="h-full w-full bg-[#010102] flex justify-center items-center flex-col">
        {/* Landing header */}
        <div className="w-full h-auto  px-10 flex justify-between">
          {/* icon/Logo/text */}
          <div className="flex gap-2  justify-center items-center py-10">
            <img src={LogoTrans} className="w-6  " alt="" />
            <p className="text-white text-sm inter  font-bold select-none uppercase">Inerti.al</p>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
        {/* landing Body */}
        <div className="w-full h-full "></div>
      </div>
    </>
  );
};

export default LandingPage;
