import "./boardDetails.css";
import List from "../List/list";
import { today, upcoming } from "../../utils";
import { useState } from "react";
import {managerNames} from "../../constants"

const BoardDetails = ({ birthday, monthCount, anniversary, data }) => {
  const [manager, setManager] = useState("")
  return (
    <div className="display-flex" >
      <div id="flex-column">
        <h2 className="upcoming text-dark">Today</h2>
        <div id="site-main">

          <div className="board">

            <List info={today(data)}></List>
          </div>
        </div>
      </div>

      <div id="flex-column">
        <h2 className="upcoming text-dark">Upcoming</h2>
        <div id="site-main">
        <div >
            <label >
              Filter by Manager
              <select style={{ marginLeft: "1rem" }}
                value={manager}
                onChange={(e) => {
                  setManager(e.target.value);
                }}
              >
                {managerNames?.map((m, i) => {
                  return (
                    <option key={i} value={m}>
                      {m}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="board">

            <List info={upcoming(data, monthCount, manager)} upcoming={true}></List>
          </div>
        </div>
      </div>

    </div>
  );
};
export default BoardDetails;
