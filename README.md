# typeis
Test data type

support:  
  isNull();  
  isUndefined();  
  isBoolean();  
  isNumber();  
  isString();  
  isObject();  
  isArray();  
  isFunction();  
  isMap();  
  isSet();  
  isSymbol();  
  isDom();  
  // return true or false  
    
    
  getType();  
  // return dataType  
  
example:  
  import Type from 'typeis';  
  console.log(Type.isObject('fdf')); // result: false  
  console.log(Type.isObject({ name: 'name1'})); // result: true  
  console.log(Type.getType('fewf')); // result: String
