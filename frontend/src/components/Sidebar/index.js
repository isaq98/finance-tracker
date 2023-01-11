import React, { useState } from 'react';
import './_Sidebar.scss';
import { sidebarEnum } from 'SingleUse/sidebarEnum';
import useOutsideClick from 'CustomHooks/useOutsideClick';

function Sidebar(props) {
    const [sidebarVisibility, setVisibility] = useState(false);

    const handleClick = () => {
        setVisibility((currState) => {
            currState = !currState;
        });
    }

    const ref = useOutsideClick(handleClick)

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
        <div className="sidebar-container" ref={ref} onClick={(event) => {event.stopPropagation()}}>
            {constructSidebarButtons()}
        </div>
        :
        <h4 onClick={() => setVisibility(!sidebarVisibility)}>Click me</h4>
    );
}

export default Sidebar;