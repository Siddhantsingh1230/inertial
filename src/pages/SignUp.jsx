import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jfif";
import s3 from "../assets/images/s3.jfif";
import s4 from "../assets/images/s4.jfif";
import s5 from "../assets/images/s5.jfif";
import s6 from "../assets/images/s6.jfif";
import s7 from "../assets/images/s7.jfif";
import s8 from "../assets/images/s8.jfif";
import s9 from "../assets/images/s9.jfif";
import s10 from "../assets/images/s10.jfif";
import s11 from "../assets/images/s11.jfif";
import s12 from "../assets/images/s12.jfif";
const SignUp = () => {
  return (
    <>
      <style>
        {`
        .triangular-img-card,.reverse-triangular-img-card{
          margin:0 -55px;
        }
        .triangular-img-card{
          padding-top:15px 
        }
        .reverse-triangular-img-card{
          padding-bottom:10px 
        }
          .triangular-img{
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            overflow:hidden;
          }
          .reverse-triangular-img{
            clip-path: polygon(50% 100%, 0 0, 100% 0);
            overflow:hidden;
          }
      `}
      </style>
      <div className="flex h-full w-full bg-black relative">
        <div className="flex w-full  top-0 left-0 justify-start absolute overflow-hidden">
          <div className="flex flex-col h-screen w-[70%] gap-[26px] overflow-hidden">
            <div className="flex h-1/3 w-full px-[55px] overflow-hidden">
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s12}
                  className="reverse-triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full triangular-img-card">
                <img
                  src={s2}
                  className="triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s10}
                  className="reverse-triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full triangular-img-card">
                <img
                  src={s9}
                  className="triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s5}
                  className="reverse-triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full triangular-img-card"></div>
            </div>
            <div className="flex h-1/3 w-full px-[55px] overflow-hidden">
              <div className="flex w-full triangular-img-card"></div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s6}
                  className="reverse-triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full triangular-img-card">
                <img
                  src={s7}
                  className="triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s8}
                  className="reverse-triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full triangular-img-card"></div>
              <div className="flex w-full reverse-triangular-img-card"></div>
            </div>
            <div className="flex h-1/3 w-full px-[55px] overflow-hidden">
              <div className="flex w-full reverse-triangular-img-card"></div>
              <div className="flex w-full triangular-img-card"></div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s3}
                  className="reverse-triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full triangular-img-card">
                <img
                  src={s1}
                  className="triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full reverse-triangular-img-card">
                <img
                  src={s11}
                  className="reverse-triangular-img w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full triangular-img-card">
                <img
                  src={s4}
                  className="triangular-img w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
