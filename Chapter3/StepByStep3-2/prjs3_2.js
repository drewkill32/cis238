var myHeading = "<h1>This is My Web Page!</h1>",
linktag = "<a href=\"http://www.webxpertz.net\">Web Site Link!</a>",
sometext = "This text can be affected by other statements",
begineffect = "<strong>",
endeffect = "</strong>",
beginpara = "<p>",
endpara = "</p>";

document.write(myHeading);
document.write(begineffect + sometext + endeffect);
document.write(beginpara + linktag + endeffect);
document.write(beginpara + sometext + endeffect);