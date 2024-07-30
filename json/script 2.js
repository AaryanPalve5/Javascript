const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'person.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
