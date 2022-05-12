import React, { useEffect, useState } from "react";
import { ReactComponent } from "../images/star.svg";
import "./starRate.css";

function StarRate({ ratevalue }) {
  return (
    <div>
      {[...Array(10)].map((star, idx) => {
        const ratingValue = idx + 1;

        return (
          <ReactComponent
            key={idx}
            className="stars"
            fill={ratingValue <= ratevalue ? "#ffc107" : "#e4e5e9"}
          />
        );
      })}
    </div>
  );
}

export default StarRate;
