import React, { useState } from "react";
import "./Tracking.css";
import PopUp from "../PopUp";

const Tracking = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopup = () => setOpenPopup(false);

  return (
    <div
      className="Tracking flex justify-center justify-around items-center"
      id="tracking"
    >
      <div className="hidden md:flex">
        <h3 className="text-xl text-white mb-3">HERE YOU CAN</h3>
        <h2 className="md:text-8xl text-6xl text-white">
          CHECK
          <br /> YOUR
          <br /> <span className="text-yellow-500">ORDER</span>
        </h2>
      </div>
      <div className="form-container ml-12 md:ml-0 mt-5 md:mt-5">
        <form action="/">
          <div className="flex flex-col items-center justify-center text-gray-100 text-xs w-96">
            <input
              type="text"
              placeholder="TRACKING NUMBER"
              className="bg-[#454545] px-24 py-2.5 border border-yellow-500 rounded-md mb-3"
            />
            <input
              type="text"
              placeholder="ORDER NUMBER"
              className="bg-[#454545] px-24 py-2.5 mt-5 border border-yellow-500 rounded-md"
            />
          </div>
        </form>
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => setOpenPopup(true)}
            className="bg-yellow-500 text-white text-center font-bold px-5 py-1.5 mt-3 rounded cursor-pointer text-xs"
          >
            CHECK ORDER
          </button>
        </div>

        <p className="text-xs text-white mt-5 text-center">
          <span className="text-yellow-500">NOTE: </span>Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
          <br /> Dolores, incidunt ea architecto, impedit magnam in vitae <br />
          eaque itaque sint adipisci, cum pariatur porro ducimus?
          <br /> Cum ea laboriosam delectus molestiae voluptatem.
        </p>
      </div>
      <div>
        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopup} />
      </div>
    </div>
  );
};

export default Tracking;
