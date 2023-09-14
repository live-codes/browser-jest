# Jest in Browser

This project aims to make Jest work in the browser. As used in [LiveCodes](https://github.com/live-codes/livecodes).

## Usage

ESM:

```js
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  it,
  test,
  fit,
  xtest,
  xit,
  expect,
  jest,
  run,
} from 'https://unpkg.com/@live-codes/browser-jest';

test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

run().then((results) => {
  console.log(results);
});
```

UMD:

```html
<script src="https://unpkg.com/@live-codes/browser-jest/dist/browser-jest.umd.js"></script>
<script>
  const {
    afterAll,
    afterEach,
    beforeAll,
    beforeEach,
    describe,
    fdescribe,
    xdescribe,
    it,
    test,
    fit,
    xtest,
    xit,
    expect,
    jest,
    run,
  } = window.browserJest;
</script>
```
