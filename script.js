var user= [];
function page(){
    var item= document.getElementById('item').value;
    var price= document.getElementById('price').value;
    console.log(item, price);

    if (item== '') {
        alert('Enter a Item')
    }

    else if (price== '') {
        alert('Enter a price')
    }

    else {
        var data= {
            item: item,
            price: price
        }

        console.log(data);
        user.push(data);
        console.log(user)
        localStorage.setItem('user1', JSON.stringify(user));
        var item=document.getElementById('item').value = "";
        var price=document.getElementById('price').value = "";

    }
}
   

     function home(){
        location.replace('home.html')
     }
     function bill(){
        location.replace('billing.html')
     }