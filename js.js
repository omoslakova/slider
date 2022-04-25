/* var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');
var currentImageIndex = 0;

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
var imageUrls = [];
imageUrls.push('https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
imageUrls.push('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
imageUrls.push('https://www.cnet.com/a/img/TnW_gx8ktqEt_yunuj2hCj_yTpY=/940x0/2016/12/14/8ea41d9d-2a76-4f35-9d9d-1ef472f7d9dc/car-photography-how-to.jpg');



slideImage.src = imageUrls[currentImageIndex];
showPrevBtn.disabled = true;

// function definitions
function onShowPrevBtnClick(e) {
    currentImageIndex--;
    slideImage.src = imageUrls[currentImageIndex];
    showNextBtn.disabled = false;
    
    //disable prev button if need
    if (currentImageIndex === 0 ) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick(e) {
    currentImageIndex++;
    slideImage.src = imageUrls[currentImageIndex];
    showPrevBtn.disabled = false;
 
    //disable next button if need
    if (currentImageIndex === (imageUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
} */
var slider1 = new Slider();
var slider2 = new Slider();

slider1.start('itk-slider1');
slider2.start('itk-slider2');