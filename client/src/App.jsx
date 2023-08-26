import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <>
      <Toaster />
      <MainComponent />
    </>
  );
};

export default App;
