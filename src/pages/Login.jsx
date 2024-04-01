import login1 from "../assets/images/login1.jfif";
import login2 from "../assets/images/login2.jfif";
import login3 from "../assets/images/login3.jfif";
import login4 from "../assets/images/login4.jfif";
import login5 from "../assets/images/login5.jfif";
import login6 from "../assets/images/login6.jpg";
import login7 from "../assets/images/login7.jfif";
import login8 from "../assets/images/login8.jfif";
import login9 from "../assets/images/login9.jfif";

const Login = () => {
  return (
    <>
      {/* login page main div */}
      <div className="flex bg-black w-full h-full overflow-hidden">
        {/* bg image grid */}
        <div className="flex w-full top-0 left-0  px-24 overflow-hidden justify-end">
          <div className="login-skew flex w-[70%] gap-8">
            <div className="flex flex-col w-full gap-8 mt-10 mb-2 login-skew-items">
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login8} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login7} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login2} />
              </div>
            </div>
            <div className="flex flex-col w-full gap-8 mt-2 mb-10 login-skew-items">
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login3} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login4} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login6} />
              </div>
            </div>
            <div className="flex flex-col w-full gap-8 mt-8 mb-4 login-skew-items">
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login9} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login5} />
              </div>
              <div className="w-full">
                <img className="w-full rounded-2xl" src={login1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
