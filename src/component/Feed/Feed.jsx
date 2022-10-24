import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import "./Feed.css"
import {postData} from "../../mockData/MockData"
import Postcard from "../PostCard/Postcard";

const Feed = () => {
  return (
    <div class="posts">
      <CreatePost />
      <div id="feed-sort">
        <hr />
        <button>
          <span>Sort by:</span>
          <strong>Top</strong>
          <span class="bi bi-caret-down-fill"></span>
        </button>
      </div>
      {postData.map((data) => (
        <Postcard {...data} />
      ))}
      <div className="load-more">
      Load more 
      </div>
    </div>
  );
};

export default Feed;
