function Slider() {
    this.imageUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
    this.start = function (elId) {
        var that = this;

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        //subscribe to enents
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick();
        });

        // create images array
        this.imageUrls.push('https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
        this.imageUrls.push('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
        this.imageUrls.push('https://www.cnet.com/a/img/TnW_gx8ktqEt_yunuj2hCj_yTpY=/940x0/2016/12/14/8ea41d9d-2a76-4f35-9d9d-1ef472f7d9dc/car-photography-how-to.jpg');

        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };
    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        //disable next button if need
        if (this.currentImageIndex === (this.imageUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    };

};

