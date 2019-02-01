class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Thing One", "Thing two", "Thing three"]
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    // alert('handlePick');
    const randomNum=Math.floor(Math.random()*this.state.options.length);
    const option=this.state.options[randomNum];
    alert(option);
  }
  render() {
    const title = "IndescionApp";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <h1>Title</h1>
        <Header title={title} subtitle={subtitle} />
        {/* had option based on options array is empty or contain data */}
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
        what should i do?
      </button>
    );
  }
}

class Options extends React.Component {
  // constructor(props){
  //     super(props);

  //         //method binding
  //         // if you not bind then causes error in handleRemoveAll() function
  //         // bind can be used inline or in constructor

  // //        this.handleRemoveAll=this.handleRemoveAll.bind(this);

  // }

  // handleRemoveAll(){
  //     //alert('handleremoveAll');
  //     console.log(this.props.options);
  // }
  render() {
    return (
      <div>
        {/* this.handleremoveAll.bind(this); */}
        <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert("addoption");
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <Option />
        <input type="text" name="option" />
        <button>ADD</button>
      </form>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>{this.props.optionText}</li>
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// const jsx=(
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );
// ReactDOM.render(jsx,document.getElementById('app'));

/* error in my code 

     always forget this while calling the event for eg{ this.handleevent }
    
     forget the s in elements 
     e.target.element.option.value
    */

//method binding
//this.props.options.bind({name:che});

// const obj={
//     name:'chetan',
//     getname(){
//         return this.name;
//     }
// }
// console.log(obj.getname());
// //const myName= obj.getname; // this causes error cannot read the proprerty of undefined
// //console.log(myName());

// //soln to the problem is bind the method
// const myName= obj.getname.bind(obj);
// //or
// const myName1= obj.getname.bind({name:'mahajan'});

// console.log(myName());
// console.log(myName1());
