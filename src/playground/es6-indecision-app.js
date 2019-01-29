console.log("app.js is running");
// JSX - JavaScript XML
const app={
    titile:'INDECSION APP',
    subtitile:'this is some text',
    options:[]
}

const onFormSubmit=(e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
    }
    renderApp();
};
const onRemoveAll=(e)=>{
    app.options=[];
    renderApp();
};

const onMakeDecsion =(e)=>{
    const randomOption = Math.floor(Math.random()*app.options.length);
    const option=app.options[randomOption];
    console.log(option);    
}



const approot = document.getElementById('app');

const renderApp=()=>{
    const template = (
        <div>
            <h1>{app.titile}</h1>
            <p>{app.subtitile}</p>
            <p>{app.options.length}</p>
            {app.subtitile && <p>{app.subtitile}</p> }
            {app.options.length>0 ?'here is the option' : 'no option'}
            <button onClick={onMakeDecsion}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove ALL</button>
            <ol>
                {
                    app.options.map((option)=>{
                     return <li key={option}>{option}</li>
                     }) 
                } 
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
                
            </form>
        </div>
    );
    ReactDOM.render(template,approot);
};
renderApp();























const user={
    name:'chetan',
    age:17,
    location:'india'
}
function getlocation(location){
    if(location)
        return location;
    else
        return 'unknown';
}

function getlocation1(location){
    if(location)
        return <p>location:{location}</p>;
    else
        return 'unknown';
}


const templateTwo =(
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{getlocation(user.location)}</p>
    </div>
);
const templateThree =(
    <div>
        <h1>{user.name ? user.name : 'Anonyemous'}</h1>
        {(user.age && user.age>=18) && <p>{user.age}</p>}
        {getlocation1(user.location)}
    </div>
);
