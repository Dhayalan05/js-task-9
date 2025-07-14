var col =[];
function onLoad(){
    var quantity =document.getElementById("quantity").value;
    var option = document.getElementById("option").value;
    console.log(option)
    var text="";
    var amount="";
    var total ="";
    var price ="";
    var value=JSON.parse(localStorage.getItem('user1'));
    for (var i=0;i<value.length;i++){
        document.getElementById("option").innerHTML+='<option>'+value[i].item+'<option>';
    }

    for (var j=0;j<value.length;j++){
        if (option == value[j].item){
            price=value[j].price;
            amount= quantity *value[j].price;
            col.push(amount);
        }
    }

    for (var j=0;j<col.length;j++){
        var p = col[j];
        total = eval(total+p)
    }
     
     var data ={
        name:option,
        amount:amount,
        price:price
     }
     document.getElementById("total").value=total
    
    document.getElementById("body1").innerHTML+='<tr><td>'+data.name+'</td>'+'<td>'+data.price+'</td>'+'<td>'+data.amount+'</td><tr>';

}