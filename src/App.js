import CalendarApp from "./components/Calendar";
import ToDoForm from "./components/ToDoForm";
import logo from './assets/logo-transparent-png.png';
import "./App.css";

// import ToDoList from "./components/ToDoList";

function App() {
  return (
 
   

    < div >
<img className="logo" src={logo} alt="Logo"></img>
         <ToDoForm/>
       
         <div>
         
         </div>
         <CalendarApp />
    
    </div>
  
  );
}

export default App;

