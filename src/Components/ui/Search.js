import React ,{useState} from 'react'


const Search = ({ getQuery}) => {
const[text , settext] = useState('')

const onchange= (q) => {
    settext(q)
    getQuery(q)
}


  return (
    <section className='search'>
      <form>
      <input type='text' className='form_control' 
       placeholder='Search Characters' 
       value={text}
       onChange={(e) => onchange(e.target.value)}
       autoFocus/>

      </form>
    </section>
  )
}

export default Search
