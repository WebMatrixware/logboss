const fs = require('fs');

module.exports = {
  logfile: async (logPath) => {
    let log = {};

    log.path = logPath.toString();
    log.data = await (() => {
      return fs.promises.readFile(log.path, 'utf-8');
    })();
    log.length = await countLines(log.path);

    return log;
  }
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
