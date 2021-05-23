import React, { useState, useEffect } from "react";
import StudentDataCard from "./components/studentCard/StudentCard";
import styles from "./App.module.css";



function App() {
    
  const [studentData, setStudentData] = useState([]);
  async function fetchUrl(url) {
    const response = await fetch(url);
    const newStudentData = await response.json();
    console.log(newStudentData);
    setStudentData(newStudentData.students);
  }
  useEffect(() => {
    fetchUrl(`https://api.hatchways.io/assessment/students`);
  }, []); 

   
   return (
   
   <div>
      {studentData.map((student, index) => {
        function findAverage(array) {
          let sum = 0;
          for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
          }
          let average = sum / array.length;
          return average;
        }
        const averageGrade = findAverage(student.grades);
        return (
          <StudentDataCard
            key={index}
            img={student.pic}
            firstName={student.firstName}
            lastName={student.lastName}
            email={student.email}
            company={student.company}
            skill={student.skill}
            averageGrade={averageGrade}
          />
        );
      })}
    </div>
  );
}

 

export default App;
