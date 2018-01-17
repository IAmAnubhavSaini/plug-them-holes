const plugThemHoles = require('../index')
const expect = require('chai').expect

describe('plug them holes', () => {
  it('removes holes from array', () => {
    const strainer = [1, 2, 3, , , , , , , 10]
    const expected = [1, 2, 3, 10]
    const expectedLength = 4
    const actual = plugThemHoles(strainer)

    expect(actual).to.deep.equal(expected)
    expect(actual.length).to.equal(expectedLength)
  })

  it('removes holes from array containing array', () => {
    const strainer = [1, 2, 3, , , , [11, 12, , [100, 101, ,,,,,,, 200], , 16], , , 10]
    const expected = [1, 2, 3, [11, 12, [100, 101, 200], 16], 10]
    const expectedLength = 5
    const actual = plugThemHoles(strainer)

    expect(actual).to.deep.equal(expected)
    expect(actual.length).to.equal(expectedLength)
  })
})
