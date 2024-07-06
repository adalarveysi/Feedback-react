import React from "react";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
const FeedBackStas = () => {
    const {feedback} = useContext(FeedBackContext)
    let avg = feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0) / feedback.length
    avg = avg.toFixed(1)
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}</h4>
      <h4>Average Rating:{isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
};

export default FeedBackStas;
