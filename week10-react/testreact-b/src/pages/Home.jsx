import { Link } from "react-router"
import {useEffect} from "react"
import UselessFact
 from "../components/UselessFact/UselessFact"

 export default function Home() {
  useEffect(() => {
    document.title = "Home | Random Site"
  }, []);
  return(
    <main id="main">
      <h1>Welcome to this site!</h1>
      <p>This is just to test React.</p>
      <p>Go to the <Link to="/movies">movies page</Link></p>
      <UselessFact />
    </main>
  )
}