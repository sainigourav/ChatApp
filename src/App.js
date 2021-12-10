import React from 'react';
import LeftContainer from './Components/LeftContainer';
import RightContainer from './Components/RightContainer';
import "./style.css";

var User=["John Doe","Alexender","Sergeo Martin","Brownie"];

class App extends React.Component {


  state = {
    value:"",
    user:"John Doe",
    AllMsg:[]
  }

  onKeyDownHandler = (event) =>{
    if(event.keyCode === 13 && this.state.value!==""){
      const x = this.state.AllMsg;
      var value = this.state.value;
      var user = this.state.user;
      var temp = {
        user:user,
        msg:value
      }
      x.push(temp);
      this.setState({AllMsg:x,value:""});
    }
  }

  OnInputChange=(event)=>{
    var value = event.target.value;
    this.setState({value:value});
  }
  click = () => {
    if(this.state.value!=="")
    {
      const x = this.state.AllMsg;
      var value = this.state.value;
      var user = this.state.user;
      var temp = {
        user:user,
        msg:value
      }
      x.push(temp);
      this.setState({AllMsg:x,value:""});
  }
  }
  DivClick = (event) =>{
    const x = this.state.AllMsg;
    var value = event.target.innerText;
    this.setState({user:value,AllMsg:x});
  }
  render(){
    var AllMsg = this.state.AllMsg;
    var ActiveUser = this.state.user;
    return (
    <div id="container">
      <LeftContainer ActiveUser={ActiveUser} User={User} DivClick={this.DivClick}/>
      <RightContainer AllMsg={AllMsg} ActiveUser={ActiveUser} onKeyDown={this.onKeyDownHandler} click={this.click} value={this.state.value} onChange={this.OnInputChange} />
    </div>
  )
}
}

export default App;
