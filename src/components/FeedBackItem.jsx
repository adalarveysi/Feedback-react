import React from "react";
import Card from "./Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
const FeedBackItem = ({ item }) => {
    // function handleClick(id){
    const{ handleDelete ,editFeedBack} = useContext(FeedBackContext)
    // }
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={()=> editFeedBack(item)}>
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedBackItem;
