import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//import Movie from './components/Movie/Movie'

import Home from './pages/Home';
import Movies from './pages/Movies';
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router";

function App() {
  //This is a Javascript comment.
  return (
    <BrowserRouter>
      {/* The empty tag here is a fragment. */}
      {/* This is a JSX comment. */}
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route 
          path="/movies" 
          element={<Movies />} 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
