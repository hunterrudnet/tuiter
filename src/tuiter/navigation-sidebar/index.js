import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i>
                Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list"></i>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;