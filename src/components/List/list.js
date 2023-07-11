import React from "react";
import { getMonthName } from "../../utils";

export default function list({ info, upcoming }) {
  return (
    <>
    {info?.length >0 ? info.map((person, index) => {
        return (
          <div key={index} className="flex" >
            <div className="title">
              <h4 className="name">Name: {person.fullName}</h4>
              <h5 className="dob">
                DOB:  {person.day}th {getMonthName(person.month)}
              </h5>
              <p className="event">Event:  {person.event}</p>
              <p className="manager">Manager:  {person.Manager}</p>
            </div>
          </div>
        );
      }) : "No Event" }
      
    </>
  );
}



