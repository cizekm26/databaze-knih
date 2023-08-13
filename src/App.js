import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <Routes>
          <Route path="/" element={<BookList/>}></Route>
          <Route path="/create" element={<CreateBook/>}></Route>
          <Route path="book/:id/edit" element={<EditBook />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
