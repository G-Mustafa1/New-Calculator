const body = document.querySelector('body');
// const his = document.querySelector('.history');
const icon = document.getElementById('icon');
const del = document.getElementById('del');
const input = document.getElementById('input');
const ps = document.querySelector('.ps');
const trash = document.getElementById('trash');
const calculator = document.getElementById('calculator');
const data = document.getElementById('history1');
icon.addEventListener('click', () => {
   body.classList.add('active')
   calculator.style.display = "none"
   if(data.style.display !== "block"){
      data.style.display = "block"
   }
})
del.addEventListener('click', () => {
   body.classList.remove('active')
   calculator.style.display = "block"
   icon.style.marginLeft = '115px'
   // icon.style.marginTop = '15px'
   // icon.classList.add('fa-solid')
   // icon.classList.add('new1')
   data.style.display = 'none'
})

function btn(val) {
   input.value += val
   // console.log(val)
}
function solve() {
   let solves = input.value;
   let equal = eval(solves);
   input.value = equal
}
function clearAll() {
   input.value = ""
}
function deletNum() {
   let deletNum = input.value;
   let deletNums = deletNum.slice(0, -1);
   input.value = deletNums
}
icon.addEventListener('click', () => {
   let p = document.createElement('p');
   p.setAttribute('class', 'p1')
   p.innerText += input.value
   ps.appendChild(p)
})
trash.addEventListener('click', () => {
   ps.innerHTML = ''
})
