import axios from "axios";

const options = {
  withCredentials: true,
};

export const createFrame = async (formData) => {
  let path = "v1/frame/addFrame";
  try {
    const { data } = await axios.post(
      new URL(path, import.meta.env.VITE_BASE_URL),formData,
      options
    );
    return data;
  } catch (error) {
    throw error; // Proper error handling
  }
};
