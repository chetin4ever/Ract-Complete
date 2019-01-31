class IndecisionApp extends React.Component{
    
    render(){
        const title = 'IndescionApp';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing One','Thing two','Thing three']
        return(
            <div>
                <h1>Title</h1>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
                
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
            
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert('handlePick');
    }

    render(){
                return(
            <button onClick={this.handlePick}>what should i do?</button>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        alert('handleremoveAll');
    }
    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll}>RemoveAll</button>
                {
                     this.props.options.map((option)=><Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option =e.target.elements.option.value.trim();
        if(option){
            alert('addoption');
        }
    }
    render(){
        return(
            <form onSubmit={this.handleAddOption}>
                <Option/>
                <input type="text" name="option"/>
                <button>ADD</button>
            </form>
        )
    }
}

class Option extends React.Component{
    render(){
        return( 
            <div>
                <ol>
                    <li>{this.props.optionText}</li>
                </ol>
            </div>
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




/*
    error in my code 

    always forget this while calling the event for eg{ this.handleevent }
    
    forget the s in elements 
    e.target.element.option.value

*/