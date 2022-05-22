import React,{createContext} from 'react';
import './App.css';
import Second from './Second'
import Third from './Third'

// lets create a context first
export const context = createContext();
const reducer=(state,action)=>{

  return {...state,name:action.payload}
}

// initialvalue argument is optional
// now we need to wrap our app component in context.Provider and pass default value to it

// lets pass the dispatch function in default value of context provider so it can be accessible in all components so that they can dispatch and update the state
function App() {
const [state,dispatch] = React.useReducer(reducer,{})
  return (
    <context.Provider value={{state,dispatch}}>
    <div className="App">
      <h1>Hello from app</h1>
      <Second/>
      <Third/>
    </div>
    </context.Provider>
  );
}

export default App;
