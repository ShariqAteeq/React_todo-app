import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import SidebarRow from './SidebarRow';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import FlightIcon from '@material-ui/icons/Flight';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';

function Sidebar() {
    return (
        <div className = "sidebar">
            <p>To-do App by Shariq</p>
            <Avatar alt="Shariq" 
            src="https://avatars0.githubusercontent.com/u/60320877?s=460&u=906796c37643e73a4b30f69f0cbef62c2d45189e&v=4" />
            
            <SidebarRow title ="My Day" Icon = {WbSunnyOutlinedIcon}/>
            <SidebarRow title ="Important" Icon = {StarBorderRoundedIcon}/>
            <SidebarRow title ="To-Do" Icon = {PlaylistAddCheckRoundedIcon}/>
            <SidebarRow title ="Groceries" Icon = {LocalGroceryStoreOutlinedIcon}/>
            <SidebarRow title ="Travel" Icon = {FlightIcon}/>
            <SidebarRow title ="Work" Icon = {WorkOutlineOutlinedIcon}/>
            <SidebarRow title ="New List" Icon = {PlaylistAddRoundedIcon}/>
        </div>
    )
}

export default Sidebar;
