import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GLobalState';

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

    const {Tasks} = useContext(GlobalContext);

    let TravelCount = 0 , WorkCount = 0 , GroCount = 0;

    Tasks.map(task => {
        if(task.category === "work") {
            WorkCount++;
        }
        else if(task.category === "travel") {
            TravelCount++;
        }
        else if(task.category === "groceries") {
            GroCount++;
        }
    })

    return (
        <div className = "sidebar">
            <Avatar alt="Shariq" className = "sidebar__avatar"
            src="https://avatars0.githubusercontent.com/u/60320877?s=460&u=906796c37643e73a4b30f69f0cbef62c2d45189e&v=4" />
            <h4 className = "sidebar__username">Muhammad Shariq</h4>
            <SidebarRow title ="My Day" Icon = {WbSunnyOutlinedIcon} selected/>
            <SidebarRow title ="Important" Icon = {StarBorderRoundedIcon}/>
            <SidebarRow title ="To-Do" Icon = {PlaylistAddCheckRoundedIcon}/>
            <SidebarRow title ="Groceries" Icon = {LocalGroceryStoreOutlinedIcon} no = {GroCount}/>
            <SidebarRow title ="Travel" Icon = {FlightIcon} no = {TravelCount}/>
            <SidebarRow title ="Work" Icon = {WorkOutlineOutlinedIcon} no = {WorkCount}/>
            <SidebarRow title ="New List" Icon = {PlaylistAddRoundedIcon}/>
        </div>
    )
}

export default Sidebar;
