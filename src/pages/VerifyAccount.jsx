import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyUserAsync } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const VerifyAccount = () => {
  const {email} = useParams();
  const decodedEmail = decodeURIComponent(email);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(decodedEmail);
    dispatch(verifyUserAsync({email : decodedEmail,otp})).then((action) => {
        if (action.type === "auth/verifyuser/fulfilled") {
          // Navigate to verify account page after signup is successful
          navigate(`/login`);
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700">
          Verify Your Account
        </h1>
        <p className="text-gray-600">
          Please enter the OTP sent to your email address.
        </p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col mb-4">
            <label htmlFor="otp" className="text-gray-700">
              OTP:
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            Verify
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </form>
        <p className="text-gray-600 mt-4">
          Didn't receive OTP?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyAccount;
