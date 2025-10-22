var inp = document.getElementById('input');
inp.addEventListener('input',function(){
    var length = inp.value.length
    var ans = document.getElementsByTagName('h3')[0]
    ans.textContent="Characters count: "+length
    var but = document.getElementById('butter')
    if (length>90){
    ans.style.color='red'}
    if (length>99) {
        butter.disabled = true
    }
})
