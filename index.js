

function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  // if (window.NodeList && !NodeList.prototype.forEach) {
  //     NodeList.prototype.forEach = function (callback, thisArg) {
  //         thisArg = thisArg || window;
  //         for (var i = 0; i < this.length; i++) {
  //             callback.call(thisArg, this[i], i, this);
  //         }
  //     };
  // }

  let rankedLists = document.querySelectorAll('.ranked-list li')
  rankedLists.forEach(function(el){
     el.innerHTML = (parseInt(el.innerHTML) + n)
  })

}
