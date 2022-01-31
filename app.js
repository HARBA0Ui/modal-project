const btn = document.querySelector('.btn')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.modal-overlay')


btn.addEventListener('click',function(){
    overlay.classList.add('show-overlay')
})

closeBtn.addEventListener('click',function(){
    overlay.classList.remove('show-overlay')
})