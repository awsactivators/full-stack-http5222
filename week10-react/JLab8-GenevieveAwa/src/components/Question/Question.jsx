import { useState, useEffect } from "react";

export default function Question() {
  const [triviaCategory, setTriviaCategory] = useState("");
  const [triviaQuestion, setTriviaQuestion] = useState("");
  const [triviaAnswer, setTriviaAnswer] = useState("");
  const [triviaReview, setTriviaReview] = useState(false);

  useEffect(() => {
    const getQuestion = async () => {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=1&type=boolean"
      );

      let data = await response.json();
      console.log(data);
      setTriviaCategory(data.results[0].category);
      setTriviaQuestion(data.results[0].question);
      setTriviaAnswer(data.results[0].correct_answer);
    };
    getQuestion();
  }, []);

  function revealAnswer() {
    if (triviaAnswer === "True") {
      setTriviaReview(true);
    }
  }

  return (
    <section id="question-container">
      <div id="category">{triviaCategory}</div>
      <h3 id="question">{triviaQuestion}</h3>
      {triviaReview && <div id="reveal-answer">{triviaAnswer}</div>}
      <button id="reveal-btn" onClick={revealAnswer} type="button">
        Reveal answer
      </button>
    </section>
  );
}
