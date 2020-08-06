import React from 'react';

function SidebarRow({ title , Icon }) {
    return (
        <div className = "sidebarRow">
            <Icon className = "sidebarRow__icon"/>
            <p className = "sidebarRow__title">{title}</p>
        </div>
    )
}

export default SidebarRow;
