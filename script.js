//your code here!

const main = document.querySelector('main');
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

main.addEventListener('scroll', () => {
    if (main.scrollTop + main.clientHeight >= main.scrollHeight) {
      addItems(2); 
    }
  });