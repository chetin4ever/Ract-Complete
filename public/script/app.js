'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));
    // console.log(props.options);

    _this.state = {
      options: props.options
    };
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);

    return _this;
  }
  // for deleting all items from the list


  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      // this.setState(() => {
      //   return {
      //     options:[]
      //   };
      // });
      this.setState(function () {
        return { options: [] };
      });
    }
    //for deleting specific item from list

  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      console.log('hdo', optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
    // picking random task to done 

  }, {
    key: 'handlePick',
    value: function handlePick() {
      // alert('handlePick');
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
    //add task to the list

  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      console.log(option);
      if (!option) {
        //if no value is enter
        return 'Enter Valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'this option already exists!';
      }
      // this.setState((prevState)=>{
      //     return{
      //      // options: prevState.options.concat([option])//or
      //       options: prevState.options.concat(option)
      //     };
      // }); 

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Title'
        ),
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'
  // class Header extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <p>{this.props.subtitle}</p>
  //       </div>
  //     );
  //   }
  // }

};var Action = function Action(props) {
  return React.createElement(
    'button',
    { onClick: props.handlePick, disabled: !props.hasOptions },
    'what should i do?'
  );
};
// class Action extends React.Component {
//   render() {
//     return (
//       <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//         what should i do?
//       </button>
//     );
//   }
// }

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'RemoveAll'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'remove'
    )
  );
};
// class Options extends React.Component {
//   // constructor(props){
//   //     super(props);

//   //         //method binding
//   //         // if you not bind then causes error in handleRemoveAll() function
//   //         // bind can be used inline or in constructor

//   // //        this.handleRemoveAll=this.handleRemoveAll.bind(this);

//   // }

//   // handleRemoveAll(){
//   //     //alert('handleremoveAll');
//   //     console.log(this.props.options);
//   // }
//   render() {
//     return (
//       <div>
//         {/* this.handleremoveAll.bind(this); */}
//         <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//         {this.props.options.map(option => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      // this.setState(()=>{
      //     return{
      //       //error:error
      //       error
      //     }
      // });
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement(Option, null),
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'ADD'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <ol>
//           <li>{this.props.optionText}</li>
//         </ol>
//       </div>
//     );
//   }
// }
// passing default value
//ReactDOM.render(<IndecisionApp options = {['one','tow ','three']}/>, document.getElementById("app"));


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));

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
