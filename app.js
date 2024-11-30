const body = document.querySelector('body');
const his = document.querySelector('.history');
const icon = document.getElementById('icon');
const del = document.getElementById('del');
const input = document.getElementById('input');
const ps = document.querySelector('.ps');
const trash = document.getElementById('trash');
icon.addEventListener('click', () => {
   body.classList.add('active')
})
del.addEventListener('click', () => {
   body.classList.remove('active')
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
   p.innerText += input.value
   ps.appendChild(p)
})
trash.addEventListener('click', () => {
   ps.innerHTML = ''
})
