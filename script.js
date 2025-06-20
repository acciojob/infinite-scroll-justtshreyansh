//your code here!


const ol = document.querySelector('#infi-list');

let count = 1;
function addItems(n){
  for(let i=0;i<n;i++){
    const ele = document.createElement('li');
    ele.textContent = `Item${count++}`;
    
    ol.appendChild(ele);
  }
}

addItems(10);

ol.addEventListener('scroll', () => {
    if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight) {
      addItems(2); 
    }
  });