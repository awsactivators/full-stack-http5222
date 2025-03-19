import {useState,useEffect} from "react";

export default function UselessFact() {
  //You can create one state variable and just save a single JSON object in it, but to show you that you can have multiple state variables per component, I'm using two
  const [randomFact, setRandomFact] = useState("");
  const [factSource, setFactSource] = useState("");

  //https://uselessfacts.jsph.pl/api/v2/facts/random
  //The useEffect hook function allows you to execute a script upon component load
  //You define a callback function and a dependency list as parameters
  //An empty array as your dependency list will tell React to run your effect ONCE
  useEffect(() => {
    const getFact = async () => {
      //make the API request and save the results to the state variables
      let response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random",
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      let data = await response.json();
      //console.log(data);
      setRandomFact(data.text);
      setFactSource(data.source);
    };
    getFact();
  }, []);

  /*
    let fact;
    if (factSource) {
      fact = `${randomFact} (${factSource})`;
    } else {
      fact = ""; 
    }
  */
  //The line below is equivalent to the if/else above (using the ternary operator syntax)
  let fact = (factSource) ? `${randomFact} (${factSource})` : "Loading fact...";
  return(
    <section>
      <h2>Your random useless fact</h2>
      <div>{fact}</div>
    </section>
  )
}