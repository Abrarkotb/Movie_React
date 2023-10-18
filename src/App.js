import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/Header';
import CharacterGrid from './Components/Characters/CharacterGrid';



function App(){
const[items, setItems] = useState([])
const[ISLoading, setISloading] = useState([true])


useEffect(() => {
   const fetchItems = async() => {
   const result = await axios(`https://serpapi.com/search.json?engine=google_play_movies`)
   console.log(result.data)
   setItems(result.data)
   setISloading(false)
  }
 fetchItems()
},[])
  return (
    <div className="container">
      <Header/>
      <CharacterGrid ISLoading={ISLoading} items={items}/>
    </div>
  );
}

export default App;
