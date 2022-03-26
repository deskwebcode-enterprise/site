window.onload = () => {
    let mainUl = document.querySelector("#main-ul");
    let btnHamburger = document.querySelector("#btn-hamburger");
    let btnHamburgerCount = 0;
    let backgroundOccupy = document.querySelector("#background-occupy");
    let mainNav = document.querySelector("#main-nav");
    let mainA = document.querySelectorAll(".main-a");
    let nameLogo = document.querySelector("#name-logo");

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
        mainNav.style.background = color2;
        nameLogo.style.color = color1;

        btnHamburger.querySelectorAll("div")[0].style.background = color1;
        btnHamburger.querySelectorAll("div")[1].style.background = color1;
        btnHamburger.querySelectorAll("div")[2].style.background = color1;

        for (let c = 0; c < mainA.length; c ++) {
            if (window.innerWidth > 1299) {
                mainA[c].style.color = color1;
                mainA[c].style.borderTop = border2;
                
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
            }
        }
    }
};
