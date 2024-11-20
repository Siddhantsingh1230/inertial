import { useSelector } from "react-redux";
import login8 from "../assets/images/login8.jfif";
import logotrans from "../assets/images/Logotrans.png";
import { textEllipsis } from "../utils/textFormatting";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((state)=>state.auth.user);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full gap-6 bg-[var(--dark-gray)] justify-between items-center p-6 py-4 fixed z-20">
        {/* section 1 */}
        <div className="flex h-full w-[21%]">
          <div className="flex gap-4 items-center w-full">
            <div className="flex-none bg-black w-10 h-10 rounded-full p-2.5 cursor-pointer">
              <img src={logotrans} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow bg-[var(--text-box-color)] h-full rounded-xl p-2">
              <input
                type="text"
                placeholder="# Explore"
                className="bg-transparent w-full px-2 placeholder-[#7D7D7D] AvenirRegular outline-none text-sm text-white" 
              />
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex w-[58%] items-center justify-center gap-10 h-full self-center">
          <div
            className="flex flex-col items-center justify-center group cursor-pointer"
            title="Home"
            onClick={()=>{
              navigate("/");
            }}
          >
            <i className="ri-home-5-fill text-2xl text-[var(--icon-color)] group-hover:text-cyan-500 "></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-cyan-500  rounded-full"></div>
          </div>
          <div
            className="flex flex-col items-center justify-center group cursor-pointer"
            title="Comments"
          >
            <i className="ri-chat-3-line text-2xl text-[var(--icon-color)] group-hover:text-cyan-500"></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-cyan-500 rounded-full"></div>
          </div>
          <div
            className="flex flex-col items-center justify-center relative group cursor-pointer"
            title="Notifications"
          >
            <div className="flex w-2.5 h-2.5 p-0.5 bg-[var(--dark-gray)] absolute top-0.5 right-0.5 rounded-full">
              <div className="flex w-full h-full bg-green-600 rounded-full"></div>
            </div>
            <i className="ri-notification-4-line text-2xl text-[var(--icon-color)] group-hover:text-cyan-500"></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-cyan-500 rounded-full"></div>
          </div>
          <div
            className="flex flex-col items-center justify-center group cursor-pointer"
            title="Likes"
          >
            <i className="ri-heart-line text-2xl text-[var(--icon-color)] group-hover:text-cyan-500"></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-cyan-500 rounded-full"></div>
          </div>
        </div>
        {/* section 3 */}
        <div className="flex w-[21%] justify-end ">
          <div className="flex items-center pr-4 w-48 h-full rounded-xl justify-between bg-[var(--text-box-color)] p-1" title="user">
            <div className="flex gap-3 items-center ">
              <div className="flex rounded-md w-8 h-8 bg-black overflow-hidden">
                <img src={login8} className="w-full h-full object-cover "></img>
              </div>
              <p className="capitalize text-sm text-white AvenirLight cursor-default" >
                {textEllipsis(user?.name, 13)}
              </p>
            </div>

            <div className="cursor-pointer">
              <i className="ri-arrow-down-s-fill text-md text-[var(--light-icon-color)] hover:text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
