import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <PostSummaryList/>
            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter