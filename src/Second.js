import React,{useContext} from 'react'
import {context,reducer} from './App'

// lets fetch the value we have passed in context provider here in second.js
export default function Second()
{
	const value = useContext(context)
	console.log(value)

 return(
<div>

Hello from Second  {value.state.name}
<br/>
{/*again lets return the state according to type value*/}
<button onClick={()=>value.dispatch({type:'CHAPRI',payload:"King_Harsh"})}> CHAPRI style</button>
<button onClick={()=>value.dispatch({type:'PLAYBOY',payload:"Diljala_Harsh"})}> PLAYBOY style</button>
<button onClick={()=>value.dispatch({type:'FAKE',payload:"Angel priya"})}> FAKE style</button>

</div>
 	)
}