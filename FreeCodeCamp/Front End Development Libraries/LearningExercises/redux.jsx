// const defaultState = {
//   login: false
// };

// const reducer = (state = defaultState, action) => {
//   // Change code below this line
//   if (action.type === "LOGIN")
//     return {login: true}
//   else return state
//   // Change code above this line
// };

// const store = Redux.createStore(reducer);

// const loginAction = () => {
//   return {
//     type: 'LOGIN'
//   }
// };

// const defaultState = {
//   authenticated: false
// };

// const authReducer = (state = defaultState, action) => {
//   // Change code below this line
//   switch(action.type) {
//     case 'LOGIN': return {authenticated: true}
//     case 'LOGOUT': return {authenticated: false}
//     default: return defaultState
//   }
//   // Change code above this line
// };

// const store = Redux.createStore(authReducer);

// const loginUser = () => {
//   return {
//     type: 'LOGIN'
//   }
// };

// const logoutUser = () => {
//   return {
//     type: 'LOGOUT'
//   }
// };

// const LOGIN = 'LOGIN'
// const LOGOUT = 'LOGOUT'

// const defaultState = {
//   authenticated: false
// };

// const authReducer = (state = defaultState, action) => {

//   switch (action.type) {
//     case LOGIN: 
//       return {
//         authenticated: true
//       }
//     case LOGOUT: 
//       return {
//         authenticated: false
//       }

//     default:
//       return state;

//   }

// };

// const store = Redux.createStore(authReducer);

// const loginUser = () => {
//   return {
//     type: LOGIN
//   }
// };

// const logoutUser = () => {
//   return {
//     type: LOGOUT
//   }
// };

// const ADD = 'ADD';

// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case ADD:
//       return state + 1;
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// // Global count variable:
// let count = 0;

// // Change code below this line
// const add = () => count++
// store.subscribe(add)
// // Change code above this line

// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);

// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// const counterReducer = (state = 0, action) => {
//   switch(action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';

// const authReducer = (state = {authenticated: false}, action) => {
//   switch(action.type) {
//     case LOGIN:
//       return {
//         authenticated: true
//       }
//     case LOGOUT:
//       return {
//         authenticated: false
//       }
//     default:
//       return state;
//   }
// };

// const rootReducer = Redux.combineReducers({
//   count: counterReducer,
//   auth: authReducer
// })

// const store = Redux.createStore(rootReducer);

// const ADD_NOTE = 'ADD_NOTE';

// const notesReducer = (state = 'Initial State', action) => {
//   switch(action.type) {
//     // Change code below this line
//     case ADD_NOTE: return action.text
//     // Change code above this line
//     default:
//       return state;
//   }
// };

// const addNoteText = (note) => {
//   // Change code below this line
//   return {
//     type: ADD_NOTE,
//     text: note
//   }
//   // Change code above this line
// };

// const store = Redux.createStore(notesReducer);

// console.log(store.getState());
// store.dispatch(addNoteText('Hello!'));
// console.log(store.getState());

// const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
// const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

// const counterReducer = (state = 0, action) => {
//     return action.type === INCREMENT
//     ? state+1
//     : action.type === DECREMENT 
//       ? state-1
//       : state
// }; // Define the counter reducer which will increment or decrement the state based on the action it receives

// const incAction = () => {return {type: INCREMENT}}; // Define an action creator for incrementing

// const decAction = () => {return {type: DECREMENT}}; // Define an action creator for decrementing

// const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

// const ADD_TO_DO = 'ADD_TO_DO';

// // A list of strings representing tasks to do:
// const todos = [
//   'Go to the store',
//   'Clean the house',
//   'Cook dinner',
//   'Learn to code',
// ];

// const immutableReducer = (state = todos, action) => {
//   switch(action.type) {
//     case ADD_TO_DO:
//       return [...state, action.todo]
//       // Don't mutate state here or the tests will fail
//       return
//     default:
//       return state;
//   }
// };

// const addToDo = (todo) => {
//   return {
//     type: ADD_TO_DO,
//     todo
//   }
// }

// const store = Redux.createStore(immutableReducer);

// const immutableReducer = (state = [0,1,2,3,4,5], action) => {
//   switch(action.type) {
//     case 'REMOVE_ITEM':
//       // Don't mutate state here or the tests will fail
//       return [
//         ...state.slice(0, action.index),
//         ...state.slice(action.index+1, state.length)
//       ]
//     default:
//       return state;
//   }
// };

// const removeItem = (index) => {
//   return {
//     type: 'REMOVE_ITEM',
//     index
//   }
// }

// const store = Redux.createStore(immutableReducer);

// const defaultState = {
//   user: 'CamperBot',
//   status: 'offline',
//   friends: '732,982',
//   community: 'freeCodeCamp'
// };

// const immutableReducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case 'ONLINE':
//       // Don't mutate state here or the tests will fail
//       return Object.assign({}, state, {status: 'online'})
//     default:
//       return state;
//   }
// };

// const wakeUp = () => {
//   return {
//     type: 'ONLINE'
//   }
// };

// const store = Redux.createStore(immutableReducer);

