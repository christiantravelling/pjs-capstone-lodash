let _ = {

  /*clamp - takes 3 paramters, an upper and lower boundary and the number which is bound to the lower boundary
  if the number is less than the lower bound and to the upper bound if number > upper bound
  */
  clamp (number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  /*inRange - takes 3 paramters
  returns true if the number falls between the start and end parameters
  otherwise returns false
  */
  inRange(number,start,end) {
   if (!end) {
    end = start;
     start = 0;
   };
  	if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    };
    let isInRange = false;
    if (number >= start && number < end) {
      return isInRange = true;
    }
    else {isInRange = false}
    return isInRange;  
  },

/*words
takes a string arguments and returns an array of word
split by a space
*/
  words(string) {
    let words = string.split(' ')
    return words;
  },
  
 /*pad
pads the passed string with spaces to the total length
 */
  pad(string,length) {
    const stringLength = string.length;
    if (stringLength >= length) {
      return string;
    }
    let startPadding = Math.floor((length - stringLength)/2);
    let endPadding = length - (startPadding + stringLength);
    const paddedString = ' '.repeat(startPadding) + string + ' '.repeat(endPadding);
    return paddedString;
  },
  
  /*has
  checks that the passed object has a key specified in the arguments
  */
  has(object, path) {
    const hasValue = object.hasOwnProperty(path);
    //console.log(hasValue);
    if (!hasValue) {
      return false;
    }
    else {
      return true;
    }
  },
  
  /*invert
  for the passed object, reverse the key = value to value = key
  */
  invert(object){
    const invertedObject = {};
    for (var item in object) {
      let originalValue = object[item];
      invertedObject[originalValue] = item;
    };
    return invertedObject;
  },
  
  /*findKey
  iterates thro each key in the object and returns the first ket that evaluates to truthy
  */
  findKey(object, predicate) {
    for (var itemKey in object) {
      const value = object[itemKey];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return itemKey;
      };
    };
    return undefined;
  },
  
  /*drop
  drops numToDrop items from the front of the passed array
  */
  drop(array,numToDrop) {
    if (!numToDrop) {
      numToDrop = 1;
    };
    let droppedArray = array.slice(numToDrop);
    return droppedArray;
  },
  
  /*dropWhile
  returns a new array with items dropped from the front of the array where
  the predicate function returned true
  */
	dropWhile(array, predicate) {
  const dropNumber = array.findIndex(function(element, index) {
    return (!predicate(element, index, array));     })
	const droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  
  /*chunk
  returns a new array chunked into size items.
  */
  chunk(array, size) {
    if (!size) {
      size = 1;
    };
    let arrayChunks = [];
    for (var counter = 0;counter < array.length ;counter = counter + size) {
      arrayChunk = array.slice(counter, counter+size);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;