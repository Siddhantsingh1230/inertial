import { Routes, Route } from "react-router-dom";
import Master from "../Layout/Master";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPwd from "../pages/ForgotPwd";
import ResetPwd from "../pages/ResetPwd";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Chronicles from "../pages/Chronicles";
import Contact from "../pages/Contact";
import Test from "../pages/Test";
import Protected from "./Protected";
import VerifyAccount from "../pages/VerifyAccount";
import Profile from "../pages/Profile";

const MainWrapper = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Protected>
              <Master>
                <Home />
              </Master>
            </Protected>
          }
        />
        <Route
          exact
          path="/profile/:id"
          element={
            <Protected>
              <Master>
                <Profile />
              </Master>
            </Protected>
          }
        />
        <Route exact path="/start" element={<LandingPage />} />
        <Route exact path="/chronicles" element={<Chronicles />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/forgotpassword" element={<ForgotPwd />} />
        <Route exact path="/resetpassword/:id/:token" element={<ResetPwd />} />
        <Route exact path="/verifyaccount/email/:email" element={<VerifyAccount />} />
        <Route exact path="/test" element={<Test />} />
        {/* This PageNotFound component should always be the last component in route order due to the use of "*" wildcard character */}
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default MainWrapper;
