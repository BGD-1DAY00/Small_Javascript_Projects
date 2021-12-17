let increase = document.querySelector('.btn-increase')
let decrease = document.querySelector('.btn-decrease')
let reset = document.querySelector('.btn-reset')
let text = document.querySelector('.value')
let count = 0 ; 
document.body.style.backgroundColor= 'red'

increase.addEventListener('click',()=>{
  count ++; 
  text.innerHTML = count;      
})
reset.addEventListener('click',()=>{
  count = 0; 
  text.innerHTML = count
})
decrease.addEventListener('click', ()=>{
  count --; 
  text.innerHTML= count 
})