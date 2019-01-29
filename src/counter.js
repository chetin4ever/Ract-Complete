
let count=0;
const someId="idhere";
const addOne=()=>{
    console.log('addOne');
    count++;
    renderCounterApp();
};
const minusOne=()=>{
    console.log('minusOne');
    count--;
    renderCounterApp();
};
const reset=()=>{
    console.log('reset');
    count=0;
    renderCounterApp();
};
const approot= document.getElementById('app');
const renderCounterApp=()=>{
    const templateFour =(
        <div>
            <h1>count:{count}</h1>
            <button id={someId} onClick={addOne}>+1</button>
            <button id={someId} onClick={minusOne}>-1</button>
            <button id={someId} onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateFour,approot);
};


renderCounterApp();


