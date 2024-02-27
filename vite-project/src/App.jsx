import { Component } from "react";
import Home from "./component/Home";
 import Quiz from "./component/Quiz";
 import Result from "./component/Result";

export default class App extends Component{
  render(){
    return(
      <div>
        <Home/>
        <Quiz/> 
        <br />
        <Result/>
      </div>
    );
  };
}