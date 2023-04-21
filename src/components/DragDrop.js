import React, { useState } from "react";
import Content from "./Content";
import { useDrop } from "react-dnd";
import "../App.css";

// A List of content items with an id and text property
const ContentList = [
  {
    id: 1,
    text:
      "Example 1 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
  },
  {
    id: 2,
    text:
      "Example 2 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    text:
      "Example 3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
];
//reload the page
function reloadCompontents() {
  window.location.reload();
}
function DragDrop() {
  //step3: state variables for the board and content list


  // step4: useDrop hook to allow dropping of items onto the board
  

  // step5: function to add an Text or Image to the board



  return (
    // render the content list and board
    <>
      <div className="contents">
        {/** step6: map over the content list and render each item as a Content component and make all elements draggable */}
      </div>
      <div className="board-container">
        <div className="board" ref={drop}>
           {/*  step7: map over the board and render each item as a Content component with isInBoard prop set to true */}
        </div>
        <h3 id="reloadBtn" onClick={reloadCompontents}>Reload Components</h3>
      </div>

    </>
  );
}

export default DragDrop;
