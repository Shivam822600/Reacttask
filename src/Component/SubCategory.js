import React,{ useState,useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import swalhtml from "@sweetalert/with-react"
import swal from "sweetalert"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {ServerURL,postDataAndImage, getData} from"./FetchNodeServices"
import { isBlank } from "./checks"
import renderHTML from "react-render-html"

const useStyles=makeStyles((theme)=> ({
root:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    
    },
    subdiv:{
       padding:20,
       width:750,
       marginTop:20,
       background:'#fff'
       },
     input: {
    display: 'none',
  },
formControl: {
    minWidth: 690,
  },
       }));
       export default function SubCategory(Props)
      { const classes=useStyles();
         
        
        const [categoryid,setCategoryid]=useState('')
        const [subcategoryName,setSubCategoryName]=useState('')
        const [categoryDescription,setCategoryDescription]=useState('')
        const [categoryPrice,setCategoryPrice]=useState('')
        const [categoryStock,setCategoryStock]=useState('')
        const [categoryRented,setCategoryRented]=useState('')
        const [categoryRentamt,setCategoryRentamt]=useState('')
        const [discount,setdiscount]=useState('')
        const [icon,setIcon]=useState({bytes:'',file:'/icon.jpg'})
        const [ad,setAd]=useState({bytes:'',file:'/icon.jpg'})
        const [adstatus,setAdstatus]=useState('')
        
        const [ListCategory,setListCategory]=useState([])
       
        const fetchAllCategory=async ()=> {
          var result = await getData("categories/displayall")
          setListCategory(result)
        }
        useEffect(function(){
          fetchAllCategory()
        },[])

        const showCategory=()=>{
          return ListCategory.map((items)=>{
            return (
               <MenuItem value={items.categoryid}>{items.categoryname}</MenuItem> 
                )
          })
        }
        
        const handleClick=async()=>{
          var error=false
          var msg="<div>"
          if(isBlank(categoryid))
          {error=true
          msg+="<font color='#b2bec3'><b>Category Should not be blank...</b></font><br>";
          }
          if(isBlank(subcategoryName))
          {error=true
          msg+="<font color='#b2bec3'><b>Category Should not be blank...</b></font><br>";
          }
          if(isBlank(categoryDescription))
          {error=true
            msg+="<font color='#b2bec3'><b>Description Should not be blank...</b></font><br>";
          }
          if(isBlank(categoryPrice))
          {error=true
            msg+="<font color='#b2bec3'><b>Price Should not be blank...</b></font><br>";
          }
          if(isBlank(categoryStock))
          {error=true
            msg+="<font color='#b2bec3'><b>Stock Should not be blank...</b></font><br>";
          }
          if(isBlank(categoryRented))
          {error=true
            msg+="<font color='#b2bec3'><b>Rented Should not be blank...</b></font><br>";
          }
          if(isBlank(categoryRentamt))
          {error=true
            msg+="<font color='#b2bec3'><b>Rentamt Should not be blank...</b></font><br>";
          }
          if(isBlank(discount))
          {error=true
            msg+="<font color='#b2bec3'><b>Rentamt Should not be blank...</b></font><br>";
          }
          if(isBlank(ad.bytes))
          {error=true
            msg+="<font color='#b2bec3'><b>Pls select picture for advertisement...</b></font><br>";
          }
          if(isBlank(icon.bytes))
          {error=true
            msg+="<font color='#b2bec3'><b>Pls select Category Icon</b></font><br>";
          }

          if(isBlank(adstatus))
          {error=true
            msg+="<font color='#b2bec3'><b>Pls Choose the Status...</b></font><br>";
          }
          msg+="</div>"
          if(error)
          {
           swalhtml(renderHTML(msg))
          }
          else
          {

          

         var formData=new FormData()
         formData.append("categoryid",categoryid)
         formData.append("subcategoryname",subcategoryName)
         formData.append("description",categoryDescription)
         formData.append("price",categoryPrice)
         formData.append("stock",categoryStock)
         formData.append("rented",categoryRented)
         formData.append("rentamt",categoryRentamt)
         formData.append("discount",discount)
         formData.append("ad",ad.bytes)
         formData.append("icon",icon.bytes)
         formData.append("adstatus",adstatus)
         var config={headers:{"content-type":"multipart/form-data"}}
         var result=await postDataAndImage('subcategories/addsubcategory',formData,config)
         if(result)
         {
          swal({
            title: "category Submitted Successfully",
            icon: "success",
            dangerMode: true,
          })
         }
        }
       }
        
        const handleIcon=(event)=>{
          setIcon({bytes:event.target.files[0],file:URL.createObjectURL(event.target.files[0])})
  
          }
          const handleAd=(event)=>{
            setAd({bytes:event.target.files[0],
            file:URL.createObjectURL(event.target.files[0])})
    
            }
           
       return(
            <div className={classes.root}>
            <div className={classes.subdiv}>
       <Grid container spacing={1}>
        <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
         <div style={{fontSize:22,fontweight:700,letterSpacing:2,padding:20 }}>
             SubCategory
         </div>
        </Grid>
        {/*Text Box (category id)*/}
        <Grid item xs={12}>
             <FormControl
               variant="outlined"
               fullWidth
               className={classes.formControl}
               >
                 <InputLabel id="demo-simple-select-outlined-category">
                   Category Id
                 </InputLabel>
                 <Select
                    labelId="demo-simple-select-outlined-category"
                    id="demo-simple-select-outlined-category"
                    //value={age}
                    onChange={(event)=>setCategoryid(event.target.value)}
                    label="Category ID"
                    >
                      {showCategory()}
                    </Select>
               </FormControl>
              </Grid>
         <Grid item xs={12}>
             <TextField onChange={(event)=> setSubCategoryName(event.target.value)} label="SubCategory Name" variant="outlined" fullWidth/>
              </Grid>


        <Grid item xs={12} >
             <TextField onChange={(event)=> setCategoryDescription(event.target.value)} label="Description" variant="outlined" fullWidth/>
             </Grid>
     
        <Grid item xs={12} >
             <TextField onChange={(event)=> setCategoryPrice(event.target.value)} label="Price" variant="outlined" fullWidth/>
             </Grid>

         <Grid item xs={12} >
             <TextField onChange={(event)=> setCategoryStock(event.target.value)} label="Stock" variant="outlined" fullWidth/>
             </Grid>  

          <Grid item xs={12} >
             <TextField onChange={(event)=> setCategoryRented(event.target.value)} label="Rented" variant="outlined" fullWidth/>
             </Grid>

          <Grid item xs={12} >
             <TextField onChange={(event)=> setCategoryRentamt(event.target.value)} label="Rentamt" variant="outlined" fullWidth/>
             </Grid>

             <Grid item xs={12} >
             <TextField onChange={(event)=> setdiscount(event.target.value)} label="Discount" variant="outlined" fullWidth/>
             </Grid>      
             <Grid item xs={12}>
     <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Ad Status</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
         // value={age}
          onChange={(event)=>setAdstatus(event.target.value)}
          label="Ad Status"
        >

          <MenuItem value={'Activate'}>Activate</MenuItem>
          <MenuItem value={'Deactivate'}>Deactivate</MenuItem>
        
        </Select>
      </FormControl>
</Grid>
           <Grid item xs={6}>
           <span style={{fontsize:16,fontweight:300}}>Upload Category Icon</span>
           <input onChange={(event)=>handleIcon(event)} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
           <label htmlFor="icon-button-file">
           <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Grid>


     <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

      <Avatar variant="rounded" src={icon.file} style={{width:60,height:60}} />
      
      </Grid>

      <Grid item xs={12} sm={6}>
           <span style={{fontsize:16,fontweight:300}}>Upload Category Ad</span>
           <input onChange={(event)=>handleAd(event)} accept="image/*" className={classes.input} id="icon-button-ad-2" type="file" />
           <label htmlFor="icon-button-ad-2">
           <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Grid>


     <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Avatar variant="rounded" src={ad.file} style={{width:60,height:60}} />
      </Grid>

      
   


    <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Button onClick={()=>handleClick()} fullWidth variant="contained" color="primary">Save</Button>
     </Grid>

     <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Button fullWidth variant="contained" color="primary">Reset</Button>
     </Grid>
</Grid>
            </div>
            </div> 
        ) }