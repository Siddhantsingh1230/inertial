import axios from "axios";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const signup = async (userData) => {
  let path = "v1/auth/signup";
  const { data } = await axios.post(
    new URL(path, import.meta.env.VITE_BASE_URL),
    {
      ...userData,
    },
    options
  );
  return data;
};

export const login = async (userData) => {
  let path = "v1/auth/login";
  try{
    const { data } = await axios.post(
      new URL(path, import.meta.env.VITE_BASE_URL),
      {
        ...userData,
      },
      options
    );
    return data;
    
  }catch (error) {
    throw error; // Proper error handling
  }
  
};

export const logout = async () => {
  let path = "v1/logout";
  const { data } = await axios.get(
    new URL(path, import.meta.env.VITE_BASE_URL),
    options
  );
  return data;
};

export const getUser = async () => {
  let path = "v1/user/me";
  const { data } = await axios.get(
    new URL(path, import.meta.env.VITE_BASE_URL),
    options
  );
  return data;
};

export const verifyUser = async (otpData) => {
  let path = "v1/auth/verifyUser";
  const { data } = await axios.post(
    new URL(path, import.meta.env.VITE_BASE_URL),
    {
      ...otpData,
    },
    options
  );
  return data;
};

export const resendOtp = async (emailData) => {
  let path = "v1/auth/resendOtp";
  const { data } = await axios.post(
    new URL(path, import.meta.env.VITE_BASE_URL),
    {
      ...emailData,
    },
    options
  );
  return data;
};
