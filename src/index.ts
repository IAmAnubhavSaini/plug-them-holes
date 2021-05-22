const notAHole = (x: any) => 0 in [x];

const remapFn = (x: any): any => Array.isArray(x) ? plugThemHoles(x) : x;

const plugThemHoles = (array: any[]): any => array.filter(notAHole).map(remapFn);

export default plugThemHoles;
