import React,{useState} from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import {useDispatch} from 'react-redux'

export default function AddData(props){
    const [code,setcode]=useState()
    const [name,setname]=useState()
    var dispatch=useDispatch()
    const handleAddData=()=>
    {
     dispatch({type:'ADD_DATA',payload:[code,{code:code,name:name}]})


    }
    
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',marginTop:100,width:400}}>
        <Grid container spacing={1}>

        <Grid item xs={12}>
        <TextField label="city code" onChange={(event)=>setcode(event.target.value)}/>
        </Grid>

        <Grid item xs={12}>
        <TextField label="city name" onChange={(event)=>setname(event.target.value)}/>
        </Grid>

        

        <Grid item xs={6}>
        <Button variant='contained' color='primary' onClick={()=>handleAddData()}> ADD DATA</Button>
        </Grid>

        <Grid item xs={6}>
        <Button variant='contained' color='primary' onClick={()=>props.history.push({'pathname':'/displaydata'})}> Display DATA</Button>
        </Grid>
        
        </Grid>
        </div>

        </div>

    )
}