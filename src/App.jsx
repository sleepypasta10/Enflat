import { useEffect, useState } from 'react';
import Header from './components/Header';
import SelectFont from './components/SelectFont';
import SwitchTheme from './components/SwitchTheme';
import SearchBar from './components/SearchBar';
import Definitions from './components/Definitions';
import axios from 'axios';

function App() {

  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("")
  const [emptyInput, setEmptyInput] = useState(true)

  // console.log(result);

  const handleInputChange = (e) => {
    if(e.target.value === "") {
      setResult(null)
      setError(null)
      setWord("")
    } else {
      setWord(e.target.value)
    }
  };
  const submitWord = (e) => {
    e.preventDefault();
    if (word === '') {
      setEmptyInput(false)
      // setResult(null)
    } else {
      setEmptyInput(true)
    }
  }

  const fetchWord = async () => {
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(result => {
        setResult(result.data);
        setError(null);
      })
      .catch(err => {
        setResult(null)
        setError(err.response.data.message);
      })
  }

    useEffect(() => {
      fetchWord();
    }, [word])

  return (
    <div className='mx-5 lg:px-2 lg:max-w-[736px] grid lg:mx-auto lg:pt-2 dark:bg-[#050505]'>
      <Header>
        <SelectFont />
        <div className='w-[1px] h-8 bg-[#E9E9E9] mx-0 my-1'></div>
        <SwitchTheme />
      </Header>
      <SearchBar
        onChange={handleInputChange}
        value={word}
        searchWord = {fetchWord}
        submitWord={submitWord}
      />
      {emptyInput ?
        <div>
          <Definitions 
          data={result}
          setWord={setWord}
          error={error}/>
        </div>
        :
        <div className='text-lg text-[#FF5252] ml-1 mt-3 focus:outline-[#FF5252]'>Whoops, can’t be empty…</div>}
    </div>
  )
}

export default App
