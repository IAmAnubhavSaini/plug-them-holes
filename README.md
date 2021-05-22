# plug-them-holes

Library for plugging holes in an array - Node module

## Changes

- using main branch
- using typescript
- using /src directory for code and test

## Usage

```javascript

  > var pth = require('plug-them-holes')

  > pth
  [Function: plugThemHoles]

  > pth([1, 2, 3, ,,,, 4])
  [ 1, 2, 3, 4 ]

  > pth([1, 2, 3, ,,[1, 2, 3],, 4])
  [ 1, 2, 3, [ 1, 2, 3 ], 4 ]

  > pth([1, 2, 3, ,,[1, 2,,,,,,,,,,,,[1, 2, 3],,,,, 3],, 4])
  [ 1, 2, 3, [ 1, 2, [ 1, 2, 3 ], 3 ], 4 ]

```

Also, look into spec/index.spec.js for usage.

## License

MIT &copy; 2018 Git Faf
