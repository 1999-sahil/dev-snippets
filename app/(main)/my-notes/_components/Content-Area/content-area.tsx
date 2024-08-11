import React from "react";
import TopBar from "./Top-Bar/TopBar";
import NotesArea from "./Notes-Area/NotesArea";

function ContentArea() {
  return (
    <div className="w-full h-screen flex flex-col gap-5 dark:bg-[#121213] bg-white p-2 mx-auto">
      <TopBar />
      <NotesArea />
    </div>
  )
}

export default ContentArea
