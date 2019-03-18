const fs = require('fs');

module.exports = {
  logfile: async (logPath, outputPath) => {
    let log = {};

    log.path = logPath.toString();
    log.length = await countLines(log.path);
    log.data = await readData(log.path, outputPath.toString(), log.length);

    return log;
  }
};

let readData = async function readData(rpath, wpath, length) {
  return new Promise((resolve, reject) => {
    if (length <= 3) {
      resolve(fs.promises.readFile(rpath, 'utf-8'));
    } else {
      let rstream = fs.createReadStream(rpath);
      let wstream = fs.createWriteStream(wpath);
      resolve({ read: rstream, write: wstream });
    }
  });
};

let countLines = async function countLines(path) {
  return new Promise((resolve, reject) => {
    let i;
    let c = 0;

    fs.createReadStream(path).on('data', (chunk) => {
      for (i = 0; i < chunk.length; ++i) {
        if (chunk[i] === 10) {
          ++c;
        }
      }
    }).on('end', () => {
      resolve(c);
    });
  });
};
