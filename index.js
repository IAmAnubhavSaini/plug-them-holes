const notAHole = x => 0 in [x]

const plugThemHoles = array => array.filter(notAHole).map(x => Array.isArray(x) ? plugThemHoles(x) : x)

module.exports = plugThemHoles
