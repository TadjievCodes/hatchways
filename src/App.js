import React, { useState, useEffect } from "react";
import StudentDataCard from "./components/studentCard/StudentCard";
import styles from "./App.module.css";
import ContentFilter from "./components/contentFilter/ContentFilter";


function App() {
    
  const [studentData, setStudentData] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);
  const [filterContent, setFilterContent] = useState([]);

  const addTag = (str, index) => {
    const tagForStudentData = [...studentData];
    tagForStudentData[index].tags.push(str);
    setStudentData(tagForStudentData);
  };

  // filter functions for sorting the content

  const nameFilterFunction = str => {
    let newNameFilter = [];
    studentData.map(student => {
      const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
      if (fullName.includes(str)) {
        newNameFilter.push(student);
      }
    });
   setFilterContent(newNameFilter);
  };

  const tagFilterFunction = str => {
    if (str) {
      let newTagFilter = [];
      filterContent.map(student => {
        let tagged = false;
        student.tags.map(tag => {
          if (tag.includes(str)) {
            tagged = true;
          }
        });
        if (tagged) {
          newTagFilter.push(student);
        }
      });
      setFilterContent(newTagFilter);
    } else {
      setFilterContent(studentData);
    }

  }; 

  // api call with async await
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
       <div className={styles.App}>
      <div className={styles.contentContainer}>
        <ContentFilter filterFunction={nameFilterFunction} type={`name`} />
        {nameFilter.map((student, index) => {
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
              grades={student.grades}
              averageGrade={averageGrade}
            />
          );
        })}
      </div>
    </div>
  </div> 
  );
}

 

export default App;
