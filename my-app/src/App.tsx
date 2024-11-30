import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PinterestIcon from "./assets/icons/PinterestIcon";
import NotificationsIcon from "./assets/icons/NotificationsIcon";
import MessagesIcon from "./assets/icons/MessagesIcon";
import SearchIcon from "./assets/icons/SearchIcon";
import CloseIcon from "./assets/icons/CloseIcon";
import DropDown from "./assets/icons/DropDown";

function App() {
  return (
    <>
      <PinterestIcon />
      <NotificationsIcon />
      <MessagesIcon />
      <SearchIcon />
      <CloseIcon />
      <DropDown />
      <div className="font-semibold ">Explore</div>
      <div>Create</div>
      <img
        src="https://i.pinimg.com/736x/ff/70/9a/ff709ad6df794b4713185da65ffbe54b.jpg"
        alt=""
      />
    </>
  );
}

export default App;
