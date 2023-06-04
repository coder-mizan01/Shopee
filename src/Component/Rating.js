import React from "react";

//icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {

  return (
    <>
      <div>
        {rating >= 4.5 ? (
          <div>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
          </div>
        ) : (
          <div>
            <FaStar /> <FaStar /> <FaStar /> <AiOutlineStar /> <AiOutlineStar />
          </div>
        )}
      </div>
    </>
  );
};

export default Rating;
