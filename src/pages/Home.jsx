import { useState } from "react";
import bg from "../assets/images/bg2.jpg";
import userImage from "../assets/images/login8.jfif";
import { useEffect } from "react";
import n1 from "../assets/images/art17.jpg";
import n2 from "../assets/images/avtar4.jpg";
import { textEllipsis } from "../utils/textFormatting";
import { formatNumber } from "../utils/textFormatting";
import u1 from "../assets/images/s3.jfif";
import u2 from "../assets/images/s4.jfif";
import u3 from "../assets/images/s5.jfif";
import u4 from "../assets/images/s6.jfif";
import u5 from "../assets/images/s7.jfif";
import u6 from "../assets/images/s8.jfif";
import u7 from "../assets/images/s9.jpg";
import { getTimeDifference } from "../utils/DateFormat";

const Home = () => {
  const [tagList, setTagList] = useState([
    "AI",
    "Js",
    "ReactJs",
    "UI",
    "AI",
    "Js",
    "ReactJs",
    "UI",
  ]);

  const [newsLetters, setNewsLetters] = useState([
    { id: 1, name: "Sk Letters", subscribers: 245543, thumbnail: n1 },
    { id: 2, name: "dev Letters", subscribers: 454366, thumbnail: n2 },
    { id: 3, name: "Sk Letters", subscribers: 24363673, thumbnail: n1 },
    { id: 4, name: "dev Letters", subscribers: 434666, thumbnail: n2 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Amanda", img: u1 },
    { id: 2, name: "John", img: u2 },
    { id: 3, name: "Andrew", img: u3 },
    { id: 4, name: "Rosaline", img: u4 },
    { id: 5, name: "Mudreh", img: u5 },
    { id: 6, name: "Juliet", img: u6 },
    { id: 7, name: "Stephen", img: u7 },
    { id: 1, name: "Amanda", img: u1 },
    { id: 1, name: "Amanda", img: u1 },
  ]);

  const [frames, setFrames] = useState([
    {
      id: 1,
      username: "Mudreh Kumbirai",
      userimg: u4,
      email: "@muhadrehh",
      postTime: new Date("2024-08-29T08:00:00"),
      description:
        "In some cases you may see a third-party client name, which indicates the Tweet came from a non-twitter application.",
      thumbnail: bg,
    },
    {
      id: 2,
      username: "Mudreh Kumbirai",
      userimg: u4,
      email: "@muhadrehh",
      postTime: new Date("2024-08-29T08:00:00"),
      description:
        "In some cases you may see a third-party client name, which indicates the Tweet came from a non-twitter application.",
      thumbnail: bg,
    },
    {
      id: 3,
      username: "Mudreh Kumbirai",
      userimg: u4,
      email: "@muhadrehh",
      postTime: new Date("2024-08-29T08:00:00"),
      description:
        "In some cases you may see a third-party client name, which indicates the Tweet came from a non-twitter application.",
      thumbnail: bg,
    },
    {
      id: 4,
      username: "Mudreh Kumbirai",
      userimg: u4,
      email: "@muhadrehh",
      postTime: new Date("2024-08-29T08:00:00"),
      description:
        "In some cases you may see a third-party client name, which indicates the Tweet came from a non-twitter application.",
      thumbnail: bg,
    },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      name: "Vitaliy Akterskiy",
      desc: "subscribed on you",
      thumbnail: n1,
    },
    {
      id: 1,
      name: "Vitaliy Akterskiy",
      desc: "subscribed on you",
      thumbnail: n1,
    },
    {
      id: 1,
      name: "Vitaliy Akterskiy",
      desc: "subscribed on you",
      thumbnail: n1,
    },
    {
      id: 1,
      name: "Vitaliy Akterskiy",
      desc: "subscribed on you",
      thumbnail: n1,
    },
    {
      id: 1,
      name: "Vitaliy Akterskiy",
      desc: "subscribed on you",
      thumbnail: n1,
    },
    {
      id: 1,
      name: "Vitaliy Akterskiy",
      desc: "subscribed on you",
      thumbnail: n1,
    },
  ]);

  return (
    <>
      <div className="w-full h-full flex gap-8 relative px-2">
        {/* section 1 */}
        <div className="flex flex-col gap-5 w-[22.5%]">
          <ProfileCard />
          {/* skills section */}
          <div className="flex flex-col w-full gap-3 ">
            <p className="text-md AvneirDark text-[var(--dark-text)] select-none">
              My Tags
            </p>
            {/* tags section */}
            <div className="flex flex-wrap gap-2 w-full">
              {tagList?.length > 0 &&
                tagList.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[var(--lighter-gray)] p-1.5 px-3 rounded-2xl cursor-pointer hover:bg-[var(--light-gray)] "
                    title="tag"
                  >
                    <div className="flex gap-1 text-xs AvenirRegular text-[var(--regular-text)] ">
                      <p className="bg-gradient-to-r from-[#41cfe8] to-[#d955ea] text-transparent bg-clip-text">#</p><p>{textEllipsis(item, 10)}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* newsletter section */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-md AvneirDark text-[var(--dark-text)] select-none">
                NewsLetters
              </p>
              <div className="flex gap-6 justify-center items-center">
                <i
                  className="ri-search-2-line text-[var(--light-icon-color)] w-full h-full text-2xl cursor-pointer hover:text-purple-500"
                  title="search"
                ></i>
                <div
                  className="flex px-[3px] border-2 border-[var(--light-icon-color)] rounded-md justify-center items-center cursor-pointer hover:border-purple-500 group"
                  title="Add"
                >
                  <i class="ri-add-fill  text-[var(--light-icon-color)] text-sm group-hover:text-purple-500"></i>
                </div>
              </div>
            </div>
            <NewsLetters newsLetters={newsLetters} />
          </div>
        </div>
        {/* section 2 */}
        <div className="flex flex-col w-[55%] relative gap-8">
          <UserStories users={users} />
          <Frames frames={frames} />
        </div>
        {/* section 3 */}
        <div className="flex flex-col h-full w-[22.5%] bg-[var(--lighter-gray)] gap-4 rounded-3xl p-4 py-5">
          <p className="text-lg AvenirRegular text-[var(--dark-text)]">
            Active Discussions
          </p>
          <RecentActivity recentActivities={recentActivities} />
        </div>
      </div>
    </>
  );
};

const ProfileCard = () => {
  return (
    <>
      <div className="flex flex-col w-full rounded-2xl overflow-hidden bg-[var(--light-gray)]">
        <div className="flex h-28 w-full relative">
          <img src={bg} className="object-cover h-full w-full" />
          {/* more icon */}
          <div
            className="flex absolute right-5 top-5 bg-[#1A1A1A] rounded-lg h-6 w-6 justify-center items-center cursor-pointer hover:bg-[var(--hover-gray)]"
            title="More"
          >
            <i className="ri-more-2-fill text-zinc-400  text-md"></i>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex bg-zinc-900 w-24 h-24 absolute -mt-10 rounded-2xl overflow-hidden p-1">
            <img src={userImage} className="w-full h-full rounded-xl"></img>
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-4 gap-3 ">
          {/* follower & following div */}
          <div className="flex justify-between w-full px-2">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[var(--dark-text)] text-sm AvenirRegular">
                1984
              </p>
              <p className="text-xs text-[var(--light-text)] AvenirRegular">
                Followers
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[var(--dark-text)] text-sm AvenirRegular">
                1002
              </p>
              <p className="text-xs text-[var(--light-text)] AvenirRegular">
                Following
              </p>
            </div>
          </div>
          {/* username div */}
          <div className="flex flex-col w-full justify-center items-center ">
            <p className="text-md text-[var(--dark-text)] AvenirRegular">
              John Wick
            </p>
            <p className="text-xs text-[var(--light-text)] AvenirRegular">
              @wickteam
            </p>
          </div>
          {/* description */}
          <p className="text-sm text-[var(--regular-text)] text-center AvenirRegular">
            ⭐ Hello! I'm a Developer turning ideas into innovative tech. ⭐{" "}
          </p>
          <div className="flex flex-col gap-2 pt-1 ">
            <div className="flex w-full h-[0.1rem] bg-[var(--text-box-color)]"></div>
            <div className="flex w-full bg-gradient-to-r from-[#41cfe8] to-[#d955ea] py-2 rounded-lg justify-center items-center cursor-pointer  transition-all duration-500 select-none signInBtn">
              <p
                className="text-sm text-white AvenirBlack"
                title="Profile"
              >
                My Profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NewsLetters = ({ newsLetters }) => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        {newsLetters?.length > 0 &&
          newsLetters.map((item, idx) => (
            <div
              className="flex w-full px-1 gap-4 items-center cursor-pointer hover:bg-[var(--lighter-gray)] rounded-lg py-1"
              key={idx}
            >
              <div className="flex w-12 h-12 rounded-lg overflow-hidden bg-[var(--light-gray)] p-1">
                <img src={item.thumbnail} className="rounded-md" />
              </div>
              <div>
                <p className="flex AvenirBlack font-bold text-[var(--regular-text)] text-sm capitalize">
                  {textEllipsis(item.name, 23)}
                </p>
                <div className="flex gap-2 items-center">
                  <div className="flex w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <p className="flex AvenirRegular text-[var(--light-text)] text-xs">
                    {formatNumber(item.subscribers)} susbcribers
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const UserStories = ({ users }) => {
  return (
    <>
      <div className="flex gap-6 overflow-hidden relative items-center">
        {users?.length > 0 &&
          users.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-1 group cursor-pointer "
            >
              <div className="flex bg-gradient-to-r rounded-2xl overflow-hidden from-[#41cfe8] to-[#d955ea] p-[1.5px] group">
              <div className="flex w-20 h-20 rounded-2xl overflow-hidden p-1.5 group-hover:p-0 bg-[var(--dark-gray)] transition-all duration-500">
                <img
                  src={item.img}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              </div>
              
              <p className="text-sm AvenirRegular text-[var(--regular-text)] group-hover:text-[var(--dark-text)] ">
                {item.name}
              </p>
            </div>
          ))}
        <div className="flex w-6 h-6 -right-2 top-7 bg-[var(--lighter-gray)] z-10 justify-center items-center absolute rounded-full">
          <i className="ri-arrow-right-s-line text-xl text-[var(--icon-color)]"></i>
        </div>
      </div>
    </>
  );
};

const Frames = ({ frames }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {frames?.length > 0 &&
          frames.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 bg-[var(--lighter-gray)] rounded-2xl p-3"
            >
              <div className="flex items-center gap-2  relative">
                <div className="flex w-12 h-12 p-1 rounded-2xl bg-[var(--light-gray)] cursor-pointer">
                  <img
                    className="flex w-full h-full  object-cover rounded-xl "
                    src={item.userimg}
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <div className="flex gap-1 items-center">
                    <p className="text-sm AvenirLight text-[var(--regular-text)]">
                      {item.email}
                    </p>
                    <i
                      class="ri-verified-badge-fill text-blue-400"
                      title="verified"
                    ></i>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-md AvenirRegular text-[var(--dark-text)]">
                      {item.username}
                    </p>
                    <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                    <p className="text-xs AvenirBlack bg-gradient-to-r from-[#41cfe8] to-[#d955ea] bg-clip-text text-transparent">
                      {getTimeDifference(item.postTime)}
                    </p>
                  </div>
                </div>
                <div
                  className="flex absolute right-3  cursor-pointer"
                  title="More"
                >
                  <i className="ri-more-2-fill text-zinc-400 hover:text-zinc-100  text-md"></i>
                </div>
              </div>
              <p className="text-sm text-[var(--regular-text)] AvenirRegular">
                {item.description}
              </p>
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src={item.thumbnail}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center px-2">
                  <div className="flex items-center">
                    <i class="ri-heart-line text-2xl bg-gradient-to-r from-[#41cfe8] to-[#d955ea] bg-clip-text text-transparent cursor-pointer" title="like"></i>
                  </div>
                  <div className="flex items-center">
                    <i class="ri-chat-3-line text-2xl bg-gradient-to-r from-[#41cfe8] to-[#d955ea] bg-clip-text text-transparent cursor-pointer" title="comment"></i>
                  </div>
                  <div className="flex items-center">
                    <i class="ri-send-plane-line text-2xl pt-1 bg-gradient-to-r from-[#41cfe8] to-[#d955ea] bg-clip-text text-transparent cursor-pointer" title="share"></i>
                  </div>
                </div>
                <div className="flex text-xs AvenirBlack p-1.5 px-4 bg-gradient-to-r from-[#41cfe8] to-[#d955ea] rounded-lg glowingBtn">
                  Subscribe
                </div>
              </div>
              <div className="flex w-full px-2">
                <div className="flex h-[1px] w-full bg-[#3a3939]"></div>
              </div>
              <div className="flex gap-3">
                <div className="flex w-10 h-10 p-1 rounded-2xl bg-[var(--light-gray)] cursor-pointer">
                  <img
                    className="flex w-full h-full  object-cover rounded-xl "
                    src={userImage}
                  />
                </div>
                <div className="flex w-full p-[1px] rounded-xl overflow-hidden bg-gradient-to-r from-[#41cfe8] to-[#d955ea]">
                  <div className="flex w-full bg-[var(--light-gray)] rounded-xl px-4">
                    <input
                      type="text"
                      placeholder="Write your comment"
                      className="bg-transparent w-full outline-none text-[var(--regular-text)] text-sm AvenirLight placeholder:text-[var(--light-text)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const RecentActivity = ({ recentActivities }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {recentActivities?.length > 0 &&
          recentActivities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-[var(--light-gray)] gap-3 p-3 rounded-2xl"
            >
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 p-1 bg-[var(--dark-gray)] rounded-2xl overflow-hidden">
                  <img
                    src={item.thumbnail}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="text-sm AvenirRegular text-[var(--dark-text)]">
                    {item.name}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs AvenirLight text-[var(--light-text)]">
                      {item.desc}
                    </p>
                    <div className="flex w-1 h-1 bg-purple-500 rounded-full"></div>
                    <p className="text-xs AvenirBlack bg-gradient-to-r from-[#41cfe8] to-[#d955ea] bg-clip-text text-transparent">
                      3 hrs ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-2 bg-[var(--dark-gray)] rounded-xl">
                <div className="flex items-center gap-2">
                  <p className="text-md text-[var(--dark-text)] AvenirDark">
                    $10.00
                  </p>
                  <p className="text-xs text-[var(--light-text)] AvenirLight">
                    /tip
                  </p>
                </div>
                <div className="flex rounded-xl bg-gradient-to-r from-[#41cfe8] to-[#d955ea] p-1 px-3 text-sm AvenirBlack cursor-pointer">
                  Thanks
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Home;
