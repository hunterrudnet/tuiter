import React from "react";
const TuitStats = ({tuit}) => {
    return(
        <div className="nav nav-justified mt-2 p-0">
            <div className="nav-item">
                <i className="bi bi-chat m-2"></i>
                <span className="text-muted">{tuit.replies}</span>
            </div>
            <div className="nav-item">
                <i className="bi bi-arrow-repeat m-2"></i>
                <span className="text-muted">{tuit.retuits}</span>
            </div>
            <div className="nav-item">
                {tuit.liked ?
                    <i className="bi bi-heart-fill m-2"></i>
                    :
                    <i className="bi bi-heart m-2"></i>
                }
                <span className="text-muted">{tuit.likes}</span>
            </div>
            <div className="nav-item">
                <i className="bi bi-upload m-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;