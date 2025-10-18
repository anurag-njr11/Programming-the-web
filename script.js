function  quantity () {
    var old= document.getElementById('old_price');
    var qty = document.getElementById('qty')
    const total = old.textContent*qty.value
    old.textContent=total.toFixed(2);    
}

function discount() {
           var qty = document.getElementById('qty')
           var old= document.getElementById('old_price');
           var discount_value = document.getElementById("discount");

        //    if they try to apply discount without entering quantity
            if (!qty.value|| qty.value<=0) {
                alert("Please enter the quantity first")
                return;
            }

           var calc = old.textContent - (old.textContent * discount_value.value)/100; 
           old.textContent=calc.toFixed(2);  
           butter = document.getElementById('apply-discount')

        //    discount applied button appear for 2 seconds
           butter.textContent="Discount Applied"
           setTimeout(() => {
            butter.textContent = "Apply Discount";
            }, 2000);
            
           old.style.color="green"
           const vid = document.getElementById('vidmate')
        
        // if discount is more than 50% remove blur from video or else the blur is increased

           if (discount_value.value>50) {
            vid.style.filter="blur(0px)"
           }
           else {
            vid.style.filter="blur(60px)"
           }
    }         


