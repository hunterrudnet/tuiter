import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs mt-2">
                <li className="nav-item">
                    <a href='for-you.html' className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href='trending.html' className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href='news.html' className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="../../images/school.jpeg" alt='Students at School' className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    Test Taking</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;