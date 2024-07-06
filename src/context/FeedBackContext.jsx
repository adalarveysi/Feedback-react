import React, { createContext, useState } from "react";
import FeedbackData from "../data/FeedBackData";

// Create a context for feedback
const FeedBackContext = createContext();

// Export the context for use in other components
export default FeedBackContext;

// Create a provider component to manage feedback state
export const FeedBackProvider = ({ children }) => {
  // Initialize state with FeedbackData (assuming it's an array of feedback objects)
  const [feedback, setFeedBack] = useState(FeedbackData);
  const [feedbackedit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const updatedFeedBackItem = (id, upditem) => {
    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
    );
  };
  // Function to add new feedback
  const addFeedBack = (newFeedBack) => {
    setFeedBack([...feedback, newFeedBack]);
  };

  // Function to delete feedback by ID
  const handleDelete = (id) => {
    setFeedBack(feedback.filter((item) => item.id !== id));
  };
  //Edit FeedBack
  const editFeedBack = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };
  // Define the value object with state and functions to provide through context
  const value = {
    feedback,
    addFeedBack,
    handleDelete,
    editFeedBack,
    updatedFeedBackItem,
    feedbackedit,
  };

  // Render the provider with the value provided
  return (
    <FeedBackContext.Provider value={value}>
      {children}
    </FeedBackContext.Provider>
  );
};
