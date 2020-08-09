import React from 'react';

function Header({title}) {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let day = newDate.getDay();
    let year = newDate.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    

    return (
        <div className = "header">
            <h3 className = "header__day">{title}</h3>
            <p className = "header__date">{days[day]}, {date} {monthNames[month]} {year}</p>
        </div>
    )
}

export default Header
