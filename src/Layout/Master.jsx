import Header from "./Header";

const Master = ({ children }) => {
  return( 
    <>
      <div className="flex flex-col w-full gap-3 bg-[var(--dark-gray)] ">
        {/* Header section */}
        <div className="flex w-full sm:h-16">
          <Header user = {"john wick"}/>
        </div>
        {/* other child component */}
        <div className="w-full h-full px-6 ">{children}</div>
      </div>
    </>
  );
};

export default Master;
