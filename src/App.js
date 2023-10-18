import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/ui/Header';
import CharacterGrid from './Components/Characters/CharacterGrid';
import Search from './Components/ui/Search';



function App(){
const[items, setItems] = useState([])
const[query, setQuery] = useState('')


useEffect(() => {
   const fetchItems = async() => {
   const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

   setItems(result.data)
   setISloading(false)
  }
 fetchItems()
},[query])


  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid ISLoading={ISLoading} items={items}/>
    </div>
  );
}

export default App;
