import React, { useState } from "react";
import "./board.css";
import { read, utils, writeFile } from "xlsx";
import BoardDetails from "./boardDetails";
import { monthNames } from "../constants";
import { getMonthName, upcoming } from "../utils";

export const Board = () => {
  const [birthday, setBirthday] = useState([]);
  const [data, setData] = useState([]);
  const [anniversary, setAnniversary] = useState([]);
  const [month, setMonth] = React.useState(
    getMonthName(new Date().getMonth() + 1)
  );
  const handleImport = (event) => {
    const files = event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;
        if (sheets.length) {
          const ans = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          ans.forEach((element) => {
            element.event = "Anniversary";
          });
          const bdays = utils.sheet_to_json(wb.Sheets[sheets[1]]);
          bdays.forEach((element) => {
            element.event = "Birthday";
          });
          setData(ans.concat(bdays));
          setAnniversary(ans);
          setBirthday(bdays);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };
  console.log(data);
  const handleExport = () => {
    const headings = [["Sl No", "Full Name", "Day", "Month", "Manager"]];
    const filteredAniv = upcoming(anniversary, month);
    const filteredBday = upcoming(birthday, month);
    const wb = utils.book_new();
    const ws1 = utils.json_to_sheet([]);
    const ws2 = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws1, headings);
    utils.sheet_add_aoa(ws2, headings);
    const anivCount = filteredAniv.map((x, i) => {
      return [i + 1];
    });
    const bdayCount = filteredBday.map((x, i) => {
      return [i + 1];
    });
    filteredAniv.map(function (item) {
      delete item["SI No"];
      return item;
    });
    filteredBday.map(function (item) {
      delete item["SI No"];
      return item;
    });
    utils.sheet_add_aoa(ws1, anivCount, { origin: "A2" });
    utils.sheet_add_aoa(ws2, bdayCount, { origin: "A2" });
    utils.sheet_add_json(ws1, filteredAniv, { origin: "B2", skipHeader: true });
    utils.sheet_add_json(ws2, filteredBday, { origin: "B2", skipHeader: true });
    utils.book_append_sheet(wb, ws1, "Anniversary");
    utils.book_append_sheet(wb, ws2, "Birthday");
    writeFile(wb, "Consolidatedbdayaniv.xlsx");
  };
  return (
    <div className="main-body">
      {birthday.length === 0 && anniversary.length === 0 && (
        <div className="custom-file">
          <label style={{ marginRight: "1rem" }}>Please choose a file to proceed </label>
          <input
            type="file"
            name="file"
            className="custom-file-input"
            id="inputGroupFile"
            required
            onChange={handleImport}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
        </div>
      )}
      {birthday.length > 0 && anniversary.length > 0 && (
        <div className="">
          <div >
            <label >
              Select the month
              <select style={{ marginLeft: "1rem" }}
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              >
                {monthNames?.map((m, i) => {
                  return (
                    <option key={i} value={m}>
                      {m}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="col-md-6">
            <button style={{ margin: "1rem" }}
              onClick={handleExport}
              className="btn btn-primary float-right"
            >
              Export to Excel <i className="fa fa-download"></i>
            </button>
          </div>
          <BoardDetails
            birthday={birthday}
            anniversary={anniversary}
            data={data}
            monthCount={month}
          />
        </div>
      )}
    </div>
  );
};
