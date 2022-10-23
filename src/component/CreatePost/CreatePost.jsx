import React from "react";
import displayPic from "../../assets/Lovish_Tater.jpeg";
import "./CreatePost.css"
const CreatePost = () => {
  return (
    <div class="post_box">
      <div class="input">
        <div class="input_text">
          <img src={displayPic} alt="no image" class="profile" />
          <input type="text" placeholder="start a post" class="post_input" />
        </div>
        <div class="input_blocks">
          <div class="input_option">
            <div class="option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="lightblue"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
            </div>
            <div class="option_text">Photo</div>
          </div>
          <div class="input_option">
            <div class="option">
              <i class="bi bi-play-btn-fill" style={{color: "lightgreen"}}></i>{" "}
            </div>
            <div class="option_text">Video</div>
          </div>
          <div class="input_option">
            <div class="option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="purple"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
            </div>
            <div class="option_text">Job</div>
          </div>
          <div class="input_option">
            <div class="option">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="crimson"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
            </div>
            <div class="option_text">Write article</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
