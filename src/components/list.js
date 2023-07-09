import React from "react";
import { getMonthName } from "../utils";

export default function list({ info, upcoming }) {
  return <ul>{iterate(info, upcoming)}</ul>;
}

function iterate(data, flag) {
  if (!data) return;
  const bgColor = flag ? { backgroundColor: "#ffe66d" } : {};

  return (
    <>
      {data.map((person, index) => {
        return (
          <li key={index}>
            <div className="flex" style={bgColor}>
              <div className="title">
                <h4 className="name">{person.fullName}</h4>
                <h5 className="dob">
                  {person.day}th {getMonthName(person.month)}
                </h5>
                <p className="manager">{person.Manager}</p>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
