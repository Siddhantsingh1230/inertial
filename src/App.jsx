import { ToastContainer } from "react-toastify"; // For Toasts
import "react-toastify/dist/ReactToastify.css";
import MainWrapper from "./components/MainWrapper";
// import { useDispatch } from "react-redux";
// import { getUserAsync } from "./slices/authSlice";
// import { useEffect } from "react";

const App = () => {
  // dispatching getuser to get if user is already signed in or not
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserAsync());
  // }, []);
  return (
    <>
      <MainWrapper />
      {/* Toast container to manage all toasts it act as parent container for toast calls */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
