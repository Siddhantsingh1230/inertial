import login1 from "../assets/images/login1.jfif";
import p3 from "../assets/images/p3.jpg";
const SignUp = () => {
  return (
    <>
      <style>
        {`
      .rotate-signup-grid{
        transform: skewX(35deg);
        transform-origin: top left;
      }
      .diagonal-container {
        position: relative;
        overflow: hidden; /* Ensure content within pseudo-elements is not visible outside */
      }
      .diagonal-container::before,
      .diagonal-container::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
      }
      .diagonal-container::before {
        clip-path: polygon(50% 56%, 100% 6%, 100% 100%, 6% 100%); /* Diagonal clip path for the first triangle */
      }
      .diagonal-container::after {
        clip-path: polygon(0% 0%, 0% 0%, 92% 0%, 0% 92%); /* Diagonal clip path for the second triangle */
      }
      .div1::before{
        background-image: url(${p3}); /* Replace with your image URL */
      }
      .div1::after{
        background-image: url(${login1}); /* Replace with your image URL */
      }
      .div2::before{
        background-image: url(${p3}); /* Replace with your image URL */
      }
      .div2::after{
        background-image: url(${login1}); /* Replace with your image URL */
      }
      .div3::before{
        background-image: url(${p3}); /* Replace with your image URL */
      }
      .div3::after{
        background-image: url(${login1}); /* Replace with your image URL */
      }
      .div4::before{
        background-image: url(${p3}); /* Replace with your image URL */
      }
      .div4::after{
        background-image: url(${login1}); /* Replace with your image URL */
      }
      .div5::after{
        background-image: url(${login1}); /* Replace with your image URL */
      }
      .div6::before{
        background-image: url(${p3}); /* Replace with your image URL */
      }
      .div6::after{
        background-image: url(${login1}); /* Replace with your image URL */
      }
      .div7::after{
        background-image: url(${login1}); /* Replace with your image URL */
      } 
      
      `}
      </style>
      <div className="flex h-full w-full bg-black relative">
        <div className="flex w-full  top-0 left-0 justify-start absolute overflow-hidden">
          <div className="flex w-[60%] gap-10 rotate-signup-grid">
            <div className="flex flex-col h-screen w-full gap-8">
              <div className="flex  w-full h-full diagonal-container div1"></div>
              <div className="flex w-full h-full diagonal-container div2"></div>
              <div className="flex w-full h-full diagonal-container div3"></div>
            </div>
            <div className="flex flex-col h-full w-full gap-8">
              <div className="flex w-full h-full diagonal-container div4"></div>
              <div className="flexw-full h-full diagonal-container div5"></div>
              <div className="flex w-full h-full diagonal-container div6"></div>
            </div>
            <div className="flex flex-col  h-full w-full gap-8">
              <div className="flex w-full h-full diagonal-container div7"></div>
              <div className="flex  w-full h-full diagonal-container"></div>
              <div className="flex w-full h-full diagonal-container"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
