import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CategoryInterface from './CategoryInterface'
import DisplayAllCategory from './DisplayAllCategory'
import SubCategory from './SubCategory'
import DisplaySubCategory from './DisplaySubCategory'
import DisplayGame from './DisplayGame'
import DisplayAccessory from './DisplayAccessory'
import Accessories from './Accessories'
import Games from './Games'
export default function ListItems(props){

const handleClick=(v)=>{

    props.setComponent(v)

}

return(
<div>

  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" onClick={()=>handleClick(<CategoryInterface/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="List Categories"  onClick={()=>handleClick(<DisplayAllCategory/>)}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Sub Categories"  onClick={()=>handleClick(<SubCategory/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="List SubCategories"  onClick={()=>handleClick(<DisplaySubCategory/>)} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Accessories"  onClick={()=>handleClick(<Accessories/>)} />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="DisplayAccessory"  onClick={()=>handleClick(<DisplayAccessory/>)} />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Games"  onClick={()=>handleClick(<Games/>)} />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="DisplayGame"  onClick={()=>handleClick(<DisplayGame/>)} />
    </ListItem>
  </div>



  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
  </div>
);
}