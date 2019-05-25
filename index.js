var recipes = new Object({});

function updateObjectWithKeyAndValue(o, k, v){
  Object.assign(o,{[k]:v})
  return o
}