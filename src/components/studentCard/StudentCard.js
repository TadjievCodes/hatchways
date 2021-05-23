import React from "react";
import styles from "./StudentCard.module.css";

const UserDataCard = ({
  img,
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
}) => {
  return (
    <div>
      <img src={img} alt="avatar" />
      <div>{`${firstName} ${lastName}`}</div>
      <div>Email: {email}</div>
      <div>Company: {company}</div>
      <div>Skill: {skill}</div>
      <div>Average: {averageGrade}%</div>
    </div>
  );
};

export default UserDataCard;