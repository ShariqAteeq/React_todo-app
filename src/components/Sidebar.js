import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GLobalState';
import {NavLink} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import FlightIcon from '@material-ui/icons/Flight';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';

function Sidebar() {

    const {Tasks} = useContext(GlobalContext);

    let TravelCount = 0 , WorkCount = 0 , GroCount = 0, MyDay=0;

    Tasks.map(task => {
        if(task.category === "Work") {
            WorkCount++;
        }
        else if(task.category === "Travel") {
            TravelCount++;
        }
        else if(task.category === "Groceries") {
            GroCount++;
        }
        MyDay++;
    });

    return (
        <div className = "sidebar">
            <div className = "sidebar__user">
                 <Avatar alt="Shariq" className = "sidebar__avatar"
                         src="https://avatars0.githubusercontent.com/u/60320877?s=460&u=906796c37643e73a4b30f69f0cbef62c2d45189e&v=4" />
                <h4 className = "sidebar__username">Muhammad Shariq</h4>
            </div>
            

            <nav className = "sidebar__nav">
                <ul className = "sidebar__nav-list">
                    <li className = "sidebar__nav-item">
                         <NavLink exact to = "/" className = "sidebar__nav-link" activeClassName = "sidebar__nav-link-active">
                             <div className = "sidebar__link-name">
                                 <WbSunnyOutlinedIcon />
                                 <p className = "sidebar__link-text">My Day</p>
                             </div>
                             <p className = "sidebar__link-no">{MyDay}</p>
                         </NavLink>
                    </li>
                    <li className = "sidebar__nav-item">
                         <NavLink to = "/important" className = "sidebar__nav-link" activeClassName = "sidebar__nav-link-active">
                             <div className = "sidebar__link-name">
                                 <StarBorderRoundedIcon />
                                 <p className = "sidebar__link-text">Important</p>
                             </div>
                             <p className = "sidebar__link-no">{}</p>
                         </NavLink>
                    </li>
                    <li className = "sidebar__nav-item">
                         <NavLink to = "/groceries" className = "sidebar__nav-link" activeClassName = "sidebar__nav-link-active">
                             <div className = "sidebar__link-name">
                                 <LocalGroceryStoreOutlinedIcon />
                                 <p className = "sidebar__link-text">Groceries</p>
                             </div>
                             <p className = "sidebar__link-no">{GroCount}</p>
                         </NavLink>
                    </li>
                    <li className = "sidebar__nav-item">
                         <NavLink to = "/travel" className = "sidebar__nav-link" activeClassName = "sidebar__nav-link-active">
                             <div className = "sidebar__link-name">
                                 <FlightIcon />
                                 <p className = "sidebar__link-text">Travel</p>
                             </div>
                             <p className = "sidebar__link-no">{TravelCount}</p>
                         </NavLink>
                    </li>
                    <li className = "sidebar__nav-item">
                         <NavLink to = "/work" className = "sidebar__nav-link" activeClassName = "sidebar__nav-link-active">
                             <div className = "sidebar__link-name">
                                 <WorkOutlineOutlinedIcon />
                                 <p className = "sidebar__link-text">Work</p>
                             </div>
                             <p className = "sidebar__link-no">{WorkCount}</p>
                         </NavLink>
                    </li>
                    <li className = "sidebar__nav-item">
                         <NavLink to = "/newlist" className = "sidebar__nav-link" activeClassName = "sidebar__nav-link-active">
                             <div className = "sidebar__link-name">
                                 <PlaylistAddRoundedIcon />
                                 <p className = "sidebar__link-text">New List</p>
                             </div>
                             <p className = "sidebar__link-no">{}</p>
                         </NavLink>
                    </li>
                </ul>
            </nav>

            <div className = "sidebar__legal">
                <p>Copyright By Muhammad Shariq 2020 All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Sidebar;


       {/* <NavLink exact to = "/" className = "sidebar__link" activeClassName = "sidebar__link-active">
                <SidebarRow title ="My Day" Icon = {WbSunnyOutlinedIcon} no = {MyDay}/>
            </NavLink>
            <SidebarRow title ="Important" Icon = {StarBorderRoundedIcon}/>
            <NavLink to = "/groceries" className = "sidebar__link" activeClassName = "sidebar__link-active">
                 <SidebarRow title ="Groceries" Icon = {LocalGroceryStoreOutlinedIcon} no = {GroCount}/>
            </NavLink>
            <NavLink to = "/travel" className = "sidebar__link" activeClassName = "sidebar__link-active">
                 <SidebarRow title ="Travel" Icon = {FlightIcon} no = {TravelCount}/>
            </NavLink>
            <NavLink to = "/work" className = "sidebar__link" activeClassName = "sidebar__link-active">
                <SidebarRow title ="Work" Icon = {WorkOutlineOutlinedIcon} no = {WorkCount}/>
            </NavLink>
            <SidebarRow title ="New List" Icon = {PlaylistAddRoundedIcon}/> */}