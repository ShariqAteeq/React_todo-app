import React from 'react';

function SidebarRow({ title , Icon , selected , no }) {
    return (
        <div className = {`sidebarRow ${selected && "selected"}`}>
            <div className = "sidebarRow__left">
                 <Icon className = "sidebarRow__icon"/>
                 <p className = "sidebarRow__title">{title}</p>
            </div>
            <p className = "sidebarRow__no">{no}</p>
        </div>
    )
}

export default SidebarRow;
