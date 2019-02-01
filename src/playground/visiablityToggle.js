class Visiability extends React.Component{
    constructor(props){
        super(props);
        this.onToggle=this.onToggle.bind(this);
        this.state={
            visiablity:false,
            para: this.props.para
        }
    }
    render(){
        return(
            <div>
                <h1>Visiabilty Toggle</h1>
                <button onClick={this.onToggle}>
                    {this.state.visiablity ? 'Hide details' : 'Show Detail'}
                </button>
                {this.state.visiablity && <p> this is the contents</p>}
                {this.state.visiablity && <p> {this.state.para}</p>}

            </div>
        );
    }
    onToggle(){
        //alert('toggle');
        this.setState((prevState)=>{
            return{
                visiablity: !prevState.visiablity  
            }
            
        });
    }
}

ReactDOM.render(<Visiability para="this is the contenttt"/> ,document.getElementById('app'));



// //my solution
// // let visabilty=true;
// // let bName='show';
// // let content;
// // const onTog=(e)=>{
// //     if(visabilty){
// //         bName="Hide";
// //         visabilty=false;
// //         content='here is the content';
// //             <h1>visabilty Toogle</h1>
// //         render();
// //     }else{
// //         bName="show";
// //         visabilty=true;
// //         content='';
// //         render();
// //     }

// // }

// // const render=()=>{
// //     const tempalete=(
// //         <div>
// //             <button onClick={onTog}>{bName}</button>
// //             <p>{content}</p>
// //         </div>
        
// //     );
// //     ReactDOM.render(tempalete,document.getElementById('app'));
    
// // }
// // render();

// let visabilty=false;
// const onTog=()=>{
//     visabilty=!visabilty;
//     render();
// };
// const render=()=>{
//         const tempalete=(
//             <div>
//                 <h1>visabilty Toogle</h1>
//                 <button onClick={onTog}>
//                     { visabilty ? 'HIDE' : 'SHOW'}
//                 </button>
//                 { visabilty && (<p>this is the content</p>)}
               
//             </div>
            
//         );
//         ReactDOM.render(tempalete,document.getElementById('app'));
        
//     }
//     render();
