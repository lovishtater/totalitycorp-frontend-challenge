import React from "react";
import logo from "../../assets/logo.png"
import displayPic from "../../assets/Lovish_Tater.jpeg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="no image" />
        <div className="search_box">
          <i className="bi bi-search"></i>
          <input type="text" className="search_input " placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <div className="nav_link ">
          <div className="nav_icon">
            <i className="bi bi-house-door-fill"></i>
          </div>
          <div className="nav_text">Home</div>
        </div>

        <div className="nav_link network">
          <div className="nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
          </div>
          <div className="nav_text">My Network</div>
        </div>

        <div className="nav_link jobs">
          <div className="nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
          </div>
          <div className="nav_text">Jobs</div>
        </div>

        <div className="nav_link">
          <div className="nav_icon">
            <div className="info">3</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
          </div>
          <div className="nav_text">Messaging</div>
        </div>

        <div className="nav_link">
          <div className="nav_icon">
            <div className="info">3</div>
            <i className="bi bi-bell-fill"></i>
          </div>
          <div className="nav_text">Notifications</div>
        </div>

        <div className="header_right_2">
          <div className="nav_link">
            <div className="nav_icon">
              <img
                src={displayPic}
                alt="non"
                style={{height: "30px", objectFit: "contain", borderRadius: "50px"}}
              />
              <div className="nav_text dropdown drop">
                Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                </svg>
                <div className="dropdown-content">
                  <div className="dropdown_profile">
                    <img
                      src={displayPic}
                      style={{
                        height: "50px",
                        objectFit: "contain",
                        borderRadius: "50px",
                        paddingRight: "10px",
                      }}
                      alt="noimage"
                    />
                    <div>
                      <div className="act_title">Lovish Tater</div>
                      <div className="acoount_name">
                        FE Intern @Bytelearn || Enjoying JavaScript || Full stack dev. (MERN) ||
                        Computer science || Software Engineer
                      </div>
                    </div>
                  </div>
                  <div className="profile_view_button">View profile</div>

                  <div className="bdr_bottom"></div>
                  <div className="title" style={{color: "black"}}>
                    Accounts
                  </div>
                  <div className="list">Settings & Privacy</div>
                  <div className="list">Help</div>
                  <div className="list bdr_bottom">Language</div>

                  <div className="title" style={{color: "black"}}>
                    Manage
                  </div>
                  <div className="list">Post & Activity</div>
                  <div className="list bdr_bottom">Job Postion Account</div>
                  <div className="list">sign out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
