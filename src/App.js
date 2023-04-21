/**for installing the react project we need to :
  1- npm install -g create-react-app
  2- create-react-app my-project-name
  3- yarn add react-dnd react-dnd-html5-backend
  But
  here, you only need to write "npm intsall" in terminal
**/
// step1: import libraries react-dnd and htm5-backend


import DragDrop from "./components/DragDrop";

function App() {
  return (
  //step2: to access all functionality of ReactDnd we need to wrap the div in DndProvider
  
      <div className="App">

      </div>

  );
}

export default App;
