import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
        <div className="list-group">
            <Link to="/tuiter" className="list-group-item list-group-item-action">
                <i className="bi bi-twitter"></i>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill p-1"></i>
                <span className="d-none d-xl-inline">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash p-1"></i>
                <span className="d-none d-xl-inline">Explore</span>
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item list-group-item-action
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill p-1"></i>
                <span className="d-none d-xl-inline">Notifications</span>
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item list-group-item-action
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill p-1"></i>
                <span className="d-none d-xl-inline">Messages</span>
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item list-group-item-action
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill p-1"></i>
                <span className="d-none d-xl-inline">Bookmarks</span>
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item list-group-item-action
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list p-1"></i>
                <span className="d-none d-xl-inline">Lists</span>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill p-1"></i>
                <span className="d-none d-xl-inline">Profile</span>
            </Link>
            <Link to="/tuiter/more" className={`list-group-item list-group-item-action
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots p-1"></i>
                <span className="d-none d-xl-inline">More</span>
            </Link>
        </div>
        <div className="d-grid mt-2">
            <Link to="/tuiter/tweet"
               className="btn btn-primary btn-block rounded-pill">
                Tweet</Link>
        </div>
        </>

    );
};
export default NavigationSidebar;