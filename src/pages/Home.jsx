import { useEffect, useState } from "react";
import bg from "../assets/images/bg2.jpg";
import userImage from "../assets/images/login8.jfif";
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
import AddFrame from "../components/AddFrame";
import { useDispatch, useSelector } from "react-redux";
import { getAllFramesAsync } from "../slices/frameSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const frames = useSelector((state) => state.frame.allFrames);
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
    { id: 2, name: "John", img: u2 },
    { id: 3, name: "Andrew", img: u3 },
    { id: 4, name: "Rosaline", img: u4 },
    { id: 5, name: "Mudreh", img: u5 },
    { id: 6, name: "Juliet", img: u6 },
    { id: 7, name: "Stephen", img: u7 },
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

  const [commentInputSelected, setCommentInputSelected] = useState(
    Array(frames.length).fill(false)
  );
  const [comment, setComment] = useState(Array(frames.length).fill(""));
  const [addFrameVisibility, setAddFrameVisibility] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFramesAsync());
    // dispatch(getUserAsync());
  });
  return (
    <>
      <style>
        {`
      `}
      </style>
      <div className="flex w-full h-full relative">
        <div className="w-full h-full flex pb-2">
          {/* section 1 */}
          <div className="flex flex-col gap-4 w-[20%] fixed">
            <ProfileCard user={user} />
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
                        <p className="bg-gradient-to-r from-[#41cfe8] to-[#d955ea] text-transparent bg-clip-text">
                          #
                        </p>
                        <p>{textEllipsis(item, 10)}</p>
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
                    className="ri-search-2-line text-[var(--light-icon-color)] w-full h-full text-2xl cursor-pointer hover:text-cyan-500"
                    title="search"
                  ></i>
                  <div
                    className="flex px-[3px] border-2 border-[var(--light-icon-color)] rounded-md justify-center items-center cursor-pointer hover:border-cyan-500 group"
                    title="Add"
                  >
                    <i className="ri-add-fill  text-[var(--light-icon-color)] text-sm group-hover:text-cyan-500"></i>
                  </div>
                </div>
              </div>
              <NewsLetters newsLetters={newsLetters} />
            </div>
          </div>
          {/* section 2 */}
          <div className="flex flex-col left-[22.5%] w-[55%] relative gap-4 pb-2 ">
            <UserStories users={users} />
            <NewFrame
              onClick={() => {
                console.log("NewFrame clicked");
                setAddFrameVisibility(true);
              }}
            />
            <Frames
              frames={frames}
              commentInputSelected={commentInputSelected}
              setCommentInputSelected={setCommentInputSelected}
              comment={comment}
              setComment={setComment}
            />
          </div>
          {/* section 3 */}
          <div className="flex flex-col h-[87.5%] left-[78.25%] fixed w-[20%] bg-[var(--lighter-gray)] gap-4 rounded-3xl p-4">
            <p className="text-lg AvenirRegular text-[var(--dark-text)]">
              Recent activity
            </p>
            <RecentActivity recentActivities={recentActivities} />
          </div>
        </div>
        {addFrameVisibility && (
          <div className="flex w-full h-screen absolute z-50">
            <AddFrame
              addFrameVisibility={addFrameVisibility}
              setAddFrameVisibility={setAddFrameVisibility}
            />
          </div>
        )}
      </div>
    </>
  );
};

const ProfileCard = ({ user }) => {
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
        <div className="flex w-full justify-center cursor-pointer">
          <div className="flex bg-zinc-900 hover:bg-zinc-800 w-24 h-24 absolute -mt-10 rounded-2xl overflow-hidden p-1 ">
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
              {user?.name}
            </p>
            <p className="text-xs text-[var(--light-text)] AvenirRegular hover:underline cursor-pointer ">
              {user?.email}
            </p>
          </div>
          {/* description */}
          <p className="text-sm text-[var(--regular-text)] text-center AvenirRegular">
            ⭐ Hello! I'm a Developer turning ideas into innovative tech. ⭐{" "}
          </p>
          <div className="flex flex-col gap-2 pt-1 ">
            <div className="flex w-full h-[0.1rem] bg-[var(--text-box-color)]"></div>
            {user && (
              <Link
                to={`/profile/${user._id}`}
                className="flex w-full bg-cyan-600 hover:bg-cyan-500 py-2 rounded-lg justify-center items-center cursor-pointer  transition-all duration-500 select-none"
              >
                <p className="text-sm text-white AvenirRegular" title="Profile">
                  My Profile
                </p>
              </Link>
            )}
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
                  <div className="flex w-1 h-1 bg-pink-500 rounded-full"></div>
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
  let length = users.length;
  let [userLeft, setUserLeft] = useState(0);
  let [userRight, setUserRight] = useState(8);

  const updateLeft = () => {
    if (userLeft > 0) {
      setUserLeft(userLeft - 1);
      setUserRight(userRight - 1);
      console.log(userLeft, userRight);
    }
  };
  const updateRight = () => {
    if (userRight < length) {
      setUserLeft(userLeft + 1);
      setUserRight(userRight + 1);
      console.log(userLeft, userRight);
    }
  };
  return (
    <>
      <div className="flex transition-all duration-500">
        <div
          className={`flex w-6 h-6 -left-2 top-7 ${
            userLeft > 0 ? "bg-[var(--lighter-gray)]" : ""
          } justify-center items-center  z-10 absolute rounded-full cursor-pointer `}
          onClick={updateLeft}
        >
          <i
            className={` ${
              userLeft > 0
                ? "ri-arrow-left-s-line text-xl text-[var(--icon-color)] hover:text-cyan-500 transition-all duration-500"
                : ""
            } `}
          ></i>
        </div>
        <div className="flex gap-6 overflow-hidden relative items-center">
          {users?.length > 0 &&
            users.slice(userLeft, userRight).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 group cursor-pointer "
              >
                <div className="flex w-20 h-20 rounded-2xl overflow-hidden p-0.5 border-2 border-[var(--lighter-gray)] hover:border-cyan-500 transition-all duration-500">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover rounded-xl select-none"
                  />
                </div>

                <p className="text-sm AvenirRegular text-[var(--regular-text)] group-hover:text-[var(--dark-text)] ">
                  {item.name}
                </p>
              </div>
            ))}
        </div>
        <div
          className={`flex w-6 h-6 -right-2 top-7  ${
            userRight < length ? "bg-[var(--lighter-gray)]" : ""
          } justify-center items-center z-10 absolute rounded-full cursor-pointer`}
          onClick={updateRight}
        >
          <i
            className={` ${
              userRight < length
                ? "ri-arrow-right-s-line text-xl text-[var(--icon-color)] hover:text-cyan-500 transition-all duration-500"
                : ""
            } `}
          ></i>
        </div>
      </div>
    </>
  );
};

const Frames = ({
  frames,
  commentInputSelected,
  setCommentInputSelected,
  comment,
  setComment,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
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
                    src={`http://localhost:5000/images/${item.thumbnail}`}
                  />
                </div>
                <div className="flex flex-col cursor-pointer">
                  <div className="flex gap-1 items-center">
                    <p className="text-sm AvenirLight text-[var(--regular-text)]">
                      {item.userId.email}
                    </p>
                    <i
                      className="ri-verified-badge-fill text-blue-400"
                      title="verified"
                    ></i>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-md AvenirRegular text-[var(--dark-text)] capitalize">
                      {item.userId.name}
                    </p>
                    <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                    <p className="text-xs AvenirRegular text-pink-400">
                      {getTimeDifference(item.createdAt)}
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
                {item.title}
              </p>
              <p className="text-sm text-[var(--regular-text)] AvenirRegular">
                {item.description}
              </p>
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src={`http://localhost:5000/images/${item.thumbnail}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center px-2">
                  <div className="flex items-center">
                    <i
                      className="ri-heart-line text-2xl text-[var(--light-icon-color)] cursor-pointer hover:text-cyan-500"
                      title="like"
                    ></i>
                  </div>
                  <div className="flex items-center">
                    <i
                      className="ri-chat-3-line text-2xl text-[var(--light-icon-color)] cursor-pointer hover:text-cyan-500"
                      title="comment"
                    ></i>
                  </div>
                  <div className="flex items-center">
                    <i
                      className="ri-send-plane-line text-2xl pt-1 text-[var(--light-icon-color)] cursor-pointer hover:text-cyan-500"
                      title="share"
                    ></i>
                  </div>
                </div>
                <div className="flex text-xs text-white AvenirRegular p-1.5 px-4 bg-cyan-600 hover:bg-cyan-500 transition-all duration-500 rounded-xl cursor-pointer">
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
                <div
                  className={`flex w-full p-[1px] rounded-xl overflow-hidden ${
                    commentInputSelected[idx]
                      ? "bg-gradient-to-r from-[#41cfe8] to-[#d955ea]"
                      : ""
                  } `}
                >
                  <div className="flex w-full bg-[var(--light-gray)] gap-2 rounded-xl px-4 items-center">
                    <input
                      type="text"
                      value={comment[idx]}
                      onChange={(e) => {
                        const updatedComment = [...comment];
                        updatedComment[idx] = e.target.value;
                        setComment(updatedComment);
                      }}
                      placeholder="Write your comment"
                      className="bg-transparent w-full outline-none text-[var(--regular-text)] text-sm AvenirLight placeholder:text-[var(--light-text)]"
                      onFocus={() => {
                        const updatedSelection = [...commentInputSelected];
                        updatedSelection[idx] = !updatedSelection[idx];
                        setCommentInputSelected(updatedSelection);
                      }}
                      onBlur={() => {
                        const updatedSelection = [...commentInputSelected];
                        updatedSelection[idx] = !updatedSelection[idx];
                        setCommentInputSelected(updatedSelection);
                      }}
                    />
                    <i
                      className={`ri-send-plane-2-fill text-xl cursor-pointer ${
                        commentInputSelected[idx]
                          ? "text-[var(--light-icon-color)] hover:text-white"
                          : "text-transparent"
                      } `}
                      onClick={() => {
                        if (comment[idx]) {
                          const updatedComment = [...comment];
                          updatedComment[idx] = "";
                          setComment(updatedComment);
                        }
                      }}
                    ></i>
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
      <style>
        {`
        .roundedScroll::-webkit-scrollbar {
          width: 6px; /* Optional: Set width for the scrollbar */
        }
        .roundedScroll::-webkit-scrollbar-track {
          border-radius: 6px;
        }
        .roundedScroll::-webkit-scrollbar-thumb {
          background-color: #414141;
          border-radius: 6px;
          
        }
        .roundedScroll::-webkit-scrollbar-thumb:hover {
          background-color: #484848;
          border-radius: 8px;
        }`}
      </style>
      <div className="flex flex-col gap-4 overflow-y-auto roundedScroll pr-1">
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
                    <div className="flex w-1 h-1 bg-pink-400 rounded-full"></div>
                    <p className="text-xs AvenirRegular text-pink-400">
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
                <div className="flex rounded-xl bg-cyan-600 p-1 px-3 text-xs AvenirRegular text-white cursor-pointer hover:bg-cyan-500 transition-all duration-500">
                  Thanks
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const NewFrame = ({ onClick }) => {
  return (
    <>
      <div className="flex flex-col gap-4" onClick={onClick}>
        <div className="flex flex-col gap-3 bg-[var(--lighter-gray)] rounded-2xl p-3">
          <div className="flex gap-3">
            <div className="flex w-10 h-10 p-1 rounded-2xl bg-[var(--light-gray)] cursor-pointer">
              <img
                className="flex w-full h-full  object-cover rounded-xl "
                src={userImage}
              />
            </div>
            <div className={`flex w-full p-[1px] rounded-xl overflow-hidden `}>
              <div className="flex w-full bg-[var(--light-gray)] gap-2 rounded-xl px-4 items-center">
                <input
                  type="text"
                  placeholder="Add your thoughts"
                  className="bg-transparent w-full outline-none text-[var(--regular-text)] text-sm AvenirLight placeholder:text-[var(--light-text)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
