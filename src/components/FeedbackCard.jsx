import React from "react";
import quote from "../assets/quotee.png";

const FeedbackCard = ({ content, name, img }) => (
  <div className="md:flex grid grid-cols-1 gap-2 items-center justify-center justify-around">
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card">
      <img
        src={quote}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />

      <p className="font-poppins font-normal md:text-[18px] text-xl leading-[32.4px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className=" rounded-full w-16" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold md:text-[20px] text-sm leading-[32px] text-white">
            {name}
          </h4>
        </div>
      </div>
    </div>
    <div className="flex justify-between  flex-col  px-10 py-12 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card">
      <img
        src={quote}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins font-normal md:text-[18px] text-xl leading-[32.4px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className=" rounded-full w-16" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold md:text-[20px] text-sm leading-[32px] text-white">
            {name}
          </h4>
        </div>
      </div>
    </div>
    <div className="hidden md:flex justify-between  flex-col  px-10 py-12 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card">
      <img
        src={quote}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins font-normal md:text-[18px] text-sm leading-[32.4px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className=" rounded-full w-16" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
