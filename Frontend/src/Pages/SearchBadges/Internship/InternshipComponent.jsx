import React, { useState, useEffect } from "react";
import "./InternshipComponent.css";
import { badgeImages } from "./InternshipJSON";

const InternshipComponent = ({ internshipData }) => {
  //   const [internshipDuration, setInternshipDuration] = useState(0);
  const [imgURL, setImgURL] = useState("");
    let data;
  if (internshipData && internshipData.length > 0) {
    data = internshipData[0];
  }

  useEffect(() => {
    if (data.badge_type === "Bronze") {
      setImgURL(badgeImages.Bronze);
    } else if (data.badge_type === "Silver") {
      setImgURL(badgeImages.Silver);
    } else if (data.badge_type === "Gold") {
      setImgURL(badgeImages.Gold);
    } else {
      setImgURL(""); // Set default image URL if badge type is not recognized
    }
  }, [internshipData]);

//   console.log(imgURL);

  return (
    <>
      <div className="internship-container">
        <h1>Badges</h1>
        <div>
          <img src={require(`${imgURL}`)} alt="" />
          <h3>{data.badge_type}</h3>
          <div>Completed {data.duration} Months</div>
          
        </div>
      </div>
    </>
  );
};

export default InternshipComponent;
