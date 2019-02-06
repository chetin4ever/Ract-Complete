class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count:props.count
    };
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

  handleAddOne() {
    //console.log("handle one");
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
   // console.log("handle minus");
   this.setState((prevState)=>{
    return{
        count:prevState.count - 1
    }
   });
  }

  handleReset() {
    this.setState(()=>{
      return{
        count:0
      }
    })
  }
}
//must declare after class or function
Counter.defaultProps={
  count:0
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// /let count=0;
// const someId="idhere";
// const addOne=()=>{
//     console.log('addOne');
//     count++;
//     renderCounterApp();
// };
// const minusOne=()=>{
//     console.log('minusOne');
//     count--;
//     renderCounterApp();
// };
// const reset=()=>{
//     console.log('reset');
//     count=0;
//     renderCounterApp();
// };
// const approot= document.getElementById('app');
// const renderCounterApp=()=>{
//     const templateFour =(
//         <div>
//             <h1>count:{count}</h1>
//             <button id={someId} onClick={addOne}>+1</button>
//             <button id={someId} onClick={minusOne}>-1</button>
//             <button id={someId} onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateFour,approot);
// };

// renderCounterApp();
