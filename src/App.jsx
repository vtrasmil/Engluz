import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import words from "./assets/words";
import shuffleWord from "./utils/shuffleword";

function App() {
  const [word, setWord] = useState({});
  const [currectWord, setCurrectWord] = useState("");
  const [wrong, setWrong] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const refreshWord = () => {
    setEmpty(false);
    setWrong(false);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const scrambledWord = shuffleWord(randomWord.word);
    setCurrectWord(randomWord.word);
    setWord({ ...randomWord, word: scrambledWord });
    setTimeLeft(30);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        refreshWord();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  useEffect(() => {
    refreshWord();
  }, []);
  const checkWord = () => {
    if (!enteredWord) return setEmpty(true);
    setEmpty(false);
    if (enteredWord === currectWord) {
      toast.success("You solved the word!",
      {
      position: "top-center", autoClose: 3000, hideProgressBar: false,closeOnClick: true,
      pauseOnHover: false, draggable: true,progress: undefined,
      });
      setWrong(false);
      setEnteredWord("");
      refreshWord();
    } else {
      setWrong(true);
    }
  };
  return (
    <div className="container">
      <h2>Word Scramble</h2>
      <div className="content">
        <p className="word">{word?.word}</p>
        <div className="details">
          <p className="hint">Hint : <span>{word?.hint}</span></p>
          <p className="time">Time Left : <span><span>{timeLeft}</span> s</span></p>
        </div>
        <input type="text" spellCheck={false} placeholder="Enter a valid word" value={enteredWord} onChange={(e) => { setEnteredWord(e.target.value) }} />
        {
          empty ? (<span style={{color:"red", fontSize:"12px", paddingLeft:"8px"}}>Please enter the word to check!</span>) : ("") 
        }
        {
          wrong ? (<span style={{ color: "yellow", fontSize: "12px", paddingLeft: "8px" }}>Oops! {enteredWord} is not a correct word</span>) : ("") 
        }
        <div className="buttons">
          <button className="refresh-word" onClick={() => { refreshWord(); }}>Refresh Word</button>
          <button className="check-word" onClick={() => { checkWord(); }}>Check Word</button>
        </div>
      </div>
    </div>
  )
}

export default App
