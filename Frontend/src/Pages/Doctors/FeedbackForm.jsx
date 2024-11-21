import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai"; // Import the star icon

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <form action="#">
        <div>
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
            How would you rate the overall experience?*
          </h3>
          <div className="flex justify-start items-center gap-2">
            {[...Array(5).keys()].map((_, index) => {
              index += 1;
              return (
                <button
                  key={index}
                  type="button"
                  className={`${
                    index <= (hover || rating)
                      ? "text-yellow-500" // Highlight stars on hover or rating
                      : "text-gray-400" // Default state
                  } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                  onClick={() => setRating(index)} // Set clicked rating
                  onMouseEnter={() => setHover(index)} // Highlight on hover
                  onMouseLeave={() => setHover(rating)} // Restore clicked state
                  onDoubleClick={() => {
                    setHover(0); // Reset hover
                    setRating(0); // Reset rating
                  }}
                >
                  <AiFillStar /> {/* Render the star icon */}
                </button>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
