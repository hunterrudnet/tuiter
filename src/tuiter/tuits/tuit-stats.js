import {React, useState} from "react";
const TuitStats = ({tuit}) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [likes, setLikes] = useState(tuit.likes);

    const likeHandler = () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
    }

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
            <div className="nav-item" onClick={likeHandler}>
                {liked ?
                    <i className="bi bi-heart-fill text-danger m-2"></i>
                    :
                    <i className="bi bi-heart m-2"></i>
                }
                <span className="text-muted">{likes}</span>
            </div>
            <div className="nav-item">
                <i className="bi bi-upload m-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;