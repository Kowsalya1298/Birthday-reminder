import "./boardDetails.css";
import List from "../List/list";
import { today, upcoming, completed } from "../../utils";
import { useState } from "react";
import { managerNames as options } from "../../constants"
import Multiselect from 'multiselect-react-dropdown';
import ConfettiExplosion from 'react-confetti-explosion';

const BoardDetails = ({ monthCount, manager, data }) => {
  return (
    <div className="display-flex" >
      <div id="flex-column">
        <h1 style={{ textAlign: 'left', fontWeight: 800, fontSize: '25px' }} className="upcoming text-dark">Today</h1>
        <div id="site-main">
          {today(data).length > 0 && <ConfettiExplosion duration={4000} />}
          <div className="board">

            <List info={today(data)}></List>
          </div>
        </div>
      </div>

      <div id="flex-column" >
        <p style={{ textAlign: 'left', fontWeight: 800, fontSize: '25px' }} className="upcoming text-dark">Upcoming</p>
        {(monthCount.length > 0) ? (<div id="site-main">
          <div className="board">

            <List info={upcoming(data, monthCount, manager)} upcoming={true}></List>
          </div>
        </div>) : <p style={{ color: 'red', textAlign: 'left', margin: '1rem' }}>Please select month</p>}
      </div>

      <div id="flex-column" >
        <p style={{ textAlign: 'left', fontWeight: 800, fontSize: '25px' }} className="upcoming text-dark">Completed</p>
        {(monthCount.length > 0) ? (<div id="site-main">
          <div className="board">

            <List info={completed(data)} upcoming={true}></List>
          </div>
        </div>) : <p style={{ color: 'red', textAlign: 'left', margin: '1rem' }}>Please select month</p>}
      </div>

    </div>
  );
};
export default BoardDetails;
