import React from 'react';
import './Palindrome.css'

const Palindrome = (props) => {
  let words;
  return (
    <div className='palin'>
      <input type="text"
      placeholder='Type a word'
      onChange={(e)=>{
        words=e.target.value;
      }}></input>
      <button type="submit" onClick={(e)=>props.change(words)}>let's check</button>
    </div>
  );
};

export default Palindrome;