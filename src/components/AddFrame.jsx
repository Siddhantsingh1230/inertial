import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createFrameAsync } from "../slices/frameSlice";

const AddFrame = ({ addFrameVisibility, setAddFrameVisibility }) => {
  const user = useSelector((state) => state.auth.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgFile, setImgFile] = useState();
  const inputImageFile = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const handleRegistration = (data) => {
    const formData = new FormData();
    formData.append("image", imgFile);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("userId", user._id);
    console.log(user._id);
    dispatch(createFrameAsync(formData));
    setAddFrameVisibility(false);
  };

  return (
    <>
      {addFrameVisibility && (
        <div
          className="flex w-full mt-[-64px] max-h-screen rounded-md justify-center items-center backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <form
            className="flex flex-col gap-4 rounded-3xl p-5 w-1/2 h-5/6 bg-[var(--light-gray)]"
            onSubmit={handleSubmit(handleRegistration)}
          >
            <p className="text-[var(--regular-text)] AvenirBlack">
              Create new Frame
            </p>
            {/* title section */}
            <div className="flex flex-col text-sm">
              <p className=" select-none text-[var(--regular-text)]">Title</p>
              <input
                type="text"
                value={title}
                title="title"
                {...register("title", {
                  required: "Add Title",
                })}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                maxLength={150}
                className={`p-1.5 px-3 rounded-md focus:outline text-[var(--regular-text)]  bg-[var(--hover-gray)] focus:outline-2 focus:outline-blue-500
                 `}
              ></input>
              {errors.title && (
                <p className="inline-flex items-center rounded-md px-1 py-0 text-[10px] font-semibold text-red-700 select-none">
                  {errors.title.message}
                </p>
              )}
              <div className="flex w-full justify-end text-xs pt-1 text-[var(--regular-text)]  ">
                <p>{`${title.length}/150`}</p>
              </div>
            </div>

            {/* description section */}
            <div className="flex flex-col text-sm">
              <p className="select-none text-[var(--regular-text)]">
                Description
              </p>
              <textarea
                rows="4"
                value={description}
                maxLength={2000}
                title="description"
                {...register("description", {
                  required: "Add Description",
                })}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className={`p-1.5 px-3 resize-none text-[var(--regular-text)] rounded-md focus:outline  bg-[var(--hover-gray)] focus:outline-2 focus:outline-blue-500`}
              ></textarea>
              {errors.description && (
                <p className="inline-flex items-center rounded-md px-1 py-0 text-[10px] font-semibold text-red-700 select-none">
                  {errors.description.message}
                </p>
              )}
              <div className="flex w-full justify-end text-xs pt-1 text-[var(--regular-text)]  ">
                <p>{`${description.length}/2000`}</p>
              </div>
            </div>

            {/* Thumbnail section */}
            <div className="flex flex-col gap-2 text-sm">
              <p className=" select-none text-[var(--regular-text)]">
                Thumbnail
              </p>
              <p className={`text-xs text-[var(--regular-text)]`}>
                Select or upload a picture that shows what's in your frame.
              </p>
              <div className=" flex justify-center items-center border-2 border-dashed border-gray-500 w-64 h-36 mt-1">
                <div className="relative w-full h-full">
                  <img
                    src={imgSrc}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                  <label
                    title="podcast thumbnail"
                    className="absolute imgChange rounded-full h-full w-full top-0 left-0 cursor-pointer "
                    htmlFor="image"
                  ></label>
                  <input
                    ref={inputImageFile}
                    className="hidden"
                    id="image"
                    type="file"
                    {...register("image", { required: "Please add an image" })}
                    title="image"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setImgFile(e.target.files[0]);
                      if (e.target.files[0]) {
                        setImgSrc(URL.createObjectURL(e.target.files[0])); // Convert file to a URL
                      }
                    }}
                  />
                  {errors.image && (
                    <p className="inline-flex items-center rounded-md px-1 py-0 text-[10px] font-semibold text-red-700 select-none">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* save or cancel button */}
            <div className="flex  gap-4 justify-end">
              <div
                className="flex AvenirDark text-sm cursor-pointer bg-red-500 p-1.5 px-3 rounded-xl text-white"
                onClick={() => {
                  setAddFrameVisibility(false);
                }}
              >
                cancel
              </div>
              <button className="flex AvenirDark text-sm cursor-pointer bg-green-500 p-1.5 px-3 rounded-xl text-white ">
                create
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddFrame;
