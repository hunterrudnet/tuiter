import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} alt="Avatar Icon" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bold">{tuit.userName}</span>
                        <i className="bi bi-check-circle-fill"></i>
                        <span className="text-muted"> {tuit.handle}</span>
                        <span className="text-muted"> - {tuit.time}</span>
                    </div>
                    <div className="text-muted">{tuit.tuit}</div>
                    <TuitStats
                        key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;