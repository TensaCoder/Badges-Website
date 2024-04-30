import React, { useState } from "react";
import axios from "axios";
import "./SearchBadges.css";
import Navbar from "../../Components/Navbar";

const SearchBadges = () => {
  const [userId, setUserId] = useState("");
//   const [userData, setUserData] = useState();
  const [isUserFound, setIsUserFound] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

//   let res = [
//     {
//       id: { $oid: "66308ed419bb9d07658b9033" },
//       userid: "1234567890",
//       username: "XYZ",
//       dob: "01-01-2000",
//       email: "xyz@gmail.com",
//       phone_number: { $numberDouble: "9999999999.0" },
//       role_title: "Cyber Investigator",
//       badge_name: "Internship",
//       verticals: ["Dark Web", "Red Teaming", "OSINT"],
//       start_date: "01-01-2024",
//       end_date: "01-04-2024",
//       duration: { $numberInt: "3" },
//       badgeid: "6478720881",
//       badge_type: "Silver",
//       recommendations: "Anything",
//       createdAt: { $date: { $numberLong: "1714458324995" } },
//       updatedAt: { $date: { $numberLong: "1714458324995" } },
//       _v: { $numberInt: "0" }
//     },
//     {
//       id: { $oid: "66308ed419bb9d07658b9034" },
//       userid: "1234567890",
//       username: "XYZ",
//       dob: "01-01-2000",
//       email: "xyz@gmail.com",
//       phone_number: { $numberDouble: "9999999999.0" },
//       role_title: "Cyber Investigator",
//       badge_name: "Course",
//       verticals: ["Some Random Course"],
//       start_date: "01-02-2024",
//       end_date: "01-03-2024",
//       duration: { $numberInt: "1" },
//       badgeid: "9949575471",
//       badge_type: "Bronze",
//       recommendations: "Something",
//       createdAt: { $date: { $numberLong: "1714458324997" } },
//       updatedAt: { $date: { $numberLong: "1714458324997" } },
//       _v: { $numberInt: "0" }
//     }
//   ];
  
  const handleSearch = async () => {
    setIsValidInput(/^\d{10}$/.test(userId)); // Check if userId is a valid 10-digit number

    try {
      const response = await axios.get(`http://localhost:8000/user/${userId}`); // Send user ID in the request body

      let userData = response.data;
      setIsUserFound(true);
      console.log(userData)
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsUserFound(false);
    }
  };

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
    <Navbar/>
    <div className={`search-bar-container ${isUserFound ? "user-found" : ""}`}>
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Enter 10-digit User ID"
        value={userId}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      {!isValidInput && (
        <div className="error-message-block">
          {" "}
          Invalid input. Please enter a valid 10-digit User ID{" "}
        </div>
      )}

      {isUserFound && (
        <div className="user-data-container">
          {/* Render Internship/Employment and Courses components here */}
          {/* <InternshipEmploymentComponent data={userData.internshipEmployment} /> */}
          {/* <CoursesComponent data={userData.courses} /> */}
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default SearchBadges;
