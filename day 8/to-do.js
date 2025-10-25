let button = document.querySelector('#add')

button.addEventListener('click', function(){    
    let tasks = document.querySelector('#task')
    let input = document.querySelector('#inp').value
    
    let check = document.createElement('input')
    check.type='checkbox'
    check.className='chek'
    
    let li = document.createElement('li')
    li.textContent=input
    li.appendChild(check)
    
    
    
    let remove = document.createElement('p')
    remove.textContent='❌'
    remove.style.cursor='pointer'
    remove.className='rem'
    
    li.appendChild(remove)
    tasks.appendChild(li)
    remove.addEventListener('click', function(){
        tasks.removeChild(li)
    })
    check.addEventListener('change', function (){
        li.style.textDecoration='line-through'
    })
})
