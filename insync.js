var insync = function () {
  var elements = document.getElementsByTagName('script');

  var generate_new = function(old_node) {
    var new_node = document.createElement('script');
    new_node.type = 'text/javascript';
    new_node.innerHTML = old_node.innerHTML;
    return new_node;
  }

  for(i=0; i<elements.length; i++){
    var type = elements[i].getAttribute('type');
    if(type && type.toLowerCase() == "text/plain"){
      elements[i].parentNode.replaceChild(generate_new(elements[i]), elements[i]);
    }
  }
}
