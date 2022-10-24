import React from "react";
import displayPic from "../../assets/Lovish_Tater.jpeg";

const ProfileOptionModal = () => {
  return (
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
          alt="Lovish Tater"
        />
        <div>
          <div className="title-text">Lovish Tater</div>
          <div className="acoount_name">
            FE Intern @Bytelearn || Enjoying JavaScript || Full stack dev. (MERN) || Computer
            science || Software Engineer
          </div>
        </div>
      </div>
      <div className="profile_view_button">View profile</div>

      <div className="bdr_bottom"></div>

      <div className="title">Accounts</div>
      <div className="list">Settings & Privacy</div>
      <div className="list">Help</div>
      <div className="list bdr_bottom">Language</div>

      <div className="title">  Manage</div>
      <div className="list">Post & Activity</div>
      <div className="list bdr_bottom">Job Postion Account</div>
      <div className="list">sign out</div>
    </div>
  );
};

export default ProfileOptionModal;
