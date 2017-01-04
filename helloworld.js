// add style to body
document.body.style.border = "5px solid red";

// add a new element to the DOM after body
var p = document.createElement("p");
p.textContent = "Hello World! This paragraph was added by a content script.";
document.body.insertBefore(p, document.body.firstChild);