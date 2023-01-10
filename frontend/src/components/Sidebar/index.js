import React, { useState } from 'react';
import './_Sidebar.scss';
import { sidebarEnum } from 'SingleUse/sidebarEnum';

function Sidebar(props) {
    const [sidebarVisibility, setVisibility] = useState(false);

    const constructSidebarButtons = () => {
        return sidebarEnum.map((element) => {
            return (
                <div className="sidebar-selector" key={element.title}>
                    <button className="sidebar-navigation-button">{element.title}</button>
                </div>
            )
        })
    };

    return (
        sidebarVisibility ? 
        <div className="sidebar-container">
            {constructSidebarButtons()}
        </div>
        :
        <h4 onClick={() => setVisibility(!sidebarVisibility)}>Click me</h4>
    );
}

export default Sidebar;