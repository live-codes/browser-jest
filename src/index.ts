import expect from 'expect';
import * as jest from 'jest-mock';
import jestCircus from 'jest-circus';

const { afterAll, afterEach, beforeAll, beforeEach, describe, it, test, run } = jestCircus;

const fdescribe = describe.only;
const xdescribe = describe.skip;
const fit = test.only;
const xit = test.skip;
const xtest = test.skip;

export {
  jest,
  expect,
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  it,
  fit,
  xit,
  test,
  xtest,
  run,
};
