import './App.css';
import {  Routes, Route } from "react-router-dom";
import UserList from './components/UserList';
import Card from './components/Card';


function App() {




  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList />} />

        <Route path='/card/:id' element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
