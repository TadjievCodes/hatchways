import React from "react";
import styles from "./ContentFilter.module.css";

const ContentFilter = ({ filterFunction, type }) => {
  return (
    <input
      placeholder={`Search by name`}
      onChange={e => {
        filterFunction(e.target.value.toLowerCase().trim());
      }}
    />
  );
};
export default ContentFilter;