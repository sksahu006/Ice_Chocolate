import React from "react";

export const WelcomeCard = () => {




  return (
    <div className="my-4 bg-gradient-to-r px-12 py-5 from-[#3E39D9] to-[#6560F0] rounded-md ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2  items-center w-[100wh]">
        <div>
          <p className="mt-2 text-[#CCCCE1]">April 24, 2024</p>
          <h1 className=" text-xl font-semibold text-white">
            Good Morning, Admin ..!
          </h1>
          <div className=" mt-2 text-[#CCCCE1]">
            <p>
            To our incredible admin professional—your great effort and positive attitude brighten our office every day.
            </p>
          </div>
          <div className=" mt-2 text-[#CCCCE1]">
            <p>Phone No - 0674 8569844 </p>
            <p>Email - techmentee@gmail.com </p>
          </div>
        </div>

        <div className="md:flex hidden justify-end">
          <img
            src="src\assets\welcome.png"
            className="w-[220px] h-[220px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
