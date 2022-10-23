import React from "react";
import CelebrateIcon from "../../assets/celebrate.svg"
import likeIcon from "../../assets/like.svg"
import supportIcon from "../../assets/support.svg"
import "./card.css"

const Postcard = ({
    img,
    description,
    likes,
    comments,
    shares,
    time,
    isPublic,
    isPromoted,
    user,
}) => {
  return (
    <div className="post_item">
      <div className="post_item_header">
        <div className="post_item_info">
          <img src={user.img} alt="no image" className="post_profile" style={{height: "50px"}} />
          <div className="post_item_owner" style={{marginLeft: "8px"}}>
            <a href="#" className="act_title">
              {user.name}
            </a>
            <p className="caption-text">{user.description}</p>
            {isPromoted && <p className="caption-text">Promoted</p>}
            <p className="caption-text">{time}</p>
          </div>
        </div>
        <i className="bi bi-three-dots" style={{padding: "5px"}}></i>
      </div>

      <div className="post_item_body_info">
        <p style={{fontSize: "0.95rem"}}>{description}</p>
      </div>

      <img src={img} alt="noom" className="post_item_body_video" style={{width: "100%"}} />

      <div className="like_count_container">
        <div className="svgGroup" >
        <img src={likeIcon} alt="" />
        <img className="move1" src={supportIcon} alt="" />
        <img className="move2" src={CelebrateIcon} alt="" />
        </div>
        <span className="caption-text">Lovish Tater and {likes} other</span>
      </div>

      <div className="post_item_footer">
        <div className="post-action">
          <i className="bi bi-hand-thumbs-up"></i>
          <div className="action-name">Like</div>
        </div>
        <div className="post-action">
          <i className="bi bi-chat-text"></i>
          <div className="action-name">Comment</div>
        </div>
        <div className="post-action">
          <i className="bi bi-arrow-90deg-right"></i>
          <div className="action-name">Share</div>
        </div>
        <div className="post-action">
          <i className="bi bi-cursor-fill"></i>
          <div className="action-name">Send</div>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
