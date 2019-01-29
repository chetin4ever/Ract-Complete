class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <h1>Title</h1>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <h1> this is from header</h1>
        );
    }
}

class Action extends React.Component{
    render(){
        return(
            <button>what should i do?</button>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <ol>
                <li>item 1</li>
                <li>item 2</li>
            </ol>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <form>
                <Option/>
                <input type="text"/>
                <button>ADD</button>
            </form>
        )
    }
}

class Option extends React.Component{
    render(){
        return( 
            <p> from option compo</p>
        );
    }
}


ReactDOM.render(<IndecisionApp/> , document.getElementById('app'));

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