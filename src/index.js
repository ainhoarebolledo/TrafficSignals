const csvFilePath = 'señalizacion_vertical.csv'
const csv = require('csvtojson');
(async () => {
  const jsonObj = await csv().fromFile(csvFilePath)
  console.log(jsonObj);
  return JSON.stringify(jsonObj)
})();

