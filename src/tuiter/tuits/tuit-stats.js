import {React, useState} from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [disliked, setDisiked] = useState(tuit.disliked);
    const dispatch = useDispatch();

    const likeHandler = () => {
        if (liked) {
            dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes - 1
            }));
        } else {
            dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1
            }));
        }
        setLiked(!liked);
    }

    const dislikeHandler = () => {
        if (disliked) {
            dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes - 1
            }));
        } else {
            dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1
            }));
        }
        setDisiked(!disliked);
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
                <span className="text-muted p-1">{tuit.likes}</span>
            </div>
            <div className="nav-item w-25" onClick={dislikeHandler}>
                {disliked ?
                    <i className="bi bi-hand-thumbs-down-fill text-primary m-2"></i>
                    :
                    <i className="bi bi-hand-thumbs-down m-2"></i>
                }
                <span className="text-muted p-1">{tuit.dislikes}</span>
            </div>
            <div className="nav-item w-25">
                <i className="bi bi-upload m-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;