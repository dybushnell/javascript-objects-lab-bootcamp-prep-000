var recipes = new Object({});

function destructivelyUpdateObjectWithKeyAndValue(o, k, v){
  Object.assign(o,{[k]:v})
  return o
}

function destructivelyDeleteFromObjectByKey(o, k){
  
}