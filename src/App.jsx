import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";
function App(){
    return(
   <div className="App">
     <div className="home">
        <Home/>
    </div>
    <div className="todo">
        <Todo/>
    </div>
   </div>
    );
}
export default App;

//Created: Wednesday, 29 March BE 2566 20:58
//Modified: Wednesday, 29 March BE 2566 21:09
