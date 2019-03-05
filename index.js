
const TO_STRING = Object.prototype.toString;
let getType = (value) => {
    return TO_STRING.call(value).replace(/^\[object\s|\]/g, '');
};

const TYPES = [
    'Null',
    'Undefined',
    'Boolean',
    'Number',
    'String',
    'Object',
    'Array',
    'Function',
    'Map',
    'Set',
    'Symbol'
];

let createMethods = function () {
    let obj = {};
    TYPES.forEach(name => {
        const key = `is${name}`;
        obj[key] = val => getType(val) === name;
    });
    return obj;
};

export default {
    getType,
    isDom: (val) => getType(val) === 'HTMLDivElement',
    ...createMethods()
}
