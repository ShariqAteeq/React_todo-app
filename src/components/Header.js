import React, { useState , useContext } from 'react';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {GlobalContext} from '../Context/GLobalState';
import {NavLink} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import FlightIcon from '@material-ui/icons/Flight';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';

function Header({title}) {

    const [openDraw , setDraw] = useState(false);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let day = newDate.getDay();
    let year = newDate.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
    
    const useStyles = makeStyles({
        drawerStyle : {
            width : '0',
            backgroundColor : '#fff'
        }
    });

    const drawClose = () => {
        setDraw(false)
    }

    const drawOpen = () => {
        setDraw(true)
    }

    const classes = useStyles();
    return (
        <div className = "header">
            <h3 className = "header__day">{title}</h3>
            <p className = "header__date">{days[day]}, {date} {monthNames[month]} {year}</p>
            <button className = "header__btn" onClick = {drawOpen}>
                     <ListOutlinedIcon />
            </button>
            <Drawer anchor = "right" open = {openDraw} onClose = {drawClose} className = "drawerStyle">
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

            </Drawer>
           
        </div>
    )
}

export default Header
