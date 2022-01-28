function onEdit(event) {
  let ss =SpreadsheetApp.getActiveSpreadsheet();
  let sheet=ss.getSheets()[0];
  let range=sheet.getRange("A2:H100");
  range.sort([ {column: 8, ascending: false}, {column:2, ascending: true} ]);
}
