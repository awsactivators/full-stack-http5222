import {useEffect} from "react"
import Question
 from "../components/Question/Question"
 import "../css/styles.css"

 export default function Home() {
  useEffect(() => {
    document.title = "Home | Random Question"
  }, []);
  return(
    <main id="main">
      <h1>Welcome to Trivia!</h1>
      <p>Here is your random question.</p>
      <h2>True or false:</h2>
      <Question />
      <p>&copy; HTTP5211, 2022.</p>
    </main>
  )
}