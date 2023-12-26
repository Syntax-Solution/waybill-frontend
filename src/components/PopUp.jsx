import React from "react";

const PopUp = ({ openPopUp, closePopUp }) => {
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed md:static inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm md:backdrop-blur-none"
    >
      <div className="p-2 bg-transparent w-full md:w-96 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="  border border-gray-100 rounded-md p-20">
          <h3 className="text-xl text-center text-white font-semibold mb-5">
            ORDER DETAILS
          </h3>
          <h4 className="text-xl text-yellow-500 mb-3">Current Location</h4>
          <p className="text-base text-white">Street: 98 Londonderry</p>
          <p className="text-base text-white">city: Biggs State: WW</p>
          <p className="text-base text-white mb-3">Zip: 04264-7156</p>
          <h4 className="text-xl text-yellow-500 mb-3">Estimated Delivery</h4>
          <p className="text-base text-white">10/20/2023 - 4:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
