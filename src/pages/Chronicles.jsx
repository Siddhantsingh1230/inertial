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
          <h1 className=" select-none text-7xl text-white w-full text-center GreySansBlack uppercase ">
            A<span className="Mojita text-9xl ">R</span>Ti<span className="Mojita text-9xl "></span>sts
          </h1>
        </div>
      </div>
    </>
  );
};

export default Chronicles;
