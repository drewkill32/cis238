function display_HTML(){
    var myheading = "<h1>Hello, World!</h1>";
    var mytext = "<p>While it is nice to know you world, there are only some things that I am comfortable sharing in a global context. You can't alter the variable that holds this text outside of the function that contains it! Ha!</p>"

    document.write(myheading + mytext);
}


function get_trans(transMethod,ticketPrice,numPassengers){
    window.alert(numPassengers + " people can travel by " + transMethod + " for $" + ticketPrice);
}

display_HTML();
get_trans("train",59.99,10);