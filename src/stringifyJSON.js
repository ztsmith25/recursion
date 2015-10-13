// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var inArray = [];
    for (var i = 0; i < obj.length; i++) {
      inArray.push(stringifyJSON(obj[i]));
    }
    return '[' + inArray.join(',') + ']';
  } else if (obj && typeof obj === 'object') {
    var inObj = [];
    for (var key in obj) {
      if (key === 'undefined' || key === 'functions') {
        continue;
      }
      inObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + inObj.join(',') + '}';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }
};

// function stringifyJSON(json) {
//   if ((!(typeof(json) === 'object')) || ((json === null))) {
//     if (json === null) {
//       return 'null'
//     } else if (typeof(json) === 'string') {
//       return '"' + json.toString() + '"';
//     } else if (json === undefined) {
//       return 'undefined';
//     } else {
//       return json.toString();
//     }
//   } else if (Array.isArray(json)) {
//     if (json.length === 0) {
//       return '[]';
//     }
//     var str = '[';
//     for (var i = 0; i < json.length; i++) {
//       if (i === 0) {
//         str += stringifyJSON(json[i]);
//       } else {
//         str += ',' + stringifyJSON(json[i]);
//       }
//     }
//     str += ']';
//     return str;
//   } else {
//     if (Object.keys(json).length === 0) {
//       return '{}';
//     } else {
//       var obj = '{';
//       var count = 0;
//       for (var key in json) {
//         if ((!(typeof(json[key]) == 'function')) && (!(typeof(json[key]) == 'undefined'))) {
//           if (count === 0) {
//             obj += '"' + key + '"' + ':' + stringifyJSON(json[key]);
//           } else {
//             obj += ',' + '"' + key + '"' + ':' + stringifyJSON(json[key]);
//           }
//           count++;
//         }
//       }
//       obj += '}';
//       return obj;
//     }
//   }
// }
