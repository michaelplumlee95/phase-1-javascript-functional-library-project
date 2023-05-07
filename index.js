//myEach function
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

//myMap function
function myMap(collection, callback) {
  if (Array.isArray(collection)) {
    const newArray = [];
    for (let i = 0; i < collection.length; i++) {
      newArray.push(callback(collection[i], i, collection));
    }
    return newArray;
  } else {
    const newObject = {};
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        newObject[key] = callback(collection[key], key, collection);
      }
    }
    return Object.values(newObject);
  }
}

//myReduce
function myReduce(collection, callback, initialValue) {
  let accumulator =
    initialValue !== undefined
      ? initialValue
      : collection[Object.keys(collection)[0]];
  const startIndex = initialValue !== undefined ? 0 : 1;

  if (Array.isArray(collection)) {
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  } else if (typeof collection === "object") {
    const keys = Object.keys(collection);
    for (let i = startIndex; i < keys.length; i++) {
      const key = keys[i];
      accumulator = callback(accumulator, collection[key], collection);
    }
  }

  return accumulator;
}

//myFind function
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

//myFilter Function
function myFilter(collection, callback) {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i], i, collection)) {
      result.push(collection[i]);
    }
  }
  return result;
}

//mySize Function
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

//myFirst
function myFirst(collection, n = 1) {
  if (Array.isArray(collection)) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  } else {
    let firstN = {};
    let count = 0;
    for (const key in collection) {
      if (count === n) {
        break;
      }
      firstN[key] = collection[key];
      count++;
    }
    return firstN;
  }
}

//myLast function
function myLast(collection, n) {
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }

  if (n === undefined) {
    return collection[collection.length - 1];
  }

  return collection.slice(Math.max(collection.length - n, 0));
}

//myKeys function
function myKeys(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

//myValues function
function myValues(collection) {
  const values = [];
  for (const key in collection) {
    if (collection.hasOwnProperty(key)) {
      values.push(collection[key]);
    }
  }
  return values;
}
