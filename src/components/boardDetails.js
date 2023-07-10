import "./board.css";
import List from "./list";
import { today, upcoming } from "../utils";

const BoardDetails = ({ birthday, monthCount, anniversary, data }) => {
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

          <div className="board">

            <List info={upcoming(data, monthCount)} upcoming={true}></List>
          </div>
        </div>
      </div>

    </div>
  );
};
export default BoardDetails;
