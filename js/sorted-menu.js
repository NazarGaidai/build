document.querySelector('#sort-low').onclick = mySort;

function mySort() {
    let sorted = document.querySelector('#sorted');
    for (let i = 0; i < sorted.children.length; i++) {
       
        for (let j = i; j < sorted.children.length; j++){
           if(parseInt(sorted.children[i].getAttribute('data-sort')) > parseInt(sorted.children[j].getAttribute('data-sort'))){
            let replaceNode = sorted.replaceChild(sorted.children[j], sorted.children[i]);
            insertAfter(replaceNode, sorted.children[i]);
           }
        }
        
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

document.querySelector('#sort-hi').onclick = mySortReverse;

function mySortReverse() {
    let sorted = document.querySelector('#sorted');
    for (let i = 0; i < sorted.children.length; i++) {
        for (let j = i; j < sorted.children.length; j++) {
            if (parseInt(sorted.children[i].getAttribute('data-sort')) < parseInt(sorted.children[j].getAttribute('data-sort'))) {
                let replaceNode = sorted.replaceChild(sorted.children[j], sorted.children[i]);
                insertAfter(replaceNode, sorted.children[i]);
            }
        }
    }
}