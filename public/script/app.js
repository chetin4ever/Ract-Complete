"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: ["Thing One", "Thing two", "Thing three"]
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      // alert('handlePick');
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "render",
    value: function render() {
      var title = "IndescionApp";
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Title"
        ),
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "p",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.props.handlePick, disabled: !this.props.hasOptions },
        "what should i do?"
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",

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
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.handleDeleteOptions },
          "RemoveAll"
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        alert("addoption");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleAddOption },
        React.createElement(Option, null),
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "ADD"
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Option = function (_React$Component6) {
  _inherits(Option, _React$Component6);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ol",
          null,
          React.createElement(
            "li",
            null,
            this.props.optionText
          )
        )
      );
    }
  }]);

  return Option;
}(React.Component);

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
