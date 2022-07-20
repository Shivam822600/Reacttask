import MaterialTable from "material-table"
import React,{useState,useEffect} from "react"

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import {ServerURL,postDataAndImage,getData,postData} from "./FetchNodeServices"
import Avatar from "@material-ui/core/Avatar"
import swalhtml from "@sweetalert/with-react"
import swal from "sweetalert"

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import { isBlank } from "./checks"
import renderHTML from "react-render-html"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    
    },
    subdiv:{
       padding:20,
       width:700,
       marginTop:20,
       background:'#f1f2f6'
       },
     input: {
    display: 'none',
  },
formControl: {
    minWidth: 690,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Displayaccepicture(props)
{ const[list,setList]=useState()
  const classes = useStyles();
  //////////////////////////Edit Form//////////////////////////////
  
  const [imageid,setimageid]=useState('')
  const [subcategoryid,setsubcategoryid]=useState('')
  const [categoryid,setcategoryid]=useState('')
  const [accessoryid,setaccessoryid]=useState('')
  const [icon,setIcon]=useState({bytes:'',file:'/icon.jpg'})
  const [iconSaveCancel,setIconSaveCancel]=useState(false)
  const [getRowData,setRowData]=useState([])
  const [ListCategory,setListCategory]=useState([]);
  const [ListSubCategory,setListSubCategory]=useState([]);
  const [Listaccessoryid,setListaccessoryid]=useState([])
  
  const handleSubCategoryChange=async(event)=>{
    setsubcategoryid(event.target.value)
    fillaccessoryBySubCategoryId(event.target.value)
  }
  const fillaccessoryBySubCategoryId=async(event)=>{
    var body={subcategoryid:event.target.value}
    var result=await postData("accessories/displayallaccessorybysubcategoryid",body);
    setListaccessoryid(result);
 
   }

        const handleCategoryChange=async(event)=>{
         setcategoryid(event.target.value)
         fillSubCategoryByCategoryId(event.target.value)
        }
        const fillSubCategoryByCategoryId=async(cid)=>{
          var body={categoryid:cid}
         var result=await postData("subcategories/displayallsubcategorybycategoryid",body);
         setListSubCategory(result);
      
        }

        const fetchAllCategory=async()=>{
        var result=await getData("categories/displayall");
        setListCategory(result);
        
        };
        

        const fillCategory=()=>{
          return ListCategory.map((items)=>{

            return (
               <MenuItem value={items.categoryid}>{items.categoryname}</MenuItem> 
                )
          })
        }
       const fillSubCategory=()=>{
         return ListSubCategory.map((item)=>{
           return( 
           <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
            )
         })
       }

       const fillAccessory=()=>{
        return Listaccessoryid.map((item)=>{
          return( 
          <MenuItem value={item.accessoryid}>{item.accessoryname}</MenuItem>
           )
        })
      }
  const handleIcon=(event)=>{
    setIcon({bytes:event.target.files[0],
      file:URL.createObjectURL(event.target.files[0])})
      setIconSaveCancel(true)
    }
    
  const handleDelete=async()=>{
    var body={imageid: imageid}
  var result=await postData("console/deletedata",body)
  if(result)
  {
   swal({
     title: "Data Deleted Successfully",
     icon: "success",
     dangerMode: true,
   })
  }
else
{
 swal({
   title: "Fail to Deleted Record",
   icon: "success",
   dangerMode: true,
 })
}
  }
  const handleClick=async()=>{
    var error=false
    var msg="<div>"
    if(isBlank(categoryid))
    {error=true
    msg+="<font color='#b2bec3'><b>Category Id Should not be blank...</b></font><br>";
    }
    if(isBlank(subcategoryid))
    {error=true
    msg+="<font color='#b2bec3'><b>SubCategory Id Should not be blank...</b></font><br>";
    }
 
    if(isBlank(accessoryid))
    {error=true
    msg+="<font color='#b2bec3'><b>Accessory Should not be blank...</b></font><br>";
    }
    msg+="</div>"
    if(error)
    {
     swalhtml(renderHTML(msg))
    }
    else
    {
   var body={imageid:imageid,
     categoryid:categoryid,
     subcategoryid:subcategoryid,
     accessoryid:accessoryid,
    
    }
   var result=await postData('pictureaccessory/editdata',body)
  
   if(result)
   { console.log(result)
    swal({
      title: "Data Updated Successfully",
      icon: "success",
      dangerMode: true,
    })
   }
  }
 }
 const handleCancelIcon=()=>{
   setIconSaveCancel(false)
   setIcon({bytes:"",file:`${ServerURL}/images/${getRowData.icon}`})
 } 
 

const handleClickSaveIcon=async()=>{

  var formData=new FormData()
  formData.append("imageid",imageid)
  formData.append("icon",icon.bytes)

  var config={headers:{"content-type":"multipart/form-data"}}
  var result=await postDataAndImage('pictureaccessory/editicon',formData,config)
  if(result)
  {
   swal({
     title: "Icon Updated Successfully",
     icon: "success",
     dangerMode: true,
   })
   setIconSaveCancel(false)
  }
}

 const editFormView=()=>{
  return(
    <div className={classes.root}>
    <div className={classes.subdiv}>
<Grid container spacing={1}>
<Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
 <div style={{fontSize:22,fontweight:700,letterSpacing:2,padding:20 }}>
     Console Picture
 </div>
</Grid>
<Grid item xs={12}>
             <FormControl
               variant="outlined"
               fullWidth
              
               >
                 <InputLabel id="demo-simple-select-outlined-category">
                   Category Id
                 </InputLabel>
                 <Select
                    labelId="demo-simple-select-outlined-category"
                    id="demo-simple-select-outlined-category"
                    value={categoryid}
                    onChange={(event)=>handleCategoryChange(event)}
                    label="Category ID"
                    >
                      {fillCategory()}
                    </Select>
               </FormControl>
            
              </Grid>
              <Grid item xs={12}>
             <FormControl
               variant="outlined"
               fullWidth
              
               >
                 <InputLabel id="demo-simple-select-outlined-subcategory">
                   SubCategory Id
                 </InputLabel>
                 <Select
                    labelId="demo-simple-select-outlined-subcategory"
                    id="demo-simple-select-outlined-subcategory"
                    value={subcategoryid}
                    onChange={(event)=>handleSubCategoryChange(event)}
                    label="SubCategory ID"
                    >
                      {fillSubCategory()}
                    </Select>
               </FormControl>
            
              </Grid>         

              <Grid item xs={12}>
             <FormControl
               variant="outlined"
               fullWidth
              
               >
                 <InputLabel id="demo-simple-select-outlined-subcategory">
                   Accessory Id
                 </InputLabel>
                 <Select
                    labelId="demo-simple-select-outlined-subcategory"
                    id="demo-simple-select-outlined-subcategory"
                    value={accessoryid}
                    onChange={(event)=>setaccessoryid(event.target.value)}
                    label="Accessory ID"
                    >
                      {fillAccessory()}
                    </Select>
               </FormControl>
            
              </Grid>  

   <Grid item xs={6}>
   <span style={{fontsize:16,fontweight:300 }}>
     Edit Console Picture
   </span>
   <input onChange={(event)=>handleIcon(event)} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
   <label htmlFor="icon-button-file">
   <IconButton color="primary" aria-label="upload picture" component="span">
  <PhotoCamera />
</IconButton>
</label>
</Grid>


<Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

<Avatar variant="rounded" src={icon.file} style={{width:60,height:60}} />
{iconSaveCancel?<span><Button onClick={()=>handleClickSaveIcon()} color="secondary">Save</Button><Button color="secondary" onClick={()=>handleCancelIcon()}>Cancel</Button></span>:<></>}
</Grid>
</Grid>
    </div>
    </div> 
)

 }




  ////////////////////////////////////////////////////////////////////
///////////////////////////Edit Dialog ///////////////////////////////

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (rowData) => {
    setRowData(rowData)
    setOpen(true);
    setimageid(rowData.imageid)
    setcategoryid(rowData.categoryid)
    fillSubCategoryByCategoryId(rowData.categoryid)
    fillaccessoryBySubCategoryId(rowData.subcategoryid)
    setsubcategoryid(rowData.subcategoryid)
    setaccessoryid(rowData.accessoryid)
    setIcon({bytes:" ",file:`${ServerURL}/images/${ rowData.icon}`})
  };

  const handleClose = () => {
    setOpen(false);
    fetchAllCategory()
  };

  const showEditdialog=()=>{
    return (
      <div>
        
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Edit/Delete Accessory Picture
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClick}>
                Update
              </Button>
              <Button autoFocus color="inherit" onClick={handleDelete}>
                Delete
              </Button>
            </Toolbar>
          </AppBar>
          {editFormView()}
        </Dialog>
      </div>
    );

  }
  ///////////////////////////////////////////////////////////////////
const fetchAllConsole=async()=>{
var result=await getData("pictureaccessory/displayall")
setList(result)

}
useEffect(function(){
fetchAllConsole()
fetchAllCategory();
},[])


function displayall() {
    return (
      <div>
      <MaterialTable
        title="Accessories list"
        columns={[
          { title: 'SubcategoryId', field: 'subcategoryid' },
          { title: 'CategoryId', field: 'categoryid' },
          { title: 'accessoryId', field: 'accessoryid' },
          { title: 'Icon', field: 'icon',
             render: rowData =><div><img src={`${ServerURL}/images/${rowData.icon}`} style={{borderRadius:5}} width='40' height='50'/></div>},
         
       
         
        ]}
        data={list}       
        actions={[
          {
            icon: 'editoutlined',
            tooltip: 'Edit subcategories',
            onClick: (event, rowData) =>handleClickOpen(rowData)
          }
        ]}
      />
      {showEditdialog()}
      </div>
    )
  }
  return( <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div style={{width:800,marginTop:10,padding:3}}>
{displayall()}
</div>

  </div>
  )
  
}