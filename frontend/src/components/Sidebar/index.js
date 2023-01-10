import React from 'react';
import './_Sidebar.scss';
import { sidebarEnum } from 'SingleUse/sidebarEnum';

function Sidebar(props) {

    const constructSidebarButtons = () => {
        return sidebarEnum.map((element) => {
            return (
                <div key={element.title}>
                    <button>{element.title}</button>
                </div>
            )
        })
    };

    return (
        <div className="sidebar-container">
            {constructSidebarButtons()}
        </div>
    );
}

export default Sidebar;