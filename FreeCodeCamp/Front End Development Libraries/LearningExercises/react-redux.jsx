// // Assignment 1
// class DisplayMessages extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }

//     this.handleChange = this.handleChange.bind(this)
//     this.submitMessage = this.submitMessage.bind(this)
//   }

  
//   // Add handleChange() and submitMessage() methods here
//   handleChange(e) {
//     this.setState({
//       input: e.target.value,
//       messages: this.state.messages
//     })
//   }
//   submitMessage() {
//     this.setState({
//       input: '',
//       messages: [...this.state.messages, this.state.input]
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         { /* Render an input, button, and ul below this line */ }
//         <input type="text" onChange={this.handleChange} value={this.state.input} />
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>
//           {this.state.messages.map((m, k) => {
//             return <li key={k}>{m}</li>
//           })}
//         </ul>
//         { /* Change code above this line */ }
//       </div>
//     );
//   }
// };

// // Assignment 2
// const ADD = 'ADD'
// const addMessage = message => ({type: ADD, message})

// const messageReducer = (pState = [], action) => {
//   return action.type === ADD
//     ? [...pState, action.message]
//     : pState
// }

// const store = Redux.createStore(messageReducer)

// // Assignment 6
// const addMessage = (message) => {
//   return {
//     type: 'ADD',
//     message: message
//   }
// };

// // Change code below this line
// const mapDispatchToProps = dispatch => ({submitNewMessage: message => dispatch(addMessage(message))})

// // Assignment 8
// // Redux:
// const ADD = 'ADD';

// const addMessage = (message) => {
//   return {
//     type: ADD,
//     message: message
//   }
// };

// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [
//         ...state,
//         action.message
//       ];
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(messageReducer);

// // React:
// class Presentational extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   submitMessage() {
//     this.setState((state) => {
//       const currentMessage = state.input;
//       return {
//         input: '',
//         messages: state.messages.concat(currentMessage)
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input
//           value={this.state.input}
//           onChange={this.handleChange}/><br/>
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>
//           {this.state.messages.map( (message, idx) => {
//               return (
//                  <li key={idx}>{message}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// };

// // React-Redux:
// const mapStateToProps = (state) => {
//   return { messages: state }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitNewMessage: (newMessage) => {
//        dispatch(addMessage(newMessage))
//     }
//   }
// };

// const Provider = ReactRedux.Provider;
// const connect = ReactRedux.connect;

// // Define the Container component here:
// const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

// class AppWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // Complete the return statement:
//     return (
//       <Provider store={store}>
//         <Container/>
//       </Provider>
//     );
//   }
// };

// // Assignment 9
// // Redux:
// const ADD = 'ADD';

// const addMessage = (message) => {
//   return {
//     type: ADD,
//     message: message
//   }
// };

// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [
//         ...state,
//         action.message
//       ];
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(messageReducer);

// // React:
// const Provider = ReactRedux.Provider;
// const connect = ReactRedux.connect;

// // Change code below this line
// class Presentational extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   submitMessage() {
//     this.props.submitNewMessage(this.state.input)
//     this.setState((state) => ({
//       input: ''
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input
//           value={this.state.input}
//           onChange={this.handleChange}/><br/>
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>
//           {this.props.messages.map( (message, idx) => {
//               return (
//                  <li key={idx}>{message}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// };
// // Change code above this line

// const mapStateToProps = (state) => {
//   return {messages: state}
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitNewMessage: (message) => {
//       dispatch(addMessage(message))
//     }
//   }
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Container/>
//       </Provider>
//     );
//   }
// };

