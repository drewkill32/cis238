function display_HTML(){
    var myheading = "<h1>Hello, World!</h1>";
    var mytext = "<p>While it is nice to know you world, there are only some things that I am comfortable sharing in a global context. You can't alter the variable that holds this text outside of the function that contains it! Ha!</p>"

    document.write(myheading + mytext);
}
display_HTML();