import './App.css';
import Main from './components/Main/Main';
import Service from "./components/Service/Service";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Main />}/>
        <Route path="/service" element= {<Service />}/>
      </Routes>
    </div>
  );
}

export default App;
