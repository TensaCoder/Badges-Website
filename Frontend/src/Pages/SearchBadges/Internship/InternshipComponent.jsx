import React, { useState, useEffect } from "react";
import "./InternshipComponent.css";
import { badgeImages } from "./InternshipJSON";

const InternshipComponent = ({ internshipData }) => {
  //   const [internshipDuration, setInternshipDuration] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [boxShadow, setBoxShadow] = useState("");
  const [badgeTextColor, setBadgeTextColor] = useState("");
  let data;
  if (internshipData && internshipData.length > 0) {
    data = internshipData[0];
  }

  console.log(data.badge_type);

  useEffect(() => {
    let boxShadow = ""; // Define boxShadow variable
    let textColorValue = "";
    if (data.badge_type === "Bronze") {
      setImgURL(badgeImages.Bronze);
      boxShadow = "0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px #cd7f32";
      textColorValue = "#cd7f32";
    } else if (data.badge_type === "Silver") {
      console.log(badgeImages.Silver);
      setImgURL(badgeImages.Silver);
      boxShadow = "0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px #A5BAE7";
      textColorValue = "#A5BAE7";
    } else if (data.badge_type === "Gold") {
      setImgURL(badgeImages.Gold);
      boxShadow = "0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px gold"; 
      textColorValue = "gold";
    } else {
      setImgURL(""); // Set default image URL if badge type is not recognized
    }

    setBoxShadow(boxShadow);
    setBadgeTextColor(textColorValue);
  }, [internshipData]);

  console.log(imgURL);

  return (
    <>
      <div className="internship-container">
        <h1>Badges</h1>
        <div className="badge-info" style={{ boxShadow: boxShadow }}>
        {imgURL && <img src={require(`${imgURL}`)} alt="" />}
          <h3 style={{ color: badgeTextColor }}>{data.badge_type}</h3>
          <p>Completed {data.duration} Months</p>
        </div>
      </div>
    </>
  );
};

export default InternshipComponent;
