window.onload = () => {
    let mainUl = document.querySelector("#main-ul");
    let btnHamburger = document.querySelector("#btn-hamburger");
    let btnHamburgerCount = 0;
    let backgroundOccupy = document.querySelector("#background-occupy");
    let mainNav = document.querySelector("#main-nav");
    let mainA = document.querySelectorAll(".main-a");
    let nameLogo = document.querySelector("#name-logo");

    let btnLeftSlider = document.querySelector("#btn-left-slider");
    let btnRightSlider = document.querySelector("#btn-right-slider");
    let txtGroup = document.querySelectorAll(".txt-group");
    let circles = document.querySelectorAll(".circles");
    let circlesCount = 0;

    let scrollPos = document.querySelectorAll(".scroll-pos");
    let btnBlocked = document.querySelector("#btn-blocked");
    let contentBlocked = document.querySelector("#content-blocked");

    let mainUlulCount = 0;

    btnBlocked.onclick = () => {
        contentBlocked.style.display = "block";
        btnBlocked.style.display = "none";
    };

    scrollMovePos(0, 0);

    if (window.scrollY >= 50) {
        altarnate("#ffffff", "#2d2e2e", "5px solid #ffffff", "5px solid #2d2e2e");
    }
    
    else {
        altarnate("#2d2e2e", "#ffffff", "5px solid #2d2e2e", "5px solid #ffffff");
    }

    for (let c = 0; c < mainA.length; c ++) {
        mainA[c].addEventListener("click", (event) => {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            event.target.setAttribute("id", "main-a-activated");

            if (window.scrollY >= 50) {
                altarnate("#ffffff", "#2d2e2e", "5px solid #ffffff", "5px solid #2d2e2e");
            }
            
            else {
                altarnate("#2d2e2e", "#ffffff", "5px solid #2d2e2e", "5px solid #ffffff");
            }
        });
    }

    mainA[0].addEventListener("click", () => {
        if (window.innerWidth > 0) {
            scrollMovePos(0, 0);
        }
    });

    mainA[1].addEventListener("click", () => {
        if (window.innerWidth > 1299) {
            scrollMovePos(1, 75);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(1, 80);
        }
    });

    mainA[2].addEventListener("click", () => {
        if (window.innerWidth > 1299) {
            scrollMovePos(2, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(2, -70);
        }
    });

    mainA[3].addEventListener("click", () => {
        if (window.innerWidth > 1299) {
            scrollMovePos(3, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(3, -70);
        }
    });

    mainA[4].addEventListener("click", () => {
        let mainUlul1 = document.querySelector("#main-ul li ul");
        let mainUlulli = document.querySelector("#main-ul li ul li");

        if (mainUlulCount == 0) {
            mainUlul1.style.display = "block";

            mainUlulCount = 1;
        }

        else {
            mainUlul1.style.display = "none";
            
            mainUlulCount = 0;
        }

        mainUlulli.onclick = () => {
            if (window.innerWidth > 1299) {
                scrollMovePos(4, -90);
            }
    
            else if (window.innerWidth > 0) {
                scrollMovePos(4, -70);
            }
        };
    });

    mainA[5].addEventListener("click", () => {
        if (window.innerWidth > 1299) {
            scrollMovePos(5, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(5, -70);
        }
    });

    mainA[6].addEventListener("click", () => {
        if (window.innerWidth > 1299) {
            scrollMovePos(6, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(6, -70);
        }
    });

    mainA[7].addEventListener("click", () => {
        if (window.innerWidth > 1299) {
            scrollMovePos(7, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(7, -70);
        }
    });

    function scrollMovePos(elementPos, pointPos) {
        window.scrollBy(0, scrollPos[elementPos].getBoundingClientRect().y + pointPos);
    }

    btnHamburger.onclick = () => {
        if (btnHamburgerCount == 0) {
            mainUl.style.animation = "navUlright 0.3s linear forwards";
            backgroundOccupy.style.animation = "occupyBottom 0.3s linear forwards";
            btnHamburgerCount = 1;
        }

        else {
            mainUl.style.animation = "navUlleft 0.3s linear forwards";
            backgroundOccupy.style.animation = "occupyTop 0.3s linear forwards";
            btnHamburgerCount = 0;

            // document.body.style.overflow = "auto";
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

    window.onscroll = () => {
        if (window.scrollY >= 50) {
            altarnate("#ffffff", "#2d2e2e", "5px solid #ffffff", "5px solid #2d2e2e");
        }
        
        else {
            altarnate("#2d2e2e", "#ffffff", "5px solid #2d2e2e", "5px solid #ffffff");
        }
    }

    window.onresize = () => {
        if (window.scrollY >= 50) {
            altarnate("#ffffff", "#2d2e2e", "5px solid #ffffff", "5px solid #2d2e2e");
        }
        
        else {
            altarnate("#2d2e2e", "#ffffff", "5px solid #2d2e2e", "5px solid #ffffff");
        }
    }

    function altarnate(color1, color2, border1, border2) {
        let txtLeft = document.querySelectorAll(".txt-left");
        let imgRight = document.querySelectorAll(".img-right");
        let boxSection3 = document.querySelector("#box-section3");

        mainNav.style.background = color2;
        nameLogo.style.color = color1;

        btnHamburger.querySelectorAll("div")[0].style.background = color1;
        btnHamburger.querySelectorAll("div")[1].style.background = color1;
        btnHamburger.querySelectorAll("div")[2].style.background = color1;

        for (let c = 0; c < mainA.length; c ++) {
            let mainAactivated = document.querySelector("#main-a-activated");

            if (window.innerWidth > 1299) {
                mainA[c].style.color = color1;
                mainA[c].style.borderTop = border2;
                mainAactivated.style.borderTop = border1;
                
                mainA[c].style.borderLeft = "none";

                let btnHamburgerPart = document.querySelectorAll(".as");

                for (let a = 0; a < btnHamburgerPart.length; a ++) {
                    btnHamburgerPart[a].style.transform = "rotate(0deg) translate(0, 0)";
                    btnHamburgerPart[a].style.opacity = "1";
                }

                // document.body.style.overflow = "auto";
                mainUl.style.animation = "navUlleft 0.3s linear forwards";
                backgroundOccupy.style.animation = "occupyTop 0.3s linear forwards";
                btnHamburgerCount = 0;
            }

            else {
                mainA[c].style.borderTop = "none";
                mainA[c].style.borderBottom = "none";
                mainA[c].style.borderLeft = "5px solid #ffffff";
                mainA[c].style.color = "#2d2e2e";
                mainAactivated.style.borderLeft = "5px solid #2d2e2e";
            }
        }

        if (window.innerWidth <= 600) {        
            boxSection3.removeChild(txtLeft[0]);
            boxSection3.appendChild(txtLeft[0]);
        }

        if (window.innerWidth > 600) {
            boxSection3.removeChild(imgRight[0]);
            boxSection3.appendChild(imgRight[0]);
        }
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
