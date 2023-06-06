
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddUser' element={<AddUser />} />
        <Route path='/EditUser/:id'element={<EditUser />} />
        <Route path='ViewUser/:id' element={<ViewUser />} />
      
      </Routes>
      
      </Router>
      
    
    </div>
  );
}

export default App;
