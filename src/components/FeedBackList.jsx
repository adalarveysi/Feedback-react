import React from "react";
import FeedBackItem from "./FeedBackItem";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
const FeedBackList = () => {
    const {feedback} = useContext(FeedBackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No List</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
          key={item.id}
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}{" "}
      </AnimatePresence>
    </div>
  );
};

export default FeedBackList;
