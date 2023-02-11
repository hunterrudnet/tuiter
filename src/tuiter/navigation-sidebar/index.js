import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
        <div className="list-group">
            <a href="tuiter.html" className="list-group-item list-group-item-action">
                <i className="bi bi-twitter"></i>
            </a>
            <a href="home.html" className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i>
                <span className="d-none d-xl-inline">Home</span>
            </a>
            <a href="explore.html" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                <span className="d-none d-xl-inline">Explore</span>
            </a>
            <a href="notifications.html" className={`list-group-item list-group-item-action
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
                <span className="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="messages.html" className={`list-group-item list-group-item-action
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i>
                <span className="d-none d-xl-inline">Messages</span>
            </a>
            <a href="bookmarks.html" className={`list-group-item list-group-item-action
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
                <span className="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="lists.html" className={`list-group-item list-group-item-action
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list"></i>
                <span className="d-none d-xl-inline">Lists</span>
            </a>
            <a href="profile.html" className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
                <span className="d-none d-xl-inline">Profile</span>
            </a>
            <a href="more.html" className={`list-group-item list-group-item-action
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                <span className="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div className="d-grid mt-2">
            <a href="tweet.html"
               className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
        </>

    );
};
export default NavigationSidebar;