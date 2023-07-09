import "./board.css";
import List from "./list";
import { today, upcoming } from "../utils";

const BoardDetails = ({ birthday, monthCount, anniversary }) => {
  return (
    <div className="display-flex">
      <div id="site-main">
        {/* <h3 className="text-dark title">Birthday Reminder</h3> */}

        <div className="board">
          <List info={today(birthday)}></List>
          <h3 className="upcoming text-dark">Upcoming Birthday</h3>
          <List info={upcoming(birthday, monthCount)} upcoming={true}></List>
        </div>
      </div>
      <div id="site-main">
        {/* <h3 className="text-dark title">Anniversary Reminder</h3> */}

        <div className="board">
          <List info={today(anniversary)}></List>
          <h3 className="upcoming text-dark">Upcoming Anniversary</h3>
          <List info={upcoming(anniversary, monthCount)} upcoming={true}></List>
        </div>
      </div>
    </div>
  );
};
export default BoardDetails;
