const fs = require("fs");

const readFileWithPromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, {}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.toString());
      }
    });
  });
};

module.exports = readFileWithPromise;
