import React from "react";
import { useDrag } from "react-dnd";

function Content({ id, text }) {
  // use the useDrag hook to enable dragging functionality
  
  // return the draggable content with a reference to the drag function
  // and apply styles based on the dragging state
  return (
    <div
      style={{ border: isDragging ? "5px solid black" : "0px" }}
    >
      {text}
    </div>
  );
}

// export the Content component
export default Content;
