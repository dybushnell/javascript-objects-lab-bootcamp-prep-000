var recipes = new Object({});

function updateObjectWithKeyAndValue(o, k, v){
  var newO = new Object({});
  Object.assign(newO,{[k]:v})
  return newO
}

function destructivelyUpdateObjectWithKeyAndValue(o, k, v){
  Object.assign(o,{[k]:v})
  return o
}

function destructivelyDeleteFromObjectByKey(o, k){
  delete (o[k])
  return o
}