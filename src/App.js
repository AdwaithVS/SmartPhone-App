import logo from './logo.svg';
import './App.css';
import AddSmart from './components/AddSmart';
import SearchSmart from './components/SearchSmart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteSmart from './components/DeleteSmart';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddSmart/>}/>
        <Route path="/search" element={<SearchSmart/>}/>
        <Route path="/delete" element={<DeleteSmart/>}/>
        <Route path="/viewall" element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
