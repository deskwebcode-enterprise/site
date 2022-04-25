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
    let btnOptionPlans = document.querySelectorAll(".btn-option-plans");
    
    let animePageMove = document.querySelector("#animePageMove");

    changeMenuOnScroll();
    animatedScroll();
    
    particlesJs.addEventListener("animationend", function() {
        particlesJs.classList.remove("particles-add-animated-img");
    });

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

            btnHamburgerOnOff();
        });
    }

    mainA[0].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 0) {
            scrollMovePos(0, -50);;
        }
    });

    mainA[1].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 1299) {
            scrollMovePos(1, 80);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(1, 90);
        }
    });

    mainA[2].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 1299) {
            scrollMovePos(2, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(2, -70);
        }
    });

    mainA[3].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 1299) {
            scrollMovePos(3, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(3, -70);
        }
    });

    mainA[4].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 1299) {
            scrollMovePos(4, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(4, -70);
        }
    });

    mainA[5].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 1299) {
            scrollMovePos(5, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(5, -70);
        }
    });

    mainA[6].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 1299) {
            scrollMovePos(6, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(6, -70);
        }
    });

    mainA[7].addEventListener("click", () => {
        animePageClick();

        if (window.innerWidth > 1299) {
            scrollMovePos(7, -90);
        }

        else if (window.innerWidth > 0) {
            scrollMovePos(7, -70);
        }
    });
    
    function animePageClick() {
        let animePageMoveTop = document.querySelector("#animePageMoveTop");
        let animePageMoveBottom = document.querySelector("#animePageMoveBottom");

        animePageMoveTop.style.display = "block";
        animePageMoveTop.style.animation = "animePageMoveTop 0.3s linear";

        animePageMoveTop.addEventListener("animationend", () => {
            animePageMoveTop.style.display = "none";
            animePageMoveTop.style.animation = "none";
        });

        animePageMoveBottom.style.display = "block";
        animePageMoveBottom.style.animation = "animePageMoveBottom 0.3s linear";

        animePageMoveBottom.addEventListener("animationend", () => {
            animePageMoveBottom.style.display = "none";
            animePageMoveBottom.style.animation = "none";
        });
    }

    for (let w = 0; w < btnOptionPlans.length; w++) {
        btnOptionPlans[w].addEventListener("click", () => {
            animePageClick();

            if (window.innerWidth > 1299) {
                scrollMovePos(6, -80);
            }
    
            else if (window.innerWidth > 0) {
                scrollMovePos(6, -70);
            }

            changeMenuOnScroll()
            
            mainA[6].setAttribute("id", "main-a-activated");
            mainA[6].style.color = "#fff";
            mainA[6].style.borderTop = "5px solid #ffffff";
            mainAactivated.style.borderTop = "5px solid #ffffff";
        });
    }

    function scrollMovePos(elementPos, pointPos) {
        window.scrollBy(0, scrollPos[elementPos].getBoundingClientRect().y + pointPos);
    }

    btnHamburger.onclick = () => {
        btnHamburgerOnOff();
    };

    function btnHamburgerOnOff() {
        let btnHamburgerPart = document.querySelectorAll(".as");
        
        if (window.innerWidth <= 1299) {
            if (btnHamburgerCount == 0) {
                mainUl.style.animation = "navUlright 0.3s linear forwards";
                backgroundOccupy.style.animation = "occupyBottom 0.3s linear forwards";
                btnHamburgerCount = 1;
            
                btnHamburgerPart[0].style.transform = "rotate(45deg) translate(10px, 10px)";
                btnHamburgerPart[1].style.opacity = "0";
                btnHamburgerPart[2].style.transform = "rotate(-45deg) translate(10px, -12px)";
            }
    
            else {
                mainUl.style.animation = "navUlleft 0.3s linear forwards";
                backgroundOccupy.style.animation = "occupyTop 0.3s linear forwards";
                btnHamburgerCount = 0;
    
    
                for (let a = 0; a < btnHamburgerPart.length; a ++) {
                    btnHamburgerPart[a].style.transform = "rotate(0deg) translate(0, 0)";
                    btnHamburgerPart[a].style.opacity = "1";
                }
            }
        }
    }

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
    
    window.onwheel = () => {
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

        animatedScroll();
    }

    function altarnate(color1, color2, border1, border2) {
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

    function animatedScroll () {
        var root = document.documentElement;
        
        root.className += ' js';
        
        function boxTop(idBox) {
            var boxOffset = $(idBox).offset().top;
            return boxOffset;
        }
        
        $(document).ready(function() {
            var $target = $('.anime'),
            animationClass = 'anime-init',
            windowHeight = $(window).height(),
            offset = windowHeight;
        
            function animeScroll() {
                var documentTop = $(document).scrollTop();
                $target.each(function() {
                
                if (documentTop > boxTop(this) - offset) {
                    $(this).addClass(animationClass);
                }
            });
        }
    
        animeScroll();
        
        $(document).scroll(function() {
            setTimeout(function() {
                animeScroll()
            }, 150);
        });
        });
    }
};
