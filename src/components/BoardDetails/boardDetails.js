import "./boardDetails.css";
import List from "../List/list";
import { today, upcoming } from "../../utils";
import { useState } from "react";
import {managerNames as options} from "../../constants"
import Multiselect from 'multiselect-react-dropdown';

const BoardDetails = ({ birthday, monthCount, anniversary, data }) => {
  const [manager, setManager] = useState([]);
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
        <div style={{display:"flex",gap:"1rem"}} >
        <label style={{alignSelf: "center"}}>
             Filter By Manager
            </label>
            <Multiselect
              options={options}
              showCheckbox={true}
              hidePlaceholder={true}
              onSelect={(e) => {
                e.map((x, i) => {
                  setManager(manager.concat(e[i].name))
                })
              }}
              onRemove={(e) => {
                manager.length > 0 ? setManager(e.map(x=>x.name)) : setManager([])
              }}
              displayValue="name"
            />
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
