import React, { useEffect, useState } from "react";
import userImage from "../assets/images/login8.jfif";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllFramesByUserIdAsync } from "../slices/frameSlice";
import Toasts from "../app/Toasts";

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
  medium: "https://medium.com/",
  dev: "https://dev.to/",
};

// const frames = [
//   {
//     title: "Understanding React Hooks",
//     description:
//       "A deep dive into the usage of hooks in React for state management.",
//     thumbnail: "https://via.placeholder.com/100",
//   },
//   {
//     title: "JavaScript Best Practices",
//     description:
//       "A compilation of best practices for writing clean and efficient JavaScript code.",
//     thumbnail: "https://via.placeholder.com/100",
//   },
//   {
//     title: "CSS Grid vs Flexbox",
//     description: "Comparing CSS Grid and Flexbox for layout designs.",
//     thumbnail: "https://via.placeholder.com/100",
//   },
// ];

const Profile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const frames = useSelector((state) => state.frame.userFrames);
  const [isModalOpen, setModalOpen] = useState(false);
  const [updatedLinks, setUpdatedLinks] = useState(socialLinks);

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
    <div className="min-h-screen text-white p-10 py-5">
      {/* Profile Information */}
      <div className="flex flex-col items-center mb-5">
        <img
          src={userImage}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4"
        />
        <h1 className="text-2xl font-bold">{user?.name}</h1>
        <p className="text-gray-400">{user?.email}</p>
        <p className="mt-2 text-center">
          Web developer with a passion for creating interactive applications.
        </p>

        {/* Social Links Section */}
        <div className="mt-4 flex gap-4 items-center">
          {Object.entries(socialLinks).map(([key, link]) => (
            <a
              key={key}
              href={link}
              target="_blank"
              className="text-gray-400 hover:text-blue-500"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
          <button
            onClick={() => setModalOpen(true)}
            className=" bg-blue-600 hover:bg-blue-500 text-white text-xs py-1 px-3 rounded-md"
          >
            Update Links
          </button>
        </div>
        <div className="flex gap-2">
          <Link
            to={`http://localhost:5000/v1/svg/${id}`}
            className="mt-4 bg-green-700 text-sm p-1 px-3 rounded-md hover:bg-green-600 cursor-pointer"
          >
            view svg
          </Link>
          <div
            className="mt-4 bg-zinc-800 text-sm p-1 px-3 rounded-md hover:bg-zinc-700 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                `http://localhost:5000/v1/svg/${id}`
              );
              Toasts("success", "Link copied to clipboard");
            }}
          >
            Copy Link to svg
          </div>
        </div>
      </div>

      {/* Modal for Updating Links */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-zinc-800 p-6 rounded-lg w-11/12 md:w-1/3 flex flex-col gap-1">
            <h3 className="text-lg font-semibold mb-4">Update Social Links</h3>
            {Object.entries(updatedLinks).map(([platform, link]) => (
              <div key={platform} className="mb-3 flex">
                <label className="w-full capitalize">{platform}:</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => handleLinkChange(platform, e.target.value)}
                  className="bg-zinc-700 text-white px-3 text-sm py-2 rounded-lg w-full"
                />
              </div>
            ))}
            <div className="flex justify-between">
              <button
                onClick={handleUpdateLinks}
                className="bg-green-600 hover:bg-green-500 text-white text-sm py-1 px-3 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-red-600 hover:bg-red-500 text-white text-sm py-1 px-3 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Frames Section */}
      <h2 className="text-xl font-semibold mb-4 AvenirRegular">
        My Inertial Frames
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {frames.map((frame, index) => (
          <div
            key={index}
            className="flex flex-col bg-zinc-800 rounded-xl p-5 gap-2"
          >
            <img
              src={`http://localhost:5000/images/${frame.thumbnail}`}
              alt={frame.title}
              className=" mb-2 w-full rounded-xl"
            />
            <h3 className="font-bold text-zinc-300">{frame.title}</h3>
            <p className="text-zinc-500 text-sm">{frame.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
