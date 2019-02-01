'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visiability = function (_React$Component) {
    _inherits(Visiability, _React$Component);

    function Visiability(props) {
        _classCallCheck(this, Visiability);

        var _this = _possibleConstructorReturn(this, (Visiability.__proto__ || Object.getPrototypeOf(Visiability)).call(this, props));

        _this.onToggle = _this.onToggle.bind(_this);
        _this.state = {
            visiablity: false,
            para: _this.props.para
        };
        return _this;
    }

    _createClass(Visiability, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visiabilty Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.onToggle },
                    this.state.visiablity ? 'Hide details' : 'Show Detail'
                ),
                this.state.visiablity && React.createElement(
                    'p',
                    null,
                    ' this is the contents'
                ),
                this.state.visiablity && React.createElement(
                    'p',
                    null,
                    ' ',
                    this.state.para
                )
            );
        }
    }, {
        key: 'onToggle',
        value: function onToggle() {
            //alert('toggle');
            this.setState(function (prevState) {
                return {
                    visiablity: !prevState.visiablity
                };
            });
        }
    }]);

    return Visiability;
}(React.Component);

ReactDOM.render(React.createElement(Visiability, { para: 'this is the contenttt' }), document.getElementById('app'));

// //my solution
// // let visabilty=true;
// // let bName='show';
// // let content;
// // const onTog=(e)=>{
// //     if(visabilty){
// //         bName="Hide";
// //         visabilty=false;
// //         content='here is the content';
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
// //             <h1>visabilty Toogle</h1>
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
