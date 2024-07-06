import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import AboutPage from "./pages/AboutPage";
import FeedBackStas from "./components/FeedBackStas";
import FeedBackForm from "./components/FeedBackForm";
import Post from "./components/Post";
import { FeedBackProvider } from "./context/FeedBackContext";
const App = () => {
  return (
    <>
      <FeedBackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedBackForm />
                    <FeedBackStas />
                    <FeedBackList />
                  </>
                }
              />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </Router>
      </FeedBackProvider>
    </>
  );
};

export default App;
