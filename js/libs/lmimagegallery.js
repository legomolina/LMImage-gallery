function LMImageGallery() {

    var animationRunning = false;
    var gallery = [];
    var selectedImage = 0;

    function move() { //main function to replace large image
        $('.gallery-item-expanded-image img').animate({opacity: 0}, 200);
        setTimeout(function () {
            $('.gallery-item-expanded-image img')[0].src = gallery[selectedImage].src;
            $('.gallery-item-expanded-image img')[0].title = gallery[selectedImage].title;
            $('.gallery-item-expanded-image img')[0].alt = gallery[selectedImage].alt;
        }, 200);
        $('.gallery-item-expanded-image img').animate({opacity: 1}, 200, function () {
            animationRunning = false;
        });
    }

    $('.gallery-item').each(function (i) { //creates an array with information about each image of the gallery
        gallery[i] = {src: $(this).children('img').attr("src"), title: $(this).children('img').attr("title"), alt: $(this).children('img').attr("alt")};
    });

    this.previous = function () {
        if (!animationRunning) { //if there is not other animation running (prevent multiple clicks)

            animationRunning = true; //indicates that's there is an animation in progress
            if (selectedImage - 1 <= 0) { //if previous image doesn't exists equals to the beginning of array
                selectedImage = 0;
            }
            else {
                selectedImage--;
            }

            move(); //calls main function to change image
        }
    };

    this.next = function () {
        if (!animationRunning) { //if there is not other animation running (prevent multiple clicks)

            animationRunning = true; //indicates that's there is an animation in progress
            if (selectedImage + 1 >= gallery.length - 1) { //if next image doesn't exists equals to the end of array
                selectedImage = gallery.length - 1;
            }
            else {
                selectedImage++;
            }

            move(); //calls main function to change image
        }
    };

    this.close = function () {
        $('#gallery-item-expanded-container').fadeOut(600); //hide large image and show the scrollbar
        $('body').css("overflow", "auto");
    };

    this.newTab = function () {
        window.open(gallery[selectedImage].src); //open the imgage in new tab
    };

    this.open = function (image) {
        var src = image.attr("src"); //take the src, alt and title attributes for large image
        var alt = image.attr("alt");
        var title = image.attr("title");

        selectedImage = parseInt(image.data("image")); //takes the clicked image from data-image attribute

        $('#gallery-item-expanded-container').fadeIn(600); //open large image and sets src, alt and title attributes
        $('.gallery-item-expanded-image img')[0].src = src;
        $('.gallery-item-expanded-image img')[0].alt = alt;
        $('.gallery-item-expanded-image img')[0].title = title;
        $('body').css("overflow", "hidden");
    };
}