import login8 from "../assets/images/login8.jfif";
import logotrans from "../assets/images/Logotrans.png";

const Header = ({ user }) => {
  return (
    <>
      <div className="flex w-full h-10 bg-[var(--dark-gray)] justify-between items-center AvenirRegular">
        {/* section 1 */}
        <div className="flex h-full gap-6 items-center px-2 w-1/4">
          <div className="flex bg-black w-10 h-10 rounded-full p-2.5">
            <img src={logotrans} className="w-full h-full object-cover" />
          </div>

          <div className="flex bg-[var(--text-box-color)] w-56 h-full rounded-xl p-2">
            <input
              type="text"
              placeholder="# Explore"
              className="bg-transparent w-full px-2 placeholder-[##7D7D7D] outline-none text-sm text-white"
            />
          </div>
        </div>
        {/* section 2 */}
        <div className="flex items-center justify-center gap-10 h-full self-center w-1/2">
          <div className="flex flex-col items-center justify-center group">
            <i className="ri-home-5-fill text-2xl text-[var(--icon-color)] group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] group-hover:text-transparent group-hover:bg-clip-text "></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] rounded-full"></div>
          </div>
          <div className="flex flex-col items-center justify-center group">
            <i className="ri-chat-3-line text-2xl text-[var(--icon-color)] group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] group-hover:text-transparent group-hover:bg-clip-text"></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] rounded-full"></div>
          </div>
          <div className="flex flex-col items-center justify-center group">
            <i className="ri-notification-4-line text-2xl text-[var(--icon-color)] group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] group-hover:text-transparent group-hover:bg-clip-text"></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] rounded-full"></div>
          </div>
          <div className="flex flex-col items-center justify-center group">
            <i className="ri-heart-line text-2xl text-[var(--icon-color)] group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] group-hover:text-transparent group-hover:bg-clip-text"></i>
            <div className="flex w-1.5 h-1.5 group-hover:bg-gradient-to-r from-[#41cfe8] to-[#d955ea] rounded-full "></div>
          </div>
        </div>
        {/* section 3 */}
        <div className="flex w-1/4 justify-end px-4">
          <div className="flex items-center pr-6 w-48 h-full rounded-xl justify-between bg-[var(--text-box-color)] p-1">
            <div className="flex rounded-md w-8 h-8 bg-black overflow-hidden">
              <img src={login8} className="w-full h-full object-cover "></img>
            </div>
            <p className="capitalize text-sm text-white">{user}</p>
            <div>
              <i className="ri-arrow-down-s-fill text-md text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
