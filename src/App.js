import Login from './Screens/Login';
import { Routes, Route  } from "react-router-dom";
import { CoachloginValid } from './Screens/CoachloginValid';
import CoachSignup from './Screens/CoachSignup';
import Error from './Screens/Error';
import UserSignup from './Screens/UserSignup';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/CoachloginValid" element={<CoachloginValid/>} />
        <Route path="/Coachsignup" element={<CoachSignup/>} />
        <Route path="/UserSignup" element={<UserSignup/>} />
        <Route path="/Error" element={<Error/>} />
        <Route path=" " redirectTo={<Login/>}/>
      </Routes>
        </div>
    </div>
  );
}

export default App;
