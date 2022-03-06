window.onload = () => {
    let mainUl = document.querySelector("#main-ul");
    let btnHamburger = document.querySelector("#btn-hamburger");
    let btnHamburgerCount = 0;
    let backgroundOccupy = document.querySelector("#background-occupy");
    let mainNav = document.querySelector("#main-nav");
    let mainA = document.querySelectorAll(".main-a");
    let nameLogo = document.querySelector("#name-logo");

    let particlesJs = document.querySelector("#particles-js");

    let btnLeftSlider = document.querySelector("#btn-left-slider");
    let btnRightSlider = document.querySelector("#btn-right-slider");
    let txtGroup = document.querySelectorAll(".txt-group");
    let circles = document.querySelectorAll(".circles");
    let circlesCount = 0;

    let scrollPos = document.querySelectorAll(".scroll-pos");

    let btnKnowMore = document.querySelectorAll(".btn-know-more");
    let btnCloseModal = document.querySelectorAll(".btn-close-modal");
    let windowModal = document.querySelectorAll(".window-modal");
    let backgroundWindowModal = document.querySelector("#background-window-modal");

    let formName = document.querySelector("#form-name");
    let formMessage = document.querySelector("#form-message");
    let btnMail = document.querySelector("#btn-mail");

    btnMail.onclick = () => {
        if (formName.value == "" || formMessage.value == "") {
            alert("Preencha todos os campos")
        }

        else {
            window.open(`mailto:contato@deskwebcode.com?subject=Criação%20de%20site&amp;body=${formName.value} aqui! ${formMessage.value}`)
        }
    }

    btnKnowMore[0].onclick = () => {
        windowModal[0].style.opacity = "1";
        windowModal[0].style.visibility = "visible";

        backgroundWindowModal.style.opacity = "1";
        backgroundWindowModal.style.visibility = "visible";
        
        document.body.style.overflow = "hidden";
    };

    btnCloseModal[0].onclick = () => {
        windowModal[0].style.opacity = "0";
        windowModal[0].style.visibility = "hidden";

        backgroundWindowModal.style.opacity = "0";
        backgroundWindowModal.style.visibility = "hidden";
        
        document.body.style.overflow = "auto";
    };

    btnKnowMore[1].onclick = () => {
        windowModal[1].style.opacity = "1";
        windowModal[1].style.visibility = "visible";

        backgroundWindowModal.style.opacity = "1";
        backgroundWindowModal.style.visibility = "visible";
        
        document.body.style.overflow = "hidden";
    };

    btnCloseModal[1].onclick = () => {
        windowModal[1].style.opacity = "0";
        windowModal[1].style.visibility = "hidden";

        backgroundWindowModal.style.opacity = "0";
        backgroundWindowModal.style.visibility = "hidden";
        
        document.body.style.overflow = "auto";
    };

    btnKnowMore[2].onclick = () => {
        windowModal[2].style.opacity = "1";
        windowModal[2].style.visibility = "visible";

        backgroundWindowModal.style.opacity = "1";
        backgroundWindowModal.style.visibility = "visible";
        
        document.body.style.overflow = "hidden";
    };

    btnCloseModal[2].onclick = () => {
        windowModal[2].style.opacity = "0";
        windowModal[2].style.visibility = "hidden";

        backgroundWindowModal.style.opacity = "0";
        backgroundWindowModal.style.visibility = "hidden";
        
        document.body.style.overflow = "auto";
    };

    btnKnowMore[3].onclick = () => {
        windowModal[3].style.opacity = "1";
        windowModal[3].style.visibility = "visible";

        backgroundWindowModal.style.opacity = "1";
        backgroundWindowModal.style.visibility = "visible";
        
        document.body.style.overflow = "hidden";
    };

    btnCloseModal[3].onclick = () => {
        windowModal[3].style.opacity = "0";
        windowModal[3].style.visibility = "hidden";

        backgroundWindowModal.style.opacity = "0";
        backgroundWindowModal.style.visibility = "hidden";
        
        document.body.style.overflow = "auto";
    };

    changeMenuOnScroll();

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
        if (window.innerWidth > 1299) {
            scrollMovePos(4, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(4, -70);
        }
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

        particlesJs.style.backgroundImage = "url(img/background-01.png)";
    }

    circles[1].onclick = () => {
        circleSlider(1);

        particlesJs.style.backgroundImage = "url(img/background-02.png)";
    }

    circles[2].onclick = () => {
        circleSlider(2);

        particlesJs.style.backgroundImage = "url(img/background-03.png)";
    }

    window.onscroll = () => {
        if (window.scrollY >= 50) {
            altarnate("#ffffff", "#2d2e2e", "5px solid #ffffff", "5px solid #2d2e2e");
        }
        
        else {
            altarnate("#2d2e2e", "#ffffff", "5px solid #2d2e2e", "5px solid #ffffff");
        }

        changeMenuOnScroll();
    }

    function changeMenuOnScroll() {
        if (scrollPos[0].getBoundingClientRect().top + 80 <= 0 && scrollPos[0].getBoundingClientRect().bottom <= 0) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[0].setAttribute("id", "main-a-activated");
        }

        if (scrollPos[1].getBoundingClientRect().top + 80 <= 0 && scrollPos[1].getBoundingClientRect().bottom <= 0) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[1].setAttribute("id", "main-a-activated");
        }

        if (scrollPos[2].getBoundingClientRect().top <= 85 && scrollPos[2].getBoundingClientRect().bottom <= 85) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[2].setAttribute("id", "main-a-activated");
        }

        if (scrollPos[3].getBoundingClientRect().top <= 85 && scrollPos[3].getBoundingClientRect().bottom <= 85) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[3].setAttribute("id", "main-a-activated");
        }

        if (scrollPos[4].getBoundingClientRect().top <= 85 && scrollPos[4].getBoundingClientRect().bottom <= 85) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[4].setAttribute("id", "main-a-activated");
        }

        if (scrollPos[5].getBoundingClientRect().top <= 85 && scrollPos[5].getBoundingClientRect().bottom <= 85) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[5].setAttribute("id", "main-a-activated");
        }

        if (scrollPos[6].getBoundingClientRect().top <= 85 && scrollPos[6].getBoundingClientRect().bottom <= 85) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[6].setAttribute("id", "main-a-activated");
        }

        if (scrollPos[7].getBoundingClientRect().top <= 85 && scrollPos[7].getBoundingClientRect().bottom <= 85) {
            for (let a = 0; a < mainA.length; a ++) {
                mainA[a].removeAttribute("id");
            }
    
            mainA[7].setAttribute("id", "main-a-activated");
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

        if (circlesCount == 0) {
            particlesJs.style.backgroundImage = "url(img/background-01.png)";
        }

        if (circlesCount == 1) {
            particlesJs.style.backgroundImage = "url(img/background-02.png)";
        }

        if (circlesCount == 2) {
            particlesJs.style.backgroundImage = "url(img/background-03.png)";
        }
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
