import React, { useState, useEffect } from "react";
import StudentDataCard from "./components/studentCard/StudentCard";
import styles from "./App.module.css";
import ContentFilter from "./components/contentFilter/ContentFilter";


function App() {
    
  const [studentData, setStudentData] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);

  const nameFilterFunction = str => {
    let newNameFilter = [];
    studentData.map(student => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(str)) {
        newNameFilter.push(student);
      }
    });
    setNameFilter(newNameFilter);
  };

  async function fetchUrl(url) {
    const response = await fetch(url);
    const newStudentData = await response.json();
    console.log(newStudentData);
    setStudentData(newStudentData.students);
    setNameFilter(newStudentData.students);
  }

  useEffect(() => {
    fetchUrl(`https://api.hatchways.io/assessment/students`);
  }, []); 

   
   return (
   
   <div>
       

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
