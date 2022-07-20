import React from 'react'
import {useSelector} from 'react-redux'

export default function DisplayData(props){
var data=useSelector(state=>state.data)
console.log(data)
return(
    <div><h1>Data</h1></div>
)
}