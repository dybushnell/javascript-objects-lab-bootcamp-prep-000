var recipes = new Object({});

function 

function destructivelyUpdateObjectWithKeyAndValue(o, k, v){
  Object.assign(o,{[k]:v})
  return o
}

function destructivelyDeleteFromObjectByKey(o, k){
  delete (o[k])
  return o
}