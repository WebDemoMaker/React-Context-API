import React,{useContext} from 'react'
import {context,reducer} from './App'


export default function Third()
{
const value = useContext(context)
 return(
<div>Hello from Third {value.state.name} </div>
 	)
}