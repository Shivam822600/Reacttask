import MaterialTable from "material-table"
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles=makeStyles((theme)=> ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
        },
        subdiv:{
           padding:100,
           width:1000,
           marginTop:20,
           background:'rgba(0, 98, 102,1.0)'
           },
         input: {
        display: 'none',
      },
    formControl: {
        minWidth: 690,
      },
           }));
           export default function Footer(Props)
           { const classes=useStyles();

            return(
                <div className={classes.root}>
                <div className={classes.subdiv}>
           <Grid container spacing={1}>
           <Grid item xs={4} >
           <Divider
              orientation={"vertical"}
              height={500}
            />
            <div>
              OUR SERVICES
            </div>
            <div>
              hospital
            </div>
            <div>
            ambulance
            </div>
            <div>
             blood
            </div>
            
           
               </Grid>
        <Grid item xs={4} >
        
            <div>
              CUSTOMER SERVICES
            </div>
            <div>
              Term & Condition
            </div>
            <div>
            FAQ
            </div>
            <div>
             About US
            </div>
               </Grid>
               <Grid item xs={4}>
        
            <div>
              CONTACT US
            </div>
            <div>
              Gwalior,M.P,India
            </div>
            <div>
            Gamezone@gmail.com
            </div>
            <div>
            +913216549874
            </div>
               </Grid>
               </Grid>
               
               </div>
               </div>
              
            )
           }
