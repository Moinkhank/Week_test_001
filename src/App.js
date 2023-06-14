import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Nav';
import User from './Components/Users/User';
import Employee from './Components/Employees/Employee';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <User/>
       { <Employee/>}
    </div>
  );
}

export default App;
