window.onload = () => {
    let mainUl = document.querySelector("#main-ul");
    let btnHamburger = document.querySelector("#btn-hamburger");
    let btnHamburgerCount = 0;

    let btnLeftSlider = document.querySelector("#btn-left-slider");
    let btnRightSlider = document.querySelector("#btn-right-slider");
    let txtGroup = document.querySelectorAll(".txt-group");
    let circles = document.querySelectorAll(".circles");
    let circlesCount = 0;

    btnHamburger.onclick = () => {
        if (btnHamburgerCount == 0) {
            mainUl.style.animation = "navUlright 0.3s linear forwards";

            btnHamburgerCount = 1;
        }

        else {
            mainUl.style.animation = "navUlleft 0.3s linear forwards";

            btnHamburgerCount = 0;
        }
    };

    btnRightSlider.onclick = () => {
        circlesCount += 1;

        if (circlesCount > 2) {
            circlesCount = 0;
        }

        txtGroupDisplay();
    };

    btnLeftSlider.onclick = () => {
        circlesCount -= 1;

        if (circlesCount < 0) {
            circlesCount = 2;
        }

        txtGroupDisplay();
    };

    circles[0].onclick = () => {
        circleSlider(0);
    }

    circles[1].onclick = () => {
        circleSlider(1);
    }

    circles[2].onclick = () => {
        circleSlider(2);
    }

    function txtGroupDisplay() {
        for (let i = 0; i < txtGroup.length; i ++) {
            txtGroup[i].classList.add("txt-group-display-off");

            circles[i].classList.remove("circle-activated");
            circles[i].classList.add("circle-disabled");
        }

        txtGroup[circlesCount].classList.remove("txt-group-display-off");
        txtGroup[circlesCount].classList.add("txt-group-display-on");

        circles[circlesCount].classList.add("circle-activated");
    }

    function circleSlider(cvar) {
        for (let c = 0; c < circles.length; c ++) {
            circles[c].classList.remove("circle-activated");
            txtGroup[c].classList.add("txt-group-display-off");
        }

        circles[cvar].classList.add("circle-activated");

        txtGroup[cvar].classList.remove("txt-group-display-off");
        txtGroup[cvar].classList.add("txt-group-display-on");

        circlesCount = cvar;
    }
};
