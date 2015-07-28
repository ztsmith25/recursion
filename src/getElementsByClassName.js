// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var elementList = [];
  var treeFunction = function(branch) {
    if (branch.childNodes.length === 0) {
      if((!(branch.classList === undefined)) && (branch.classList.contains(className))) {
        elementList.push(branch); //I think this is just pushing element
      }
    } else {
      var nodeArray = branch.childNodes;  //and array of all node objects
	  if((!(branch.classList === undefined)) && (branch.classList.contains(className))) {
		elementList.push(branch);  //this needs to just push element
	  }
      for(var i = 0; i < nodeArray.length; i++) {
      	console.log(nodeArray[i]);
        treeFunction(nodeArray[i]);
      }
    }
  }
  treeFunction(document.body);
  return elementList;
};
