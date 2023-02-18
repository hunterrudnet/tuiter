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
        <div className="nav block mt-2">
            <div className="nav-item w-25">
                <i className="bi bi-chat m-2"></i>
                <span className="text-muted p-1">{tuit.replies}</span>
            </div>
            <div className="nav-item w-25">
                <i className="bi bi-arrow-repeat m-2"></i>
                <span className="text-muted p-1">{tuit.retuits}</span>
            </div>
            <div className="nav-item w-25" onClick={likeHandler}>
                {liked ?
                    <i className="bi bi-heart-fill text-danger m-2"></i>
                    :
                    <i className="bi bi-heart m-2"></i>
                }
                <span className="text-muted p-1">{likes}</span>
            </div>
            <div className="nav-item w-25">
                <i className="bi bi-upload m-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;