var sliderList = document.querySelector(".slider");
var sliderItemWidth = document.querySelector(".slider__item").clientWidth;
var sliderNext = document.querySelector(".fourthSection__btn_right");
var sliderPrev = document.querySelector(".fourthSection__btn_left");
var computed = getComputedStyle(sliderList);
var step = sliderItemWidth + 80;
var screenWidth = document.body.clientWidth;

sliderNext.addEventListener('click', function(e) {
    var currentLeft = parseInt(computed.left);
    if (screenWidth < 395 && newScreenWidth < 395) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft > -step*6) {
            sliderList.style.left = currentLeft - step + "px";
        }
    }
    if (screenWidth < 790) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft > -step*5) {
            sliderList.style.left = currentLeft - step + "px";
        }
    }
    if (screenWidth < 1185) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft > -step*4) {
            sliderList.style.left = currentLeft - step + "px";
        }
    }
    if (screenWidth < 1580) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft > -step*3) {
            sliderList.style.left = currentLeft - step + "px";
        }
    } else {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft > -step*2) {
            sliderList.style.left = currentLeft - step + "px";
        }
    }
});

sliderPrev.addEventListener('click', function(e) {
    var currentLeft = parseInt(computed.left);
    if (screenWidth < 395) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft < 0) {
            sliderList.style.left = currentLeft + step + "px";
        }
    }
    if (screenWidth < 790) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft < 0) {
            sliderList.style.left = currentLeft + step + "px";
        }
    }
    if (screenWidth < 1185) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft < 0) {
            sliderList.style.left = currentLeft + step + "px";
        }
    }
    if (screenWidth < 1580) {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft < 0) {
            sliderList.style.left = currentLeft + step + "px";
        }
    } else {
        if (!currentLeft) {
            currentLeft = 0;
        }
        if (currentLeft < 0) {
            sliderList.style.left = currentLeft + step + "px";
        }
    }
});

$(window).resize(function() {
    if (sliderItemWidth != $('.slider__item').width()) {
      var currentSliderItemWidth = $(".slider__item").width();
      var newScreenWidth = $(window).width();
      var newStep = currentSliderItemWidth + 60;

    sliderNext.addEventListener('click', function(e) {
        var currentLeft = parseInt(computed.left);
        if (newScreenWidth < 395) {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft > -newStep*5+2) {
                sliderList.style.left = currentLeft - newStep + "px";
            }
        }
        if (newScreenWidth < 790) {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft > -newStep*4+2) {
                sliderList.style.left = currentLeft - newStep + "px";
            }
        }
        if (newScreenWidth < 1185) {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft > -newStep*3+2) {
                sliderList.style.left = currentLeft - newStep + "px";
            }
        } else {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft > -newStep*2+2) {
                sliderList.style.left = currentLeft - newStep + "px";
            }
        }
    });
    
    sliderPrev.addEventListener('click', function(e) {
        var currentLeft = parseInt(computed.left);
        if (newScreenWidth < 395) {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft < 0) {
                sliderList.style.left = currentLeft + newStep + "px";
            }
        }
        if (newScreenWidth < 790) {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft < 0) {
                sliderList.style.left = currentLeft + newStep + "px";
            }
        }
        if (newScreenWidth < 1185) {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft < 0) {
                sliderList.style.left = currentLeft + newStep + "px";
            }
        } else {
            if (!currentLeft) {
                currentLeft = 0;
            }
            if (currentLeft < 0) {
                sliderList.style.left = currentLeft + newStep + "px";
            }
        }
    });
  }
});