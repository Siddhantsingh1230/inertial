import React, { useEffect, useState } from "react";
import userImage from "../assets/images/login8.jfif";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllFramesByUserIdAsync } from "../slices/frameSlice";
import Toasts from "../app/Toasts";
import { getTimeDifference } from "../utils/DateFormat";
import { textEllipsis, formatNumber } from "../utils/textFormatting";
import bgProfile2 from "../assets/images/bgProfile2.jpg";

// Initial dummy data for user profile
const initialUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  description:
    "Web developer with a passion for creating interactive applications.",
  profilePhoto: userImage,
};

const socialLinks = {
  instagram: "https://instagram.com/",
  linkedIn: "https://linkedin.com/in/",
  wordpress: "https://wordpress.com/",
  medium: "https://medium.com/",
};

const Profile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const frames = useSelector((state) => state.frame.userFrames);
  const [isModalOpen, setModalOpen] = useState(false);
  const [updatedLinks, setUpdatedLinks] = useState(socialLinks);
  const [selectedMoreBtns, setSelectedMoreBtns] = useState(new Set());

  // This function will work when selected more btn in single frames to show complete description.
  const handleSelectedMoreBtn = (index) => {
    setSelectedMoreBtns((prevSelectedBtns) => {
      const newSelectedItems = new Set(prevSelectedBtns);
      newSelectedItems.has(index)
        ? newSelectedItems.delete(index)
        : newSelectedItems.add(index);
      return newSelectedItems;
    });
  };

  const dispatch = useDispatch();

  // Handle social link changes
  const handleLinkChange = (platform, newLink) => {
    setUpdatedLinks((prevLinks) => ({
      ...prevLinks,
      [platform]: newLink,
    }));
  };

  // Handle saving updated links
  const handleUpdateLinks = () => {
    // Here, you can handle saving the links, if needed.
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllFramesByUserIdAsync(id));
  }, []);

  return (
    <>
      <style>
        {`
      glassBg:{
        background: rgba(119, 105, 105, 0.55);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.3px);
        -webkit-backdrop-filter: blur(7.3px);
        border: 1px solid rgba(119, 105, 105, 0.3);
      }`}
      </style>
      <div className="flex gap-10 min-h-screen text-white p-10 py-5">
        {/* Profile Information */}
        <div className="flex w-[28%]">
          <div className="flex flex-col w-1/4 h-[82.5%] items-center rounded-3xl overflow-hidden fixed">
            <div
              className="flex bg-gradient-to-r from-sky-500 via-yellow-400 to-rose-600 h-1/3 w-full"
              style={{ backgroundImage: `url(${bgProfile2})` }}
            ></div>
            <div className="flex flex-col gap-1 bg-[var(--lighter-gray)] items-center h-2/3 relative">
              <div
                title={user?.name}
                className="flex absolute -mt-24 p-1 hover:border-2 hover:border-cyan-400 rounded-full cursor-pointer"
              >
                <img
                  src={userImage}
                  alt="Profile"
                  className="rounded-full w-40 h-40"
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-20 py-2">
              <h1 className="text-xl font-bold  capitalize AvenirRegular">
                {user?.name}
              </h1>
              <p className="text-gray-500 text-sm AvenirRegular ">
                {user?.email}
              </p>
              </div>
              
              <p className="mt-2 text-center text-gray-400 text-sm px-6 AvenirLight">
                Web developer with a passion for creating interactive
                applications.
              </p>
              <div className="flex justify-between w-full px-12 py-4 select-none">
                <div className="flex flex-col items-center">
                  <p className="AvenirRegular text-sm">{formatNumber(67164)}</p>
                  <p className="AvenirLight text-zinc-400 text-sm">Followers</p>
                </div>
                <div className="flex h-full w-[1px] bg-zinc-700"></div>
                <div className="flex flex-col items-center">
                  <p className="AvenirRegular text-sm">{formatNumber(67164)}</p>
                  <p className="AvenirLight text-zinc-400 text-sm">Frames</p>
                </div>
                <div className="flex h-full w-[1px] bg-zinc-700"></div>
                <div className="flex flex-col items-center">
                  <p className="AvenirRegular text-sm">{formatNumber(67164)}</p>
                  <p className="AvenirLight text-zinc-400 text-sm">Followings</p>
                </div>
              </div>
              {/* Social Links Section */}
              <div className="py-2 flex gap-6 justify-center items-center w-full relative">
                <div className="flex gap-5">
                  <a
                    title="Instagram"
                    href={socialLinks.instagram}
                    target="_blank"
                  >
                    <i
                      className={`ri-instagram-fill text-3xl text-zinc-400 cursor-pointer`}
                    ></i>
                  </a>
                  <a
                    title="LinkedIn"
                    href={socialLinks.linkedIn}
                    target="_blank"
                  >
                    <i
                      className={`ri-linkedin-box-fill text-3xl text-zinc-400 cursor-pointer`}
                    ></i>
                  </a>
                  <a
                    title="Wordpress"
                    href={socialLinks.wordpress}
                    target="_blank"
                  >
                    <i
                      className={`ri-wordpress-fill text-3xl text-zinc-400 cursor-pointer`}
                    ></i>
                  </a>
                  <a
                    title="Medium"
                    href={socialLinks.instagram}
                    target="_blank"
                  >
                    <i
                      className={`ri-medium-fill text-3xl text-zinc-400 cursor-pointer`}
                    ></i>
                  </a>
                </div>

                <button
                  title="Update links"
                  onClick={() => setModalOpen(true)}
                  className=" bg-zinc-900 hover:bg-zinc-800  flex gap-1 absolute right-6 text-zinc-300 text-md px-2 rounded-md AvenirRegular transition-all duration-500"
                >
                  <i className="ri-edit-2-fill"></i>
                </button>
              </div>
              <div className="flex px-6 gap-2 py-2 w-full">
                <Link
                  to={`${import.meta.env.VITE_BASE_URL}/v1/svg/${id}`}
                  className="w-2/3 flex text-sm justify-center AvenirLight py-1.5 rounded-lg  bg-pink-500 hover:bg-pink-600"
                >
                  View Svg
                </Link>
                <button
                  title="Copy Link to Clipboard"
                  className="w-1/3 flex text-sm justify-center gap-1 AvenirLight py-1.5 rounded-lg  bg-pink-500 hover:bg-pink-600"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${import.meta.env.VITE_BASE_URL}/v1/svg/${id}`
                    );
                    Toasts("success", "Link copied to clipboard");
                  }}
                >
                  <i className="ri-share-forward-line"></i> Share
                </button>
              </div>
              
              
              
            </div>
          </div>
        </div>
        {/* Modal for Updating Links */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[var(--lighter-gray)] p-6 rounded-lg w-11/12 md:w-1/4 flex flex-col">
              <h3 className="text-lg font-semibold mb-4 AvenirLight">
                Update Social Links
              </h3>
              {Object.entries(updatedLinks).map(([platform, link]) => (
                <div key={platform} className="mb-3 flex">
                  <label className="w-full capitalize AvenirLight">
                    {platform}:
                  </label>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => handleLinkChange(platform, e.target.value)}
                    className="bg-zinc-700 text-white px-3 text-sm py-2 rounded-lg w-full AvenirLight"
                  />
                </div>
              ))}
              <div className="flex justify-between mt-2">
                <button
                  onClick={handleUpdateLinks}
                  className="bg-green-500 hover:bg-green-700 text-white text-sm py-1 px-3 rounded-lg AvenirLight transition-all duration-500"
                >
                  Save
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-3 rounded-lg AvenirLight transition-all duration-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Frames Section */}
        <div className="flex flex-col w-[72%]">
          <h2 className="text-xl font-semibold mb-4 AvenirLight">
            My Inertial Frames
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {frames.map((frame, index) => (
              <div
                key={index}
                className="flex flex-col bg-[var(--lighter-gray)] rounded-2xl p-3 gap-2"
              >
                <img
                  src={frame.thumbnail}
                  alt={frame.title}
                  className="mb-2 w-full rounded-xl"
                />
                <h3 className="font-bold text-zinc-300 AvenirLight text-justify">
                  {frame.title}
                </h3>
                <div
                  className={`text-zinc-400 text-sm AvenirLight text-justify  `}
                >
                  {selectedMoreBtns.has(index)
                    ? frame.description
                    : textEllipsis(frame.description, 250)}

                  {frame.description.length > 270 && (
                    <button
                      className="text-sm text-blue-400 AvenirLight hover:underline cursor-pointer"
                      onClick={() => {
                        handleSelectedMoreBtn(index);
                      }}
                    >
                      {!selectedMoreBtns.has(index) ? "more" : "less"}
                    </button>
                  )}
                </div>
                <hr className="border border-zinc-800"></hr>
                <div className="flex justify-between select-none">
                  <div className="flex gap-1 items-center text-zinc-500">
                    <i className="ri-time-fill text-xl"></i>
                    <p className=" text-sm AvenirLight">
                      {getTimeDifference(frame.createdAt)}
                    </p>
                  </div>
                  <div
                    title="Likes"
                    className="flex gap-1 items-center text-zinc-400"
                  >
                    <i className="ri-heart-3-fill"></i>
                    <p className="text-sm AvenirLight">108</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
