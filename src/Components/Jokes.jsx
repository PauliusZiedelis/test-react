import { useEffect, useState } from "react";
import axios from "axios";
function Jokes() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10"
      )
      .then((respond) => {
        console.log(respond.data.jokes);
        setJokes(respond.data.jokes);
      });
  }, []);
  return (
    <ul className="jokes">
      {/* <h1>Category: {jokes[0].category}</h1> */}
      {jokes.map((joke, i) => (
        <li key={i}>
          {joke.type === "single" ? (
            <div className="joke">
              <p>{joke.joke}</p>
            </div>
          ) : (
            <div className="joke">
              <p>
                <b>Setup:</b> {joke.setup}
              </p>
              <p>
                {" "}
                <b>Delivery:</b> {joke.delivery}
              </p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Jokes;
