// let sorted = document.querySelector('#sorted');
// // console.log(sorted);
// replaceNode = sorted.replaceChild(sorted.children[1], sorted.children[0]);
// console.log(replaceNode);
// sorted.appendChild(replaceNode);

document.querySelector('#sort-hi').onclick = mySort;

function mySort() {
    let sorted = document.querySelector('#sorted');
    for (let i = 0; i < sorted.children.length; i++) {
       
        for (let j = i; j < sorted.children.length; j++){
           if(+sorted.children[i].getAttribute('data-sort') > +sorted.children[j].getAttribute('data-sort')){
            replaceNode = sorted.replaceChild(sorted.children[j], sorted.children[i]);
            insertAfter(replaceNode, sorted.children[i]);
           }
        }
        
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.mextSibling);
}