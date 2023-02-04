const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a href="tuiter.html" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="home.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-house"></i>
                    <span class="d-none d-xl-inline">Home</span>
                </a>
                <a href="explore.html" class="list-group-item list-group-item-action">
                    <i class="fab fa-hashtag"></i>
                    <span class="d-none d-xl-inline">Explore</span>
                </a>
                <a href="notifications.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bell"></i>
                    <span class="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="messages.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="d-none d-xl-inline">Messages</span>
                </a>
                <a href="bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bookmark"></i>
                    <span class="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="lists.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-list"></i>
                    <span class="d-none d-xl-inline">Lists</span>
                </a>
                <a href="profile.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-user"></i>
                    <span class="d-none d-xl-inline">Profile</span>
                </a>
                <a href="more.html" class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-ellipsis-h"></i>
                    <span class="d-none d-xl-inline">More</span>
                </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;