const fs = require('fs');
const XLSX = require('xlsx');

// Replace 'your-excel-file.xlsx' with the path to your Excel file
const excelFilePath = 'C:\\Users\\Dharmendra\\OneDrive\\Desktop\\git\\Transaction_Records.xlsx';

// Read Excel file
const workbook = XLSX.readFile(excelFilePath);

// Choose the sheet you want to convert (assuming the first sheet here)
const sheetName = workbook.SheetNames[0];
const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Save the JSON data to a file
fs.writeFileSync('output.json', JSON.stringify(excelData, null, 2));

console.log('Conversion completed. JSON data saved to output.json');