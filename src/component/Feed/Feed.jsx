import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import "./Feed.css"
import {postData} from "../../mockData/MockData"
import Postcard from "../PostCard/Postcard";

const Feed = () => {
  return (
    <div class="posts">
      <CreatePost />
      {postData.map((data)=>(
        <Postcard {...data} />
      ))}
    </div>
  );
};

export default Feed;
