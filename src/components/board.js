import React, { useState } from "react";
import "./board.css";
import { read, utils, writeFile } from "xlsx";
import BoardDetails from "./boardDetails";
import { monthNames } from "../constants";
import { getMonthName } from "../utils";

export const Board = () => {
  const [birthday, setBirthday] = useState([]);
  const [anniversary, setAnniversary] = useState([]);
  const [month, setMonth] = React.useState(
    getMonthName(new Date().getMonth() + 1)
  );
  const handleImport = (event) => {
    // const workbook = xlsx.readFile("./ConsolidatedAnniversaryBirthday.xlsx");

    const files = event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;
        if (sheets.length) {
          const ans = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          const bdays = utils.sheet_to_json(wb.Sheets[sheets[1]]);
          setAnniversary(ans);
          setBirthday(bdays);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };
  const handleExport = () => {
    const headings = [["Movie", "Category", "Director", "Rating"]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, movies, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "Movie Report.xlsx");
  };
  return (
    <>
      {birthday.length === 0 && anniversary.length === 0 && (
        <div className="custom-file">
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
        <>
          <div>
            <label>
              Select the month
              <select
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
            <button
              onClick={handleExport}
              className="btn btn-primary float-right"
            >
              Export <i className="fa fa-download"></i>
            </button>
          </div>
          <BoardDetails
            birthday={birthday}
            anniversary={anniversary}
            monthCount={month}
          />
        </>
      )}
    </>
  );
};
