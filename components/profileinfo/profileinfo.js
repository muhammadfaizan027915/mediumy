import React from "react";
import style from "./profileinfo.module.css";

export default function Profileinfo({ profileInfo, infoContainerClass }) {
  return (
    <div className={`flex ${style.profileContainer} ${infoContainerClass}`}>
      <div className={`flex spacebetween ${style.profileDetail}`}>
        <div className={style.profileUser}>
          <h1>Muhamad Faizan</h1>
          <div className={`flex align-center ${style.experienceTags}`}>
            <span>Admin</span>
            <span>Speaker</span>
            <span>AWS</span>
          </div>

          <div className={style.currentPosition}>
            <p>
              MERN Stack Developer at <strong>Devsic</strong>
            </p>
            <p className={`flex align-center ${style.companyLocation}`}>
              <span class="material-symbols-outlined">location_on</span>
              102 China Rd, I-10/3, Islamabad, Pakistan
            </p>
          </div>
        </div>
      </div>

      <div className={`flex ${style.postsAndPosts}`}>
        <div className={`flex align-center`}>
          <strong>440</strong>
          <p>Posts</p>
        </div>
        <div className={`flex align-center`}>
          <strong>3M</strong>
          <p>Views</p>
        </div>
        <div className={`flex align-center center`}>
          <a href="tell:03175659371 ">Call Now</a>
        </div>
      </div>
    </div>
  );
}
