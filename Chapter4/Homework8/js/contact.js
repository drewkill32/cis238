function display_HTML(){

 //holds the form markup in varaibles to be used in the document write line
var formStart = "<form>",
formEnd = "</form>",
image= "<!-- image from pixabay https://pixabay.com/en/contact-us-blue-button-style-1194643/-->\
    <img width='640' height='320' src='img\\contact-us.png' />",
newLine = "<br />",
name ="Name:" + newLine + "<input type='text' name='name' />" + newLine,
email ="Email:" + newLine + "<input type='text' name='email' />" + newLine,
comments= "Comments:" + newLine  +"<textarea  type='text' name='comments'></textarea>" + newLine,
submit ="<input type='submit' value='Submit' />"
//output the result to the screen
document.write(formStart);
document.write(image);
document.write(name);
document.write(email);
document.write(comments);
document.write(submit);
document.write(formEnd);

}

display_HTML();