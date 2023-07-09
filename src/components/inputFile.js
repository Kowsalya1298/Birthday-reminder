import { read, utils } from "xlsx";
const FileUpload = (dataHandler) => {
  // const workbook = xlsx.readFile("./ConsolidatedAnniversaryBirthday.xlsx");
  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;
        if (sheets.length) {
          const bdays = utils.sheet_to_json(wb.Sheets[sheets[1]]);
          const ans = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          dataHandler(bdays, ans);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };
  return (
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
  );
};
export default FileUpload;
