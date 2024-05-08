import React, { useState, useEffect } from "react";
import "./CoursesComponent.css";
import { courseImages } from "./CoursesJSON"; // Import the courseImages object

const CoursesComponent = ({ coursesData }) => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    let data;
    if (coursesData && coursesData.length > 0) {
      data = coursesData[0];
      console.log(data.verticals);
      // Accumulate course data in a temporary array of objects
      const tempCourseData = [];
      for (let i = 0; i < data.verticals.length; i++) {
        const courseName = data.verticals[i];
        if (courseImages.hasOwnProperty(courseName)) {
          tempCourseData.push({
            name: courseName,
            imageURL: courseImages[courseName],
          }); // Push object with name and imageURL
        } else {
          // Handle the case when the course name is not found in courseImages
          console.log(`Image path not found for course: ${courseName}`);
        }
      }
      // Update state once with the entire array of course data
      setCourseData(tempCourseData);
    }
  }, [coursesData]);

  console.log(courseData);

  return (
    <>
      <div className="course-container">
        <h1>Courses</h1>
        <div>
          {courseData.map((item) => (
            <div key={item.name}>
              <img src={require(`${item.imageURL}`)} alt="Course Image" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesComponent;
