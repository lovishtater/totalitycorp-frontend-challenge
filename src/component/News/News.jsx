import React from "react";
import {newsData} from "../../mockData/MockData";
import "./News.css"
import logo from "../../assets/logo.png"

const News = () => {
  return (
    <div className="right_sidebar">
      <div className="news">
        <div className="news_head">
          <div className="news_title">Linkedln News</div>
          <i className="bi bi-info-square-fill" style={{fontSize: "15px"}}></i>
        </div>
        <br />
        {newsData.map(({title, time, views}) => (
          <div className="new_list">
            <div
              className="act_title"
              style={{display: "flex", flexDirection: "row", alignItems: "flex-start"}}
            >
              <i
                className="bi bi-record-fill"
                style={{fontSize: "14px", marginRight: "10px", display: "block", marginTop: "5px"}}
              ></i>
              {title}
            </div>
            <div style={{marginLeft: "25px"}} className="caption-text">
              {time} ago - {views} readers
            </div>
          </div>
        ))}
        <div style={{marginLeft: "25px", }} >
            Show More
        </div>
      </div>

      <div class="sidebar-useful-links">
                <a href="#">About</a>
                <a href="#">Accessibility</a>
                <a href="#">Help Center</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Advertising</a>
                <a href="#">Get the App</a>
                <a href="#">More</a>

                <div class="copyright-msg">
                    <img src={logo} alt=""/>
                    <p>LinkedIn &copy; <span id="year"></span> All rights reserved</p>
                </div>
            </div>
    </div>
  );
};

export default News;
