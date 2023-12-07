import React from "react";

function ClickStart() {
  return (
    <section className=" relative -mt-[5%] sm:-mt-[1%]">
        <div className=" mx-auto  justify-center mt-4 mb-4 hidden sm:flex">
            <a
              href="/"
              className=" uppercase archo-black text-lg sm:text-xl txt-s py-3 px-12 rounded-lg  bg-[#11cac9]  text-[#edd400] mx-auto btn-hov "
            >
              {" "}
              click to Play
            </a>
          </div>
      <div className="container-wrapper relative z-[999]">
        <div className="bg-[#3b8ca5b3] rounded-lg  sm:pt-4 pb-2 sm: max-w-3xl mx-auto">
          <h1 className="  font-work text-white text-base sm:text-lg font-semibold text-center">
            <span className="  font-extrabold">Create an account </span>{" "}
            with a social login <br /> OR just connect your wallet. <br />
            Either way it’s a <br />
            <span className=" font-extrabold">
              {" "}
              seamless, secure experience!{" "}
            </span>
          </h1>
          <div className=" mx-auto  justify-center mt-4 mb-4 sm:hidden flex">
            <a
              href="/"
              className=" uppercase archo-black text-lg sm:text-xl txt-s py-3 px-12 rounded-lg  bg-[#11cac9]  text-[#edd400] mx-auto btn-hov "
            >
              {" "}
              click to Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClickStart;
