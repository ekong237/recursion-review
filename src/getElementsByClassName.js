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
        
        for (var j = 0; j <= node.classList.length-1; j++){
          

          if (node.classList[j] === className){
            
            nodes.push(node);
            
          }
        }     
    } 
    if (node.childNodes){
        for (var i = 0; i < node.childNodes.length-1; i++){
          return getElementsByClassName(className, node.childNodes[i]);
        }
    }
      
    
  
  return nodes;
  
};

var expectedNodeList = document.getElementsByClassName(className);
console.log(expectedNodeList);
