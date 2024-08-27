import Header from "./Header";

const Master = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        {/* Header section */}
        <div className="flex w-full sm:h-10">
          <Header />
        </div>
        {/* other child component */}
        <div className="w-full h-full">{children}</div>
      </div>
    </>
  );
};

export default Master;
