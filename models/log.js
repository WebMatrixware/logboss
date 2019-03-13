const fs = require('fs');

module.exports = {
  logfile: async (logPath) => {
    let log = {};

    log.path = logPath.toString();
    log.data = await (() => {
      return fs.promises.readFile(log.path, 'utf-8');
    })();

    return log;
  }
};
