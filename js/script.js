window.onload = () => {
    let mainUl = document.querySelector("#main-ul");
    let btnHamburger = document.querySelector("#btn-hamburger");
    let btnHamburgerCount = 0;

    let mainNav = document.querySelector("#main-nav");
    let nameLogo = document.querySelector("#name-logo");
    let mainA = document.querySelectorAll(".main-a");
    let mainAactivated = document.querySelector("#main-a-activated");

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

    window.onscroll = () => {
        if (window.scrollY >= 50) {
            altarnate("#ffffff", "#2d2e2e", "5px solid #ffffff", "5px solid #2d2e2e");
        }

        else {
            altarnate("#2d2e2e", "#ffffff", "5px solid #2d2e2e", "5px solid #ffffff");
        }
    }

    function altarnate(c1, c2, bc1, bc2) {
        mainNav.style.background = c2;
        nameLogo.style.color = c1;

        btnHamburger.querySelectorAll("div")[0].style.background = c1;
        btnHamburger.querySelectorAll("div")[1].style.background = c1;
        btnHamburger.querySelectorAll("div")[2].style.background = c1;

        if (window.innerWidth > 1299) {
            for (let i = 0; i < mainA.length; i ++) {
                mainA[i].style.color = c1;
                mainA[i].style.borderTop = bc2;
                
                mainA[i].onmouseover = () => {
                    mainA[i].style.borderTop = bc1;
                }

                mainA[i].onmouseout = () => {
                    mainA[i].style.borderTop = bc2;
                    mainAactivated.style.borderTop = bc1;
                }
            }

            mainAactivated.style.borderTop = bc1;
        }
    }
};