let sorted = document.querySelector('#sorted');
// console.log(sorted);
replaceNode = sorted.replaceChild(sorted.children[1], sorted.children[0]);
console.log(replaceNode);
sorted.appendChild(replaceNode);
