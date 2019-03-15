'use strict';

const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();

const Log = require('./../models/log.js');

describe('log', () => {

  it('should return a new log object', () => {
    const l = Log.logfile('./test/fixtures/short-test.log');

    expect(l).to.be.an.object();
  });

  it('should have a path property that equals the path passed in', async () => {
    const l = await Log.logfile('./test/fixtures/short-test.log');

    expect(l).to.contain({path: './test/fixtures/short-test.log'});
  });

  it('should have a data property', async () => {
    const l = await Log.logfile('./test/fixtures/short-test.log');

    expect(l.data).to.exist();
  });

  it('should read the file in path and store the data in the data property if line length is 3 or less', async () => {
    const l = await Log.logfile('./test/fixtures/short-test.log');

    if (l.length <= 3) {
      expect(l.data).to.satisfy(() => {
        return (l.data === '1) test-test-test\n2) test-test-test\n3) test-test-test\n' || l.data === '1) test-test-test\r\n2) test-test-test\r\n3) test-test-test\r\n' ? true : false);
      });
    }
  });

  it('should count log line length accurately', async () => {
    const l = await Log.logfile('./test/fixtures/short-test.log');

    expect(l.length).to.equal(3);
  });
});
