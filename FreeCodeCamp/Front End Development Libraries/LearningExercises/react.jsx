// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     }
//     this.toggleDisplay = this.toggleDisplay.bind(this);
//   }
//   toggleDisplay() {
//     this.setState((state) => ({
//       display: !state.display
//     }));
//   }
//   render() {
//     // Change code below this line
    
//     return (
//        <div>
//          <button onClick={this.toggleDisplay}>Toggle Display</button>
//          {this.state.display
//           ? <h1>Displayed!</h1>
//           : null
//           }
//        </div>
//     )
  
//   }
// };

// const inputStyle = {
//   width: 235,
//   margin: 5
// };

// class CheckUserAge extends React.Component {
//   constructor(props) {
//     super(props);
//     // Change code below this line
//     this.state = {
//       input: '',
//       userAge: ''
//     }
//     // Change code above this line
//     this.submit = this.submit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       input: e.target.value,
//       userAge: ''
//     });
//   }
//   submit() {
//     this.setState(state => ({
//       userAge: state.input
//     }));
//   }
//   render() {
//     const buttonOne = <button onClick={this.submit}>Submit</button>;
//     const buttonTwo = <button>You May Enter</button>;
//     const buttonThree = <button>You Shall Not Pass</button>;
//     return (
//       <div>
//         <h3>Enter Your Age to Continue</h3>
//         <input
//           style={inputStyle}
//           type='number'
//           value={this.state.input}
//           onChange={this.handleChange}
//         />
//         <br />
//         {/* Change code below this line */}
//         {
//           this.state.userAge === ''
//             ? buttonOne
//             : this.state.userAge >= 18
//               ? buttonTwo
//               : buttonThree
//         }
//         {/* Change code above this line */}
//       </div>
//     );
//   }
// }

// class Results extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     {/* Change code below this line */}
//     return (<h1>
//     {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
//     </h1>)
//     {/* Change code above this line */}
//   }
// }

// class GameOfChance extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({
//       // Complete the return statement:
//       counter: this.state.counter+1
//     });
//   }
//   render() {
//     const expression = Math.random() >= 0.5 ? true : false
//     return (
//       <div>
//         <button onClick={this.handleClick}>Play Again</button>
//         {/* Change code below this line */}
//         <Results fiftyFifty={expression} />
//         {/* Change code above this line */}
//         <p>{'Turn: ' + this.state.counter}</p>
//       </div>
//     );
//   }
// }

// class GateKeeper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ input: event.target.value })
//   }
//   render() {
//     let inputStyle = {
//       border: '1px solid black'
//     };
//     // Change code below this line
//     (this.state.input.length > 15)
//       ? inputStyle.border = '3px solid red'
//       : null
//     // Change code above this line
//     return (
//       <div>
//         <h3>Don't Type Too Much:</h3>
//         <input
//           type="text"
//           style={inputStyle}
//           value={this.state.input}
//           onChange={this.handleChange} />
//       </div>
//     );
//   }
// };

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         {
//           username: 'Jeff',
//           online: true
//         },
//         {
//           username: 'Alan',
//           online: false
//         },
//         {
//           username: 'Mary',
//           online: true
//         },
//         {
//           username: 'Jim',
//           online: false
//         },
//         {
//           username: 'Sara',
//           online: true
//         },
//         {
//           username: 'Laura',
//           online: true
//         }
//       ]
//     };
//   }
//   render() {
//     const usersOnline = this.state.users.filter(u => u.online); // Change this line
//     const renderOnline = usersOnline.map(u => <li key={u.username}>{u.username}</li>); // Change this line
//     return (
//       <div>
//         <h1>Current Online Users:</h1>
//         <ul>{renderOnline}</ul>
//       </div>
//     );
//   }
// }

