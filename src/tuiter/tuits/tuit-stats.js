import React from "react";
const TuitStats = ({tuit}) => {
    return(
        <li className="nav nav-justified mt-2 p-0">
            <li className="nav-item">
                <i className="bi bi-chat m-2"></i>
                <span className="text-muted">{tuit.replies}</span>
            </li>
            <li className="nav-item">
                <i className="bi bi-arrow-repeat m-2"></i>
                <span className="text-muted">{tuit.retuits}</span>
            </li>
            <li className="nav-item">
                {tuit.liked ?
                    <i className="bi bi-heart-fill m-2"></i>
                    :
                    <i className="bi bi-heart m-2"></i>
                }
                <span className="text-muted">{tuit.likes}</span>
            </li>
            <li className="nav-item">
                <i className="bi bi-upload m-2"></i>
            </li>
        </li>
    );
};
export default TuitStats;