import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption:undefined
    };  
    componentDidMount=()=> {
      try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if (options) this.setState(() => ({ options }));
  
        //console.log('comoponent did mounted !');
      } catch (e) {
        //do noting
      }
    }
    componentDidUpdate=(prevProps, prevState)=> {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saving data");
      }
    }
   
    componentWillUnmount=()=> {
      console.log("component will unmounted !");
      //try to unmount the component unsing the follwing line
      //ReactDOM.render(React.createElement('p'),document.getElementById('app'));
    }
  
    // for deleting all items from the list
    handleDeleteOptions=()=> {
      this.setState(() => ({ options: [] }));
    }
    handleSelectedOption=()=>{
      this.setState(()=>({selectedOption:undefined}))
    }
    //for deleting specific item from list
    handleDeleteOption=(optionToRemove)=>{
      console.log("hdo", optionToRemove);
      this.setState(prevState => ({
        options: prevState.options.filter(option => {
          return optionToRemove !== option;
        })
      }));
    }
    // picking random task to done
    handlePick=()=>{
      // alert('handlePick');
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      //alert(option);
      this.setState(()=>({
        selectedOption:option 
      }));

    }
    //add task to the list
    handleAddOption=(option)=> {
      if (!option) {
        //if no value is enter
        return "Enter Valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "this option already exists!";
      }
  
      this.setState(prevState => ({
        options: prevState.options.concat(option)
      }));
    }
    render() {
      const subtitle = "Put your life in the hands of a computer";
  
      return (
        <div>
         <div className="container">
         <Header subtitle={subtitle} />
          {/* had option based on options array is empty or contain data */}
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
         </div>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption} 
          />
        </div>
      );
    }
  }
