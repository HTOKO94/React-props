import './App.css';
import P from "./Components/Profile/Profile";
import './Components/Profile/Profile.css';
import A from "./Components/About/About";
import "./Components/About/About.css";

function App() {
   const handleName  = fullname => alert(fullname);
  return (
    <div>
     
     <div className="aboutme">
     { <P  fullname="Hamza Toukebri" bio="Full Stack Developer JS" profession="Web developer"  handleName={handleName}>Hamza.jpg</P> }
     <A fullname="Hamza Toukebri" location="Beja,Tunisia" degree="BAC+3" phone="55320994" email="hamza.toukabri94@gmail.com" dateOfBirth="02/09/1994" experience="1 Year" careerLevel="First-Level"/>
     </div>
    </div>
  );
}



export default App;