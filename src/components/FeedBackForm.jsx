import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
const FeedBackForm = () => {
  const { addFeedBack, feedbackedit,updatedFeedBackItem } = useContext(FeedBackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRaiting] = useState(10);
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (feedbackedit.edit) {
      setText(feedbackedit.item.text);
      setRaiting(feedbackedit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackedit]);

  const handleChange = (e) => {
    if (text.trim() === "") {
      setBtnDisabled(true);
      setMessages(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessages("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessages(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        id: Math.floor(Math.random() * 100),
        rating,
        text,
      };
    if(feedbackedit.edit===true){
        updatedFeedBackItem(feedbackedit.item.id,newFeedBack)
    }else{
        addFeedBack(newFeedBack)
    }  
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRaiting(rating)} />
        <div className="input-group">
          <input type="text"  onChange={handleChange} value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Kaydet
          </Button>
          {messages && <div className="message"></div>}
        </div>
      </form>
    </Card>
  );
};

export default FeedBackForm;
