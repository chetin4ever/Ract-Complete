//my solution
// let visabilty=true;
// let bName='show';
// let content;
// const onTog=(e)=>{
//     if(visabilty){
//         bName="Hide";
//         visabilty=false;
//         content='here is the content';
//         render();
//     }else{
//         bName="show";
//         visabilty=true;
//         content='';
//         render();
//     }

// }

// const render=()=>{
//     const tempalete=(
//         <div>
//             <h1>visabilty Toogle</h1>
//             <button onClick={onTog}>{bName}</button>
//             <p>{content}</p>
//         </div>
        
//     );
//     ReactDOM.render(tempalete,document.getElementById('app'));
    
// }
// render();

let visabilty=false;
const onTog=()=>{
    visabilty=!visabilty;
    render();
};
const render=()=>{
        const tempalete=(
            <div>
                <h1>visabilty Toogle</h1>
                <button onClick={onTog}>
                    { visabilty ? 'HIDE' : 'SHOW'}
                </button>
                { visabilty && (<p>this is the content</p>)}
               
            </div>
            
        );
        ReactDOM.render(tempalete,document.getElementById('app'));
        
    }
    render();
