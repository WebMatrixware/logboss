'use strict';

const { expect } = require('code');
const Lab = require('lab');
const { after, before, describe, it } = exports.lab = Lab.script();

const Log = require('./../models/log.js');

describe('log', () => {

  it('should return a new log object', () => {
    const l = Log.logfile('./test.log');

    expect(l).to.be.an.object();
  });

  it('should have a path property that equals the path passed in', async () => {
    const l = await Log.logfile('./test.log');

    expect(l).to.contain({path: './test.log'});
  });

  it('should have a data property', async () => {
    const l = await Log.logfile('./test.log');

    expect(l.data).to.exist();
  });

  it('should read the file in path and store the data in the data property', async () => {
    const l = await Log.logfile('./test.log');

    expect(l.data).to.startWith('test-test-test');
  });
});
