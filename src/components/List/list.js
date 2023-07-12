import React from "react";
import { getMonthName } from "../../utils";

export default function list({ info, upcoming,manager }) {
  return (
    <>
    {info?.length >0 ? info.map((person, index) => {
        return (
          <div key={index} className="flex" >
            <div className="title" >
              <p className="info">Name: {person.fullName}</p>
              <p className="info">
                DOB:  {person.day}th {getMonthName(person.month)}
              </p>
              <p className="info">Event:  {person.event}</p>
              <p className="manager">Manager:  {person.Manager}</p>
            </div>
          </div>
        );
      }) : "No Event" }
      
    </>
  );
}



