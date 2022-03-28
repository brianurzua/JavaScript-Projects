function getReceipt() {
    //This function will keep track of order that turns into the full reciept
    var text1="<h3>You Ordered:</h3><p>";
    var runningTotal = 0;
    var sizeTotal=0;
    var sizeArray=document.getElementsByClassName("size");
    for (var i=0; i<sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize=sizeArray[i].value;
            text1+= selectedSize+"</p>";
        }
    }
    
    if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    //Subtotal is kept in console
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00"); 
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function.
    getTopping(runningTotal,text1);
};


//This functions gets toppings adds them into an array and then gets the total based on toppings ordered. 
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    text1 += "<h3>Added Sauces and Toppings:</h3><p>"
    for (var j = 0; j< toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 += toppingArray[j].value+"<br>";
        }
    }
    text1 += "</p>"
    var toppingCount=selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }
    else {
        toppingTotal=0;
    }
    //Keeps adding toppings to the console
    runningTotal += toppingTotal;
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    //print total and all toppings into the reciept
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};