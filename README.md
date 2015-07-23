# LMImage-gallery (v1.0)

##### Introduction
LMImage Gallery is a little project to bring people an easy to use and fast image gallery for their sites.<br />This library uses a lot of CSS3 functionalities so take attention to the browser you usually use. This gallery can be used with mouse or with arrow keys and it is fully responsive, so you can use it in any device.

##### Installation
<b>This library needs <a href="https://jquery.com/" target="_blank">Jquery</a> to use it.</b><br />
```javascript
    <script src="jquery.js" type="text/javascript"></script>
```
To use LMWeb Finder you need to import js file into your html:
```javascript
    <script src="js/libs/lmimagegallery.js" type="text/javascript"></script>
```
Also you need to create a script into your html head in order to assign functions to key arrows, icons and instance the library:
```javascript
    <script>
        window.onload = function () {
            
            LMImageGallery = new LMImageGallery(); //create a instance of library to use controls
            
            window.onkeydown = function (e) { //when anykey is pressed
               if(e.keyCode === 37) { //left arrow
                   LMImageGallery.previous();
               }
               
               if(e.keyCode === 39) { //right arrow
                   LMImageGallery.next();
               }
               
               if(e.keyCode === 38) { //up arrow
                   LMImageGallery.newTab();
               }
               
               if(e.keyCode === 40) { //down arrow
                   LMImageGallery.close();
               }
            };
            
            $('.gallery-item img').click(function (e) { //when image is clicked
                LMImageGallery.open($(this));
            });
            
            $('#prev_image').click(function (e) { //previous button
                LMImageGallery.previous();
            });
            
            $('#next_image').click(function (e) { //next button
                LMImageGallery.next();
            });
            
            $("#open_large").click(function (e) { //open large image button
                LMImageGallery.newTab();
            });
            
            $('#close_image').click(function (e) { //close button
                LMImageGallery.close();
            });
        };
    </script>
```
<br />
Second you need to create a gallery container, the element where you'll place your images (this <b>MUST BE</b> an ul tag):
```html
<ul class="gallery-container">
</ul>
```
And inside it you can add many items as you want:
```html
<ul class="gallery-container">
    <li class="gallery-item"><img data-image="0" src="images/image1.jpg" alt="Image number 1" title="Image number 1"></li>
    <li class="gallery-item"><img data-image="1" src="images/image2.jpg" alt="Image number 2" title="Image number 2"></li>
</ul>
```
It's important that this items are li elements and they contain img elements with correlative data-image number. The src attribute can point anywhere in your server and alt and title attributes are for cross-browser compatibility.<br />
Now you need to create the large image. This part allows you to make your images big when you click in small one.
```html
<div id="gallery-item-expanded-container" style="display: none;">
    <div class="gallery-item-expanded-black"></div>

    <div class="gallery-item-expanded-image">
        <img src="images/image1.jpg" alt="Image number 1" title="Image number 1">
    </div>

    <div class="gallery-nav-bar">
        <span class="fa fa-arrow-left fa-2x" title="Previous image" id="prev_image"></span>
        <span class="fa fa-times-circle fa-2x" title="Close view" id="close_image"></span>
        <span class="fa fa-arrow-right fa-2x" title="Next image" id="next_image"></span>
        <span class="fa fa-expand fa-2x" title="Open in new tab" id="open_large"></span>
    </div>
</div>
```
<br />
#####Configuration
As I said before you can add or remove images from the list simply adding or removing li items with it's image. Also you can enable or disable keyboard controls deleting next lines: 
```javascript
window.onkeydown = function (e) { //when anykey is pressed
   if(e.keyCode === 37) { //left arrow
       LMImageGallery.previous();
   }
   
   if(e.keyCode === 39) { //right arrow
       LMImageGallery.next();
   }
   
   if(e.keyCode === 38) { //up arrow
       LMImageGallery.newTab();
   }
   
   if(e.keyCode === 40) { //down arrow
       LMImageGallery.close();
   }
};
```
There is an example for you to view how it works.<br />The complete code to place in your html is in index.html file.<br /><br />
All images are extrated from "Sample images" folder from Windows.<br />
Control icons are from Font Awesome. <a href="http://fortawesome.github.io/Font-Awesome/" title="Font awesome">Font Awesome by Dave Gandy</a><br />
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">LMWebFinder</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">legomolina</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional License</a>.
