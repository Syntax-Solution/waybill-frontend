import React, { useState } from "react";
import "./Tracking.css";
import PopUp from "../PopUp";

const Tracking = () => {

  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopup = () => setOpenPopup(false)

  return (
    <div
      className="Tracking flex justify-center items-center"
      id="tracking"
    >
      <div className="hidden md:flex">
        <h3 className="text-sm text-white mb-3">HERE YOU CAN</h3>
        <h2 className="md:text-7xl text-6xl text-white">
          CHECK
          <br /> YOUR
          <br /> <span className="text-yellow-500">ORDER</span>
        </h2>
      </div>
      <div className="form-container ml-12 md:ml-0 mt-5 md:mt-5">
        <form action="/">
          <div className="flex flex-col items-center justify-center text-gray-100 text-xs w-80">
            <input
              type="text"
              placeholder="TRACKING NUMBER"
              className="bg-[#454545] px-6 py-1 border border-yellow-500 rounded-md mb-3"
            />
            <input
              type="text"
              placeholder="ORDER NUMBER"
              className="bg-[#454545] px-6 py-1 border border-yellow-500 rounded-md"
            />
          </div>
        </form>
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => setOpenPopup(true)}
            className="bg-yellow-500 text-white text-center font-bold px-5 py-1.5 rounded cursor-pointer text-xs"
          >
            CHECK ORDER
          </button>
        </div>
        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopup} />
        <p className="text-xs text-white mt-5 text-center">
          <span className="text-yellow-500">NOTE: </span>Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
          <br /> Dolores, incidunt ea architecto, impedit magnam in vitae <br />
          eaque itaque sint adipisci, cum pariatur porro ducimus?
          <br /> Cum ea laboriosam delectus molestiae voluptatem.
        </p>
      </div>
      <div className="hidden border border-gray-100 rounded-md p-10">
        <h3 className="text-xs text-white font-semibold mb-5">ORDER DETAILS</h3>
        <h4 className="text-xs text-yellow-500 mb-3">Current Location</h4>
        <p className="text-xs text-white">Street: 98 Londonderry</p>
        <p className="text-xs text-white">city: Biggs State: WW</p>
        <p className="text-xs text-white mb-3">Zip: 04264-7156</p>
        <h4 className="text-xs text-yellow-500 mb-3">Estimated Delivery</h4>
        <p className="text-xs text-white">10/20/2023 - 4:30 PM</p>
      </div>
    </div>
  );
};

export default Tracking;
