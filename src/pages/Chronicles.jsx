const Chronicles = () => {
  return (
    <>
      <div className="h-full w-full bg-[#010101] flex flex-col overflow-hidden p-5">
        {/* header */}
        <div className="w-full h-10">
          <p className="UnisonBold text-white uppercase flex items-center select-none  ">
            D<span className="o-stretch"></span>PE
          </p>
        </div>
        {/* Body */}
        <div className="w-full h-full mt-10">
          {/* title */}
          <div className="w-full flex justify-center items-center">
            <div className="relative select-none text-5xl w-fit text-white  text-center GreySansBlack uppercase flex  items-center group cursor-pointer">
              <span className="GreySansBlack uppercase">ART</span>
              <div className="relative  cursor-pointer">
                {/* Badge */}
                <p className="absolute -top-5 left-[0.15rem] overflow-hidden  text-[0.6rem] text-black  rounded-full text-center bg-white transition-all duration-500 group-hover:bg-[#FF5F1F] w-1 h-1 p-2 group-hover:w-20  group-hover:h-[1.2rem] group-hover:-translate-y-3 group-hover:-translate-x-1/2 group-hover:left-1/2 group-hover:py-[0.35rem] pointer-events-none ">
                  <span className="group-hover:opacity-100 opacity-0 ransition-all duration-300 UnisonBold tracking-widest">CRAFT</span>
                </p>
                <div className="w-3 bg-white h-8 mx-1 transition-all duration-500 group-hover:translate-y-[0.15rem]  group-hover:rounded-md"></div>
              </div>
              <span className="GreySansBlack uppercase">STS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chronicles;
