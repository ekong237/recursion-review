// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function(className,node){

  // create empty array to store node names
  // starting in document body (parent)
  // compare class names to see if it exists
    // add to array
  // if class name has child nodes
    // check for each child node (recursive)
  // return nodes array with matched class name
  
  var nodes = [];
  node = node || document.body;
    
    if (node.classList.contains(className)){
        nodes.push(node);
            
    } 
    Array.from(node.children).forEach(function(element){
        var childResults = getElementsByClassName(className, element);
        //console.log(childResults);
        nodes = nodes.concat(childResults);
        //console.log(nodes);
    });

    
    return nodes;
  
};
