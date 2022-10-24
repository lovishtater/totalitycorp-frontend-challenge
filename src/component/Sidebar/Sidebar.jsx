import React from "react";
import displayPic from "../../assets/Lovish_Tater.jpeg";
import { ReactComponent as Premium } from "../../assets/premium.svg";
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar" style={{border: "none"}}>
      <div className="sidebar_first_col">
        <div className="profile_header">
          &nbsp;{" "}
          <Premium />
        </div>
        <img
          src={displayPic}
          alt="noimage"
          style={{
            height: "80px",
            width: "80px",
            borderRadius: " 50%",
            border: "4px solid white",
            margin: "-35px auto 0 auto",
          }}
        />

        <div className="profile_info">
          <p style={{textAlign: "center"}} className="title-text">
            Lovish Tater
          </p>
          <p className="caption-text">
            FE Intern @Bytelearn || Enjoying JavaScript || Full stack dev. (MERN) || Computer
            science || Software Engineer
          </p>
        </div>

        <div style={{border: "0.2px solid lightgrey"}}></div>

        <div className="profile-stats">
          <div className="text caption-text">Who viewed your profile</div>
          <div>
            <a href="#" className="blue-text">
              301
            </a>
          </div>
        </div>

        <div className="profile-stats">
          <div className="text caption-text">Impressions of your post</div>
          <div>
            <a href="#" className="blue-text">
              8155
            </a>
          </div>
        </div>

        <div className="sidebar_footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
              fill="#f8c77e"
            ></path>
            <path
              d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
              fill="#e7a33e"
            ></path>
          </svg>
          <a href="#"> See all Premium features</a>
        </div>
        <div className="sidebar_footer">
          <i className="bi bi-bookmark-fill"></i>
          <div>My items</div>
        </div>
      </div>

      <div className="sidebar_second_col">
        <div className="sidebar_title">Recent</div>
        <div className="recent">
          <div className="sidebar_second_text"># Github Community</div>
          <div className="sidebar_second_text"># Totality Corp</div>

          <div className="sidebar_second_text"># JavaScript</div>

          <div className="sidebar_second_text"># React.js Dev</div>

          <div className="sidebar_second_text"># JavaScript Developer</div>
        </div>
        <div className="sidebar_title blue-text">Groups</div>

        <div className="recent">
          <div className="sidebar_second_text">
            <i className="bi bi-people-fill" style={{marginRight: "10px", fontSize: "medium"}}></i>{" "}
            React Developers
          </div>
          <div className="sidebar_second_text">
            <i className="bi bi-people-fill" style={{marginRight: "10px", fontSize: "medium"}}></i>{" "}
            Poornima College
          </div>
        </div>

        <div className="sidebar_title blue-text">Followed Hashtags</div>

        <div className="recent">
          <div className="sidebar_second_text"># Personaldevelopment</div>
          <div className="sidebar_second_text"># Stockmarket</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
