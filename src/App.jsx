import "./App.css";
import React, {Component} from "react";
import Palindrome from "./Palindrome";

class App extends Component {
state={
  isPalindrome:undefined,
  search:""
}
    palindromeHandler=(str)=> {
        let strlength = str.length;
        if (strlength === 0 || strlength === 1) {
          return true;
        }
      
        if(str[0] === str[strlength - 1]) {
          return this.palindromeHandler(str.slice(1, strlength - 1));
        }
        return false;
      }
    onChange = (text)=>{
      const word= this.palindromeHandler(text);
      this.setState({
        isPalindrome:word,
        search:text
      })
    }

    getText = (text,isPalindrome)=>{
      if(isPalindrome===undefined){return ""}
      else if(isPalindrome){
        return `${text} is a palindrome`;
      }else
      return`${text} is not a palindrome`;
    }
      render(){
        const text =this.getText(this.state.search,this.state.isPalindrome)
    return (
      
        <div className='container'>
            <div className='content'>
              <h1> Palindrome App</h1>
              <Palindrome change={this.onChange}/>
              {text && <h4>{text}</h4>}
            </div>
    </div>
    );
      }
};

export default App;
