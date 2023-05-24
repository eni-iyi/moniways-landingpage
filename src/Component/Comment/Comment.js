import React from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import "./Comment.css";

const Comment = () => {
  return (
    <div>
      <div className="comment">
        <div className="comment-1">
          <span>
            <img className="comma-1" src="./image/left.png" alt="" />{" "}
            <p>It was hard to discipline myself</p>
            <p>in the past. The rewards</p>
            <p>deffinetly help me achieve my</p>
            <p>goals</p>{" "}
            <img className="comma-2" src="./image/right.png" alt="" />
            <h5>Marry from Canada</h5>
          </span>

          <div className="preview">
          <div className="prev">
            <span className="arrowprev"><GrLinkPrevious /></span>
            
            <span className="arrow1">Prev</span>
          </div>
          <div className="next">
            <span >Next</span>
            <span className="arrownext"> <GrLinkNext /></span>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Comment;
