import Header from './components/Header/Header'
import Home from './pages/Home';
import './App.css'
import {BrowserRouter} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  )
}

export default App
