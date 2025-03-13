import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
//import Movie from './components/Movie/Movie'
import MovieList from './components/MovieList/MovieList'
import './App.css'

function App() {
  //This is a Javascript comment.
  return (
    <>
      {/* The empty tag here is a fragment. */}
      {/* This is a JSX comment. */}
      <Header />
      <main id="main">
        <h1>Welcome!</h1>
        <img src="/vite.svg" alt="Vite logo" />
        <MovieList />
      </main>
      <Footer />
    </>
  )
}

export default App
