console.log("hi, welcome to WEB-1. I see you're looking at the code. I wouldn't really trust it since it is my first website but you can get some inspiration from it.");




//* optimizing for phone use!
function elementWidth(i, n, w) {
    for (i; i <= n; i++) {
        let element = document.getElementById("react-" + i).style.width = w + '%';
        console.log(element);
        console.log(i);
        console.log(n);
    };
    return element;
};

function element(n) {
    let element = document.getElementById("react-" + n);
    return element;
};

function nav() {
    if (window.innerWidth > 630) {
        document.getElementById("nav").innerHTML = '<div class="dropdown"><button class="center , dropbtn" type="button">General Formulas</button><div class="dropdown-content"><a class="Program-link" href="/re.html">RE </a><a class="Program-link" href="/qf.html">Quadratic Functions </a><a class="Program-link" href="/qf2.html">Quadratic Functions | Graphing </a><a class="Program-link" href="/pa.html">Pressure Program </a></div></div><div class="dropdown"><button class="center , dropbtn" type="button">Triangle Formulas</button><div class="dropdown-content"><a class="Program-link" href="./trithingys.html">Triangle formulas</a></div></div>'
        document.getElementById("nav-text").style.fontSize = "1.2em"

        if (window.innerWidth < 10000 && window.innerWidth >= 1000 ) {
            document.getElementById("lightDarkSelector").style.marginLeft = '60%';
        } else if (window.innerWidth < 999 && window.innerWidth >= 857 ) {
            document.getElementById("lightDarkSelector").style.marginLeft = '30%';
        } else if (window.innerWidth < 856 && window.innerWidth >= 750 ) {
            document.getElementById("lightDarkSelector").style.marginLeft = '20%';
        } else if (window.innerWidth < 749 && window.innerWidth >= 665 ) {
            document.getElementById("lightDarkSelector").style.marginLeft = '9%';
        } else if (window.innerWidth < 664 && window.innerWidth >= 630 ) {
            document.getElementById("lightDarkSelector").style.marginLeft = '5%';
        }
    }
    else if (window.innerWidth < 630 ) {
        console.log("screen is small than 630px")
        
        let element = document.getElementById("lightDarkSelector").value;
        let img = "white-hamburger-menu-icon-24.jpg"

        if (element === '1') {
            img = 'menu_FILL0_wght500_GRAD0_opsz40.svg'
        } else {
            img = 'white-hamburger-menu-icon-24.jpg'
        }

        document.getElementById("nav").innerHTML = '<div class="dropdown"><button class="dropbtn" type="button"><img class="center" src="./img/'+img+'" alt="Menu Button"></button><div class="dropdown-content"><h1>General Formulas</h1><a class="Program-link" href="/re.html">RE </a><a class="Program-link" href="/qf.html">Quadratic Functions </a><a class="Program-link" href="/qf2.html">Quadratic Functions | Graphing </a><a class="Program-link" href="/pa.html">Pressure Program </a><h1>Triangle formulas</h1><a class="Program-link" href="./trithingys.html">Triangle formulas</a></div></div>'
        document.getElementById("nav-text").style.fontSize = "2em"

        if (window.innerWidth > 320 && window.innerWidth <= 420) {
            document.getElementById("lightDarkSelector").style.marginLeft = '7%';
        } else if (window.innerWidth > 420 && window.innerWidth <= 500) {
        document.getElementById("lightDarkSelector").style.marginLeft = '10%';
        } else if (window.innerWidth > 501 && window.innerWidth <= 600) {
            document.getElementById("lightDarkSelector").style.marginLeft = '20%';
        } else if (window.innerWidth > 601 && window.innerWidth <= 630) {
            document.getElementById("lightDarkSelector").style.marginLeft = '30%';
        };
    }
};

function navAdjust() {
    if (window.innerWidth <= 1203 && window.innerWidth >= 1011) {
        document.getElementById("lightDarkSelector").style.marginLeft = '80%';
    } else if (window.innerWidth < 1011 && window.innerWidth >= 813) {
        document.getElementById("lightDarkSelector").style.marginLeft = '74%';
    } else if (window.innerWidth < 813 && window.innerWidth >= 705) {
        document.getElementById("lightDarkSelector").style.marginLeft = '65%';
    } else if (window.innerWidth < 705 && window.innerWidth >= 551) {
        document.getElementById("lightDarkSelector").style.marginLeft = '55%';
    } else if (window.innerWidth < 551 && window.innerWidth >= 455) {
        document.getElementById("lightDarkSelector").style.marginLeft = '45%';
    } else if (window.innerWidth < 455) {
        document.getElementById("lightDarkSelector").style.marginLeft = '35%';
    }
}

function phoneMode(p) {
        if (p === 'h') {
            if (window.innerWidth <= 870) {
                console.log('Phone screen');
                elementWidth(2, 3, 99)
                element(2).style.marginBottom = "2mm";
                document.getElementById("Tittle").style.fontSize = "800%";
                if (window.innerWidth <= 790) {
                    document.getElementById("nav-text").style.fontSize = "2em"
                    document.getElementById("Tittle-Div").style.backgroundImage = "none";
                    document.getElementById("Tittle").style.fontSize = "800%";
                }
                else {
                    document.getElementById("Tittle-Div").style.backgroundImage = "/img/WEB-1NewNewTittleImage.png";
                };

                navAdjust()

            }; 
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(4, 5, 99)
            }
            else {
                element(4).style.width = "60%"
                element(4).style.minHeight = "600px"
                element(5).style.width = "35%"
            }
        } else if (p === 'p') {
            nav()            
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(12, 13, 99)
            }
            else {
                element(12).style.width = "60%"
                element(12).style.minHeight = "600px"
                element(13).style.width = "35%"
            }
        } else if (p === 'q') {
            nav()
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(10, 11, 99)
            }
            else {
                element(10).style.width = "60%"
                element(10).style.minHeight = "600px"
                element(11).style.width = "35%"
            } 
        } else if (p === 'q2') {
            nav()
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(8, 9, 99)
            }
            else {
                element(8).style.width = "60%"
                element(8).style.minHeight = "600px"
                element(9).style.width = "35%"
            }
        } else if (p === 'r') {
            nav()
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(6, 7, 99)
            }
            else {
                element(6).style.width = "60%"
                element(6).style.minHeight = "600px"
                element(7).style.width = "35%"
            }
        } else if (p === "t3") {
            nav()
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(4, 5, 99)
            }
            else {
                element(4).style.width = "60%"
                element(4).style.minHeight = "600px"
                element(5).style.width = "35%"
            }
        }
}; 

function Hide(UNIT) {
        let un = 'undefined';
        if (UNIT === un ) {
            document.getElementsByClassName("ans-text").visibility = "hidden";
            document.getElementById('ans-text').style.visibility = "hidden";
            document.getElementById('1-IF').style.visibility = "visible";
            document.getElementById('2-IF').style.visibility = "visible";
        } if (
             UNIT === 'M' ||
             UNIT === 'KM' ||
             UNIT === 'CM' || 
             UNIT === 'FT' ||
             UNIT === 'YD' ||
             UNIT === 'MI' ||
             UNIT === 'IN' ||
             UNIT === 'MM' ||
             UNIT === 'μM' ||
             UNIT === 'NM' ||
             UNIT === 'NMI' ||

            UNIT === 'G' ||
            UNIT === 'KG' ||
            UNIT === 'MG' ||
            UNIT === 'MicroG' ||
            UNIT === 'US-TON' ||
            UNIT === 'I-TON' ||
            UNIT === 'TONE' ||
            UNIT === 'LBS' ||
            UNIT === 'OZ' ||
            UNIT === 'STONE' ||

            UNIT === 'S' ||
            UNIT === 'M' ||
            UNIT === 'H' ||

            UNIT === 'K' ||
            UNIT === 'C' ||
            UNIT === 'F' ||

            UNIT === "L" ||
            UNIT === "CL" ||
            UNIT === "ML" ||
            UNIT === "OZ" 
        ) {
            document.getElementById('1-IF').style.visibility = "hidden";
            document.getElementById('2-IF').style.visibility = "hidden";
            document.getElementById('ans-text').style.visibility = "visible";
            document.getElementsByClassName("ans-text").visibility = "visible";
        };
};

//* making dark/light mode

function elementProgramLink(i, n, c) {
    for (i; i <= n; i++) {
        let element = document.getElementById("link-" + i).style.color = c;
    };
    return element;
}

function lightDarkMode() {
    let elementValue = document.getElementById("lightDarkSelector").value;
    console.log(elementValue)
    let ansBlock = document.querySelector(".Ans-block");
    let legendBlock = document.querySelector(".Legend-block");

    if (elementValue === "1") { // light mode

        if (document.URL.includes("Home")) {
            elementProgramLink(1, 8, "#000000")
            console.log("light mode selected")
            document.getElementById("_0").style.backgroundColor = "#FFFFFF";
            document.getElementById("_0").style.color = "#000000";
            ansBlock.style.backgroundColor = "#fff000";
            legendBlock.style.backgroundColor = "#fff000";
            document.querySelector("#react-2.main-div-nav").style.backgroundColor = "#fff000";
            document.querySelector("#react-3.main-div-nav").style.backgroundColor = "#fff000";
            document.getElementById("Tittle-Div").style.backgroundImage = 'url(./img/WEB-1NewNewTittleImage.png)';
            document.querySelector(".navbar").style.backgroundColor = '#FFFFFF';
            document.querySelector(".navbar-brand").style.color = '#000000';
            document.getElementById("lightDarkSelector").style.backgroundColor = "#fff000"
    
            document.getElementById("lightDarkSelector-text").innerHTML = 'Light Mode.'
            document.getElementById("lightDarkSelector-text").style.color = '#000000'
            document.cookie = 'mode=light'
        } else {
            document.getElementById("lightDarkSelector").style.backgroundColor = "#fff000"
            document.querySelector(".navbar").style.backgroundColor = '#FFFFFF';
            document.querySelector(".navbar").style.color = '#000000';
            console.log("not home page");
            console.log("light mode selected");
            document.getElementById("_0").style.backgroundColor = "#FFFFFF";
            document.getElementById("_0").style.color = "#000000";
            ansBlock.style.backgroundColor = "#fff000";
            legendBlock.style.backgroundColor = "#fff000";
            document.getElementById("lightDarkSelector-text").innerHTML = 'Light Mode.'
            document.getElementById("lightDarkSelector-text").style.color = '#000000'
            document.cookie = 'mode=light'
        }
    }   
    if (elementValue === "2") {
        console.log("dark mode")
        document.getElementById("lightDarkSelector-text").innerHTML = 'Dark Mode.'
        document.getElementById("lightDarkSelector-text").style.color = '#cacaca'

        if (document.URL.includes("Home")) {
            elementProgramLink(1, 8, "#cacaca")
            document.getElementById("_0").style.backgroundColor = "#020206";
            document.getElementById("_0").style.color = "#cacaca";
            ansBlock.style.backgroundColor = "#e63743";
            legendBlock.style.backgroundColor = "#e63743";
            document.querySelector("#react-2.main-div-nav").style.backgroundColor = "#e63743";
            document.querySelector("#react-3.main-div-nav").style.backgroundColor = "#e63743";
            document.getElementById("Tittle-Div").style.backgroundImage = 'url(./img/WEB-1.png)';
            document.querySelector(".navbar").style.backgroundColor = '#020206';
            document.querySelector(".navbar-brand").style.color = '#cacaca';
            document.getElementById("lightDarkSelector").style.backgroundColor = "#e63743"
            document.cookie = 'mode=dark'
        } else {
            document.getElementById("lightDarkSelector").style.backgroundColor = "#e63743"
            document.querySelector(".navbar").style.backgroundColor = '#020206';
            document.querySelector(".navbar").style.color = '#cacaca';
            console.log("not home page");
            console.log("light mode selected");
            document.getElementById("_0").style.backgroundColor = "#020206";
            document.getElementById("_0").style.color = "#cacaca";
            ansBlock.style.backgroundColor = "#e63743";
            legendBlock.style.backgroundColor = "#e63743";
            document.getElementById("lightDarkSelector-text").innerHTML = 'Dark Mode.'
            document.getElementById("lightDarkSelector-text").style.color = '#cacaca'
            document.cookie = 'mode=dark'
        }



        
    }
}

function dontBreakcPlease() {
    document.getElementById("lightDarkSelector-text").innerHTML = 'Light Mode.'
    document.getElementById("lightDarkSelector-text").style.color = '#000000'
}
 
// ! CODE FOR CONVERSIONS

function Len() {
    let NUM = document.getElementById('NUM').value || 1;
    let UNIT = document.getElementById('UNIT').value || 'undefined';
    console.log("btn 'BTN-1' pressed.");
    console.log(NUM);
    console.log(UNIT);
    if (UNIT === 'M') {

        document.getElementById("1-text").innerHTML = "M to KM";
        document.getElementById("2-text").innerHTML = "M to CM";
        document.getElementById("3-text").innerHTML = "M to FT";
        document.getElementById("4-text").innerHTML = "M to YD";
        document.getElementById("5-text").innerHTML = "M to MI";
        document.getElementById("6-text").innerHTML = "M to IN";
        document.getElementById("7-text").innerHTML = "M to MM ";
        document.getElementById("8-text").innerHTML = "M to μM ";
        document.getElementById("9-text").innerHTML = "M to NM ";
        document.getElementById("10-text").innerHTML = "M to NMI";

        document.getElementById("11-text").innerHTML = "M to KM";
        document.getElementById("12-text").innerHTML = "M to CM";
        document.getElementById("13-text").innerHTML = "M to FT";
        document.getElementById("14-text").innerHTML = "M to YD";
        document.getElementById("15-text").innerHTML = "M to MI";
        document.getElementById("16-text").innerHTML = "M to IN";
        document.getElementById("17-text").innerHTML = "M to MM ";
        document.getElementById("18-text").innerHTML = "M to μM ";
        document.getElementById("19-text").innerHTML = "M to NM ";
        document.getElementById("20-text").innerHTML = "M to NMI";


        document.getElementById("01").innerHTML = (NUM / 1000);
        document.getElementById("02").innerHTML = (NUM * 100);
        document.getElementById("03").innerHTML = (NUM * 3.28);
        document.getElementById("04").innerHTML = (NUM * 1.094);
        document.getElementById("05").innerHTML = (NUM / 1809);
        document.getElementById("06").innerHTML = (NUM * 39.37);
        document.getElementById("07").innerHTML = (NUM * 1000);
        document.getElementById("08").innerHTML = (NUM * 1e+6);
        document.getElementById("09").innerHTML = (NUM * 1e+9);
        document.getElementById("10").innerHTML = (NUM / 1852);
        document.getElementsByClassName("ans-NUM").innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 1000";
        document.getElementById("2-formula").innerHTML = "* 100";
        document.getElementById("3-formula").innerHTML = "*3.28";
        document.getElementById("4-formula").innerHTML = "* 1.094";
        document.getElementById("5-formula").innerHTML = "/ 1809";
        document.getElementById("6-formula").innerHTML = "* 39.37";
        document.getElementById("7-formula").innerHTML = "* 1000";
        document.getElementById("8-formula").innerHTML = "* 1e+6";
        document.getElementById("9-formula").innerHTML = "* 1e+9";
        document.getElementById("10-formula").innerHTML = "/ 1852";

        Hide(UNIT)
    } if (UNIT === 'KM') {
        document.getElementById("1-text").innerHTML = "KM to M:";
        document.getElementById("2-text").innerHTML = "KM to CM:";
        document.getElementById("3-text").innerHTML = "KM to FT:";
        document.getElementById("4-text").innerHTML = "KM to YD:";
        document.getElementById("5-text").innerHTML = "KM to MI:";
        document.getElementById("6-text").innerHTML = "KM to IN:";
        document.getElementById("7-text").innerHTML = "KM to MM ";
        document.getElementById("8-text").innerHTML = "KM to μM ";
        document.getElementById("9-text").innerHTML = "KM to NM ";
        document.getElementById("10-text").innerHTML = "KM to NMI";


        document.getElementById("11-text").innerHTML = "KM to M:";
        document.getElementById("12-text").innerHTML = "KM to CM:";
        document.getElementById("13-text").innerHTML = "KM to FT:";
        document.getElementById("14-text").innerHTML ="KM to YD:";
        document.getElementById("15-text").innerHTML ="KM to MI:";
        document.getElementById("16-text").innerHTML ="KM to IN:";
        document.getElementById("17-text").innerHTML = "KM to MM ";
        document.getElementById("18-text").innerHTML = "KM to μM ";
        document.getElementById("19-text").innerHTML = "KM to NM ";
        document.getElementById("20-text").innerHTML = "KM to NMI";


        document.getElementById("01").innerHTML = (NUM * 1000  );
        document.getElementById("02").innerHTML = (NUM * 100000);
        document.getElementById("03").innerHTML = (NUM * 3281  );
        document.getElementById("04").innerHTML = (NUM * 1094  );
        document.getElementById("05").innerHTML = (NUM / 1.609 );
        document.getElementById("06").innerHTML = (NUM * 39370 );
        document.getElementById("07").innerHTML = (NUM * 1e+6 );
        document.getElementById("08").innerHTML = (NUM * 1e+9 );
        document.getElementById("09").innerHTML = (NUM * 1e+12);
        document.getElementById("10").innerHTML = (NUM / 1.852);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 1000  ";
        document.getElementById("2-formula").innerHTML = "* 100000";
        document.getElementById("3-formula").innerHTML = "* 3281  ";
        document.getElementById("4-formula").innerHTML = "* 1094  ";
        document.getElementById("5-formula").innerHTML = "/ 1.609 ";
        document.getElementById("6-formula").innerHTML = "* 39370 ";
        document.getElementById("7-formula").innerHTML = "* 1e+6 ";
        document.getElementById("8-formula").innerHTML = "* 1e+9 ";
        document.getElementById("9-formula").innerHTML = "* 1e+12";
        document.getElementById("10-formula").innerHTML = "/ 1.852";

        Hide(UNIT)
    } if (UNIT === 'CM') {
        document.getElementById("1-text").innerHTML = "CM to M:";
        document.getElementById("2-text").innerHTML = "CM to KM:";
        document.getElementById("3-text").innerHTML = "CM to FT:";
        document.getElementById("4-text").innerHTML = "CM to YD:";
        document.getElementById("5-text").innerHTML = "CM to MI:";
        document.getElementById("6-text").innerHTML = "CM to IN:";
        document.getElementById("7-text").innerHTML = "CM to MM ";
        document.getElementById("8-text").innerHTML = "CM to μM ";
        document.getElementById("9-text").innerHTML = "CM to NM ";
        document.getElementById("10-text").innerHTML = "CM to NMI";


        document.getElementById("11-text").innerHTML = "CM to M:";
        document.getElementById("12-text").innerHTML = "CM to KM:";
        document.getElementById("13-text").innerHTML = "CM to FT:";
        document.getElementById("14-text").innerHTML = "CM to YD:";
        document.getElementById("15-text").innerHTML = "CM to MI:";
        document.getElementById("16-text").innerHTML = "CM to IN:";
        document.getElementById("17-text").innerHTML = "CM to MM ";
        document.getElementById("18-text").innerHTML = "CM to μM ";
        document.getElementById("19-text").innerHTML = "CM to NM ";
        document.getElementById("20-text").innerHTML = "CM to NMI";


        document.getElementById("01").innerHTML = (NUM / 100   );
        document.getElementById("02").innerHTML = (NUM / 1e+6  );
        document.getElementById("03").innerHTML = (NUM / 30.48 );
        document.getElementById("04").innerHTML = (NUM / 41.44 );
        document.getElementById("05").innerHTML = (NUM / 160934);
        document.getElementById("06").innerHTML = (NUM / 2.54  );
        document.getElementById("07").innerHTML = (NUM * 10     );
        document.getElementById("08").innerHTML = (NUM * 10000  );
        document.getElementById("09").innerHTML = (NUM * 1e+7   );
        document.getElementById("10").innerHTML = (NUM / 1852e+2);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 100   ";
        document.getElementById("2-formula").innerHTML = "/ 1e+6  ";
        document.getElementById("3-formula").innerHTML = "/ 30.48 ";
        document.getElementById("4-formula").innerHTML = "/ 41.44 ";
        document.getElementById("5-formula").innerHTML = "/ 160934";
        document.getElementById("6-formula").innerHTML = "/ 2.54  ";
        document.getElementById("7-formula").innerHTML = "* 10     ";
        document.getElementById("8-formula").innerHTML = "* 10000  ";
        document.getElementById("9-formula").innerHTML = "* 1e+7   ";
        document.getElementById("10-formula").innerHTML = "/ 1852e+2";

        Hide(UNIT)
    } if (UNIT === 'FT') {
        document.getElementById("1-text").innerHTML = "FT to M:";
        document.getElementById("2-text").innerHTML = "FT to KM:";
        document.getElementById("3-text").innerHTML = "FT to CM:";
        document.getElementById("4-text").innerHTML = "FT to YD:";
        document.getElementById("5-text").innerHTML = "FT to MI:";
        document.getElementById("6-text").innerHTML = "FT to IN:";
        document.getElementById("7-text").innerHTML = "FT to MM ";
        document.getElementById("8-text").innerHTML = "FT to μM ";
        document.getElementById("9-text").innerHTML = "FT to NM ";
        document.getElementById("10-text").innerHTML = "FT to NMI";
        

        document.getElementById("11-text").innerHTML = "FTto M:";
        document.getElementById("12-text").innerHTML = "FTto KM:";
        document.getElementById("13-text").innerHTML = "FTto CM:";
        document.getElementById("14-text").innerHTML ="FTto YD:";
        document.getElementById("15-text").innerHTML ="FTto MI:";
        document.getElementById("16-text").innerHTML ="FTto IN:";
        document.getElementById("17-text").innerHTML = "FT to MM ";
        document.getElementById("18-text").innerHTML = "FT to μM ";
        document.getElementById("19-text").innerHTML = "FT to NM ";
        document.getElementById("20-text").innerHTML = "FT to NMI";


        document.getElementById("01").innerHTML = (NUM * 3.281 );
        document.getElementById("02").innerHTML = (NUM / 3281  );
        document.getElementById("03").innerHTML = (NUM * 30.48 );
        document.getElementById("04").innerHTML = (NUM * 3     );
        document.getElementById("05").innerHTML = (NUM / 5280  );
        document.getElementById("06").innerHTML = (NUM * 12    );
        document.getElementById("07").innerHTML = (NUM * 304.8   );
        document.getElementById("08").innerHTML = (NUM * 304800  );
        document.getElementById("09").innerHTML = (NUM * 3.048e+8);
        document.getElementById("10").innerHTML = (NUM / 6076    );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 3.281 ";
        document.getElementById("2-formula").innerHTML = "/ 3281  ";
        document.getElementById("3-formula").innerHTML = "* 30.48 ";
        document.getElementById("4-formula").innerHTML = "* 3     ";
        document.getElementById("5-formula").innerHTML = "/ 5280  ";
        document.getElementById("6-formula").innerHTML = "* 12    ";
        document.getElementById("7-formula").innerHTML = "* 304.8   ";
        document.getElementById("8-formula").innerHTML = "* 304800  ";
        document.getElementById("9-formula").innerHTML = "* 3.048e+8";
        document.getElementById("10-formula").innerHTML = "/ 6076    ";

        Hide(UNIT)
    } if (UNIT === 'YD') {
        document.getElementById("1-text").innerHTML = "YD to M:";
        document.getElementById("2-text").innerHTML = "YD to KM:";
        document.getElementById("3-text").innerHTML = "YD to CM:";
        document.getElementById("4-text").innerHTML = "YD to FT:";
        document.getElementById("5-text").innerHTML = "YD to MI:";
        document.getElementById("6-text").innerHTML = "YD to IN:";
        document.getElementById("7-text").innerHTML = "YD to MM ";
        document.getElementById("8-text").innerHTML = "YD to μM ";
        document.getElementById("9-text").innerHTML = "YD to NM ";
        document.getElementById("10-text").innerHTML = "YD to NMI";

        document.getElementById("11-text").innerHTML = "YD to M:";
        document.getElementById("12-text").innerHTML = "YD to KM:";
        document.getElementById("13-text").innerHTML = "YD to CM:";
        document.getElementById("14-text").innerHTML ="YD to FT:";
        document.getElementById("15-text").innerHTML ="YD to MI:";
        document.getElementById("16-text").innerHTML ="YD to IN:";
        document.getElementById("17-text").innerHTML = "YD to MM ";
        document.getElementById("18-text").innerHTML = "YD to μM ";
        document.getElementById("19-text").innerHTML = "YD to NM ";
        document.getElementById("20-text").innerHTML = "YD to NMI";


        document.getElementById("01").innerHTML = (NUM * 1.094 );
        document.getElementById("02").innerHTML = (NUM / 1094  );
        document.getElementById("03").innerHTML = (NUM * 91.44 );
        document.getElementById("04").innerHTML = (NUM * 3     );
        document.getElementById("05").innerHTML = (NUM / 1760  );
        document.getElementById("06").innerHTML = (NUM / 12    );
        document.getElementById("07").innerHTML = (NUM * 914.4   );
        document.getElementById("08").innerHTML = (NUM * 914400  );
        document.getElementById("09").innerHTML = (NUM * 9.144e+8);
        document.getElementById("10").innerHTML = (NUM / 2025    );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 1.094 ";
        document.getElementById("2-formula").innerHTML = "/ 1094  ";
        document.getElementById("3-formula").innerHTML = "* 91.44 ";
        document.getElementById("4-formula").innerHTML = "* 3     ";
        document.getElementById("5-formula").innerHTML = "/ 1760  ";
        document.getElementById("6-formula").innerHTML = "/ 12    ";
        document.getElementById("7-formula").innerHTML = "* 914.4   ";
        document.getElementById("8-formula").innerHTML = "* 914400  ";
        document.getElementById("9-formula").innerHTML = "* 9.144e+8";
        document.getElementById("10-formula").innerHTML = "/ 2025    ";

        Hide(UNIT)
    } if (UNIT === 'MI') {
        document.getElementById("1-text").innerHTML = "MI to M:";
        document.getElementById("2-text").innerHTML = "MI to KM:";
        document.getElementById("3-text").innerHTML = "MI to CM:";
        document.getElementById("4-text").innerHTML = "MI to FT:";
        document.getElementById("5-text").innerHTML = "MI to YD:";
        document.getElementById("6-text").innerHTML = "MI to IN:";
        document.getElementById("7-text").innerHTML = "MI to MM ";
        document.getElementById("8-text").innerHTML = "MI to μM ";
        document.getElementById("9-text").innerHTML = "MI to NM ";
        document.getElementById("10-text").innerHTML = "MI to NMI";

        document.getElementById("11-text").innerHTML = "MI to M:";
        document.getElementById("12-text").innerHTML = "MI to KM:";
        document.getElementById("13-text").innerHTML = "MI to CM:";
        document.getElementById("14-text").innerHTML ="MI to FT:";
        document.getElementById("15-text").innerHTML ="MI to YD:";
        document.getElementById("16-text").innerHTML ="MI to IN:";
        document.getElementById("17-text").innerHTML = "MI to MM ";
        document.getElementById("18-text").innerHTML = "MI to μM ";
        document.getElementById("19-text").innerHTML = "MI to NM ";
        document.getElementById("20-text").innerHTML = "MI to NMI";


        document.getElementById("01").innerHTML = (NUM * 1609   );
        document.getElementById("02").innerHTML = (NUM * 1.609 );
        document.getElementById("03").innerHTML = (NUM * 160934);
        document.getElementById("04").innerHTML = (NUM * 5280  );
        document.getElementById("05").innerHTML = (NUM * 1760  );
        document.getElementById("06").innerHTML = (NUM * 63360 );
        document.getElementById("07").innerHTML = (NUM * 1.609e+6 );
        document.getElementById("08").innerHTML = (NUM * 1.609e+9 );
        document.getElementById("09").innerHTML = (NUM * 1.609e+12);
        document.getElementById("10").innerHTML = (NUM / 1.151    );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 1609  ";
        document.getElementById("2-formula").innerHTML = "* 1.609 ";
        document.getElementById("3-formula").innerHTML = "* 160934";
        document.getElementById("4-formula").innerHTML = "* 5280  ";
        document.getElementById("5-formula").innerHTML = "* 1760  ";
        document.getElementById("6-formula").innerHTML = "* 63360 ";
        document.getElementById("7-formula").innerHTML = "* 1.609e+6 ";
        document.getElementById("8-formula").innerHTML = "* 1.609e+9 ";
        document.getElementById("9-formula").innerHTML = "* 1.609e+12";
        document.getElementById("10-formula").innerHTML = "/ 1.151";

        Hide(UNIT)
    } if (UNIT === 'IN') {
        document.getElementById("1-text").innerHTML = "IN to M:";
        document.getElementById("2-text").innerHTML = "IN to KM:";
        document.getElementById("3-text").innerHTML = "IN to CM:";
        document.getElementById("4-text").innerHTML = "IN to FT:";
        document.getElementById("5-text").innerHTML = "IN to YD:";
        document.getElementById("6-text").innerHTML = "IN to MI:";
        document.getElementById("7-text").innerHTML = "IN to MM ";
        document.getElementById("8-text").innerHTML = "IN to μM ";
        document.getElementById("9-text").innerHTML = "IN to NM ";
        document.getElementById("10-text").innerHTML = "IN to NMI";

        document.getElementById("11-text").innerHTML = "IN to M:";
        document.getElementById("12-text").innerHTML = "IN to KM:";
        document.getElementById("13-text").innerHTML = "IN to CM:";
        document.getElementById("14-text").innerHTML ="IN to FT:";
        document.getElementById("15-text").innerHTML ="IN to YD:";
        document.getElementById("16-text").innerHTML ="IN to MI:";
        document.getElementById("17-text").innerHTML = "IN to MM ";
        document.getElementById("18-text").innerHTML = "IN to μM ";
        document.getElementById("19-text").innerHTML = "IN to NM ";
        document.getElementById("20-text").innerHTML = "IN to NMI";


        document.getElementById("01").innerHTML = (NUM / 39.37 );
        document.getElementById("02").innerHTML = (NUM / 39370 );
        document.getElementById("03").innerHTML = (NUM * 2.54  );
        document.getElementById("04").innerHTML = (NUM / 12    );
        document.getElementById("05").innerHTML = (NUM / 36    );
        document.getElementById("06").innerHTML = (NUM / 63360 );
        document.getElementById("07").innerHTML = (NUM  * 25.4   );
        document.getElementById("08").innerHTML = (NUM  * 25400  );
        document.getElementById("09").innerHTML = (NUM  * 2.54e+7);
        document.getElementById("10").innerHTML = (NUM  / 72910  );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 39.37 ";
        document.getElementById("2-formula").innerHTML = "/ 39370 ";
        document.getElementById("3-formula").innerHTML = "* 2.54  ";
        document.getElementById("4-formula").innerHTML = "/ 12    ";
        document.getElementById("5-formula").innerHTML = "/ 36    ";
        document.getElementById("6-formula").innerHTML = "/ 63360 ";
        document.getElementById("7-formula").innerHTML = " * 25.4   ";
        document.getElementById("8-formula").innerHTML = " * 25400  ";
        document.getElementById("9-formula").innerHTML = " * 2.54e+7";
        document.getElementById("10-formula").innerHTML = "/ 72910  ";

        Hide(UNIT)
    } if (UNIT === 'MM') {
        document.getElementById("1-text").innerHTML = "MM to M:  ";
        document.getElementById("2-text").innerHTML = "MM to KM: ";
        document.getElementById("3-text").innerHTML = "MM to CM: ";
        document.getElementById("4-text").innerHTML = "MM to FT: ";
        document.getElementById("5-text").innerHTML = "MM to YD: ";
        document.getElementById("6-text").innerHTML = "MM to MI: ";
        document.getElementById("7-text").innerHTML = "MM to IN: ";
        document.getElementById("8-text").innerHTML = "MM to μM: ";
        document.getElementById("9-text").innerHTML = "MM to NM: ";
        document.getElementById("10-text").innerHTML = "MM to NMI:";

        document.getElementById("11-text").innerHTML = "MM to M:  ";
        document.getElementById("12-text").innerHTML = "MM to KM: ";
        document.getElementById("13-text").innerHTML = "MM to CM: ";
        document.getElementById("14-text").innerHTML = "MM to FT: ";
        document.getElementById("15-text").innerHTML = "MM to YD: ";
        document.getElementById("16-text").innerHTML = "MM to MI: ";
        document.getElementById("17-text").innerHTML = "MM to IN: ";
        document.getElementById("18-text").innerHTML = "MM to μM: ";
        document.getElementById("19-text").innerHTML = "MM to NM: ";
        document.getElementById("20-text").innerHTML = "MM to NMI:";

        document.getElementById("01").innerHTML = (NUM / 1000    );
        document.getElementById("02").innerHTML = (NUM / 1e+6    );
        document.getElementById("03").innerHTML = (NUM / 10      );
        document.getElementById("04").innerHTML = (NUM / 304.8  );
        document.getElementById("05").innerHTML = (NUM / 914.4   );
        document.getElementById("06").innerHTML = (NUM / 1.609e+6);
        document.getElementById("07").innerHTML = (NUM / 25.4    );
        document.getElementById("08").innerHTML = (NUM * 1000    );
        document.getElementById("09").innerHTML = (NUM * 1e+6    );
        document.getElementById("10").innerHTML = (NUM / 1.852e+6);
        document.getElementsByClassName("ans-NUM").innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = " / 1000    ";
        document.getElementById("2-formula").innerHTML = " / 1e+6    ";
        document.getElementById("3-formula").innerHTML = " / 10      ";
        document.getElementById("4-formula").innerHTML = " / 304.48  ";
        document.getElementById("5-formula").innerHTML = " / 914.4   ";
        document.getElementById("6-formula").innerHTML = " / 1.609e+6";
        document.getElementById("7-formula").innerHTML = " / 25.4    ";
        document.getElementById("8-formula").innerHTML = " * 1000    ";
        document.getElementById("9-formula").innerHTML = " * 1e+6    ";
        document.getElementById("10-formula").innerHTML = "/ 1.852e+6";
    } if (UNIT === 'μM') {
        document.getElementById("1-text").innerHTML = "μM to M:  ";
        document.getElementById("2-text").innerHTML = "μM to KM: ";
        document.getElementById("3-text").innerHTML = "μM to CM: ";
        document.getElementById("4-text").innerHTML = "μM to FT: ";
        document.getElementById("5-text").innerHTML = "μM to YD: ";
        document.getElementById("6-text").innerHTML = "μM to MI: ";
        document.getElementById("7-text").innerHTML = "μM to IN: ";
        document.getElementById("8-text").innerHTML = "μM to MM: ";
        document.getElementById("9-text").innerHTML = "μM to NM: ";
        document.getElementById("10-text").innerHTML = "μM to NMI:";

        document.getElementById("11-text").innerHTML = "μM to M:  ";
        document.getElementById("12-text").innerHTML = "μM to KM: ";
        document.getElementById("13-text").innerHTML = "μM to CM: ";
        document.getElementById("14-text").innerHTML = "μM to FT: ";
        document.getElementById("15-text").innerHTML = "μM to YD: ";
        document.getElementById("16-text").innerHTML = "μM to MI: ";
        document.getElementById("17-text").innerHTML = "μM to IN: ";
        document.getElementById("18-text").innerHTML = "μM to MM: ";
        document.getElementById("19-text").innerHTML = "μM to NM: ";
        document.getElementById("20-text").innerHTML = "μM to NMI:";

        document.getElementById("01").innerHTML = (NUM / 1000000 );
        document.getElementById("02").innerHTML = (NUM / 1e+9    );
        document.getElementById("03").innerHTML = (NUM / 10000   );
        document.getElementById("04").innerHTML = (NUM / 304800  );
        document.getElementById("05").innerHTML = (NUM / 914400  );
        document.getElementById("06").innerHTML = (NUM / 1.609e+9);
        document.getElementById("07").innerHTML = (NUM / 25400    );
        document.getElementById("08").innerHTML = (NUM / 1000    );
        document.getElementById("09").innerHTML = (NUM * 1000    );
        document.getElementById("10").innerHTML = (NUM / 1.852e+6);
        document.getElementsByClassName("ans-NUM").innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = " / 1000000 ";
        document.getElementById("2-formula").innerHTML = " / 1e+9    ";
        document.getElementById("3-formula").innerHTML = " / 10000   ";
        document.getElementById("4-formula").innerHTML = " / 304800  ";
        document.getElementById("5-formula").innerHTML = " / 914400  ";
        document.getElementById("6-formula").innerHTML = " / 1.609e+9";
        document.getElementById("7-formula").innerHTML = " / 25.4    ";
        document.getElementById("8-formula").innerHTML = " / 1000    ";
        document.getElementById("9-formula").innerHTML = " * 1000    ";
        document.getElementById("10-formula").innerHTML = "/ 1.852e+6";

    } if (UNIT === 'NM') {
        document.getElementById("1-text").innerHTML = "NM to M:  ";
        document.getElementById("2-text").innerHTML = "NM to KM: ";
        document.getElementById("3-text").innerHTML = "NM to CM: ";
        document.getElementById("4-text").innerHTML = "NM to FT: ";
        document.getElementById("5-text").innerHTML = "NM to YD: ";
        document.getElementById("6-text").innerHTML = "NM to MI: ";
        document.getElementById("7-text").innerHTML = "NM to IN: ";
        document.getElementById("8-text").innerHTML = "NM to MM: ";
        document.getElementById("9-text").innerHTML = "NM to μM: ";
       document.getElementById("10-text").innerHTML = "NM to NMI:";

        document.getElementById("11-text").innerHTML = "NM to M:  ";
        document.getElementById("12-text").innerHTML = "NM to KM: ";
        document.getElementById("13-text").innerHTML = "NM to CM: ";
        document.getElementById("14-text").innerHTML = "NM to FT: ";
        document.getElementById("15-text").innerHTML = "NM to YD: ";
        document.getElementById("16-text").innerHTML = "NM to MI: ";
        document.getElementById("17-text").innerHTML = "NM to IN: ";
        document.getElementById("18-text").innerHTML = "NM to MM: ";
        document.getElementById("19-text").innerHTML = "NM to μM: ";
        document.getElementById("20-text").innerHTML = "NM to NMI:";

        document.getElementById("01").innerHTML = (NUM / 1e+9     );
        document.getElementById("02").innerHTML = (NUM / 1e+12    );
        document.getElementById("03").innerHTML = (NUM / 1e+7     );
        document.getElementById("04").innerHTML = (NUM / 3.048e+8 );
        document.getElementById("05").innerHTML = (NUM / 9.144e+8 );
        document.getElementById("06").innerHTML = (NUM / 1.609e+12);
        document.getElementById("07").innerHTML = (NUM / 254e+7   );
        document.getElementById("08").innerHTML = (NUM / 1e+6     );
        document.getElementById("09").innerHTML = (NUM / 1000     );
        document.getElementById("10").innerHTML = (NUM / 1.852e+12);
        document.getElementsByClassName("ans-NUM").innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = " / 1e+9     ";
        document.getElementById("2-formula").innerHTML = " / 1e+12    ";
        document.getElementById("3-formula").innerHTML = " / 1e+7     ";
        document.getElementById("4-formula").innerHTML = " / 3.048e+8 ";
        document.getElementById("5-formula").innerHTML = " / 9.144e+8 ";
        document.getElementById("6-formula").innerHTML = " / 1.609e+12";
        document.getElementById("7-formula").innerHTML = " / 254e+7   ";
        document.getElementById("8-formula").innerHTML = " / 1e+6     ";
        document.getElementById("9-formula").innerHTML = " / 1000     ";
        document.getElementById("10-formula").innerHTML = "/ 1.852e+12";
    } if (UNIT === 'NMI') {
        document.getElementById("1-text").innerHTML = "NMI to M:  ";
        document.getElementById("2-text").innerHTML = "NMI to KM: ";
        document.getElementById("3-text").innerHTML = "NMI to CM: ";
        document.getElementById("4-text").innerHTML = "NMI to FT: ";
        document.getElementById("5-text").innerHTML = "NMI to YD: ";
        document.getElementById("6-text").innerHTML = "NMI to MI: ";
        document.getElementById("7-text").innerHTML = "NMI to IN: ";
        document.getElementById("8-text").innerHTML = "NMI to MM: ";
        document.getElementById("9-text").innerHTML = "NMI to μM: ";
       document.getElementById("10-text").innerHTML = "NMI to NMI:";

        document.getElementById("11-text").innerHTML = "NMI to M:  ";
        document.getElementById("12-text").innerHTML = "NMI to KM: ";
        document.getElementById("13-text").innerHTML = "NMI to CM: ";
        document.getElementById("14-text").innerHTML = "NMI to FT: ";
        document.getElementById("15-text").innerHTML = "NMI to YD: ";
        document.getElementById("16-text").innerHTML = "NMI to MI: ";
        document.getElementById("17-text").innerHTML = "NMI to IN: ";
        document.getElementById("18-text").innerHTML = "NMI to MM: ";
        document.getElementById("19-text").innerHTML = "NMI to μM: ";
        document.getElementById("20-text").innerHTML = "NMI to NM:";

        document.getElementById("01").innerHTML = (NUM * 1852     );
        document.getElementById("02").innerHTML = (NUM * 1.852    );
        document.getElementById("03").innerHTML = (NUM * 1.852e+2 );
        document.getElementById("04").innerHTML = (NUM * 6076     );
        document.getElementById("05").innerHTML = (NUM * 2025     );
        document.getElementById("06").innerHTML = (NUM * 1.151    );
        document.getElementById("07").innerHTML = (NUM * 72910    );
        document.getElementById("08").innerHTML = (NUM * 1.852e+6 );
        document.getElementById("09").innerHTML = (NUM * 1.852e+9 );
        document.getElementById("10").innerHTML = (NUM * 1.852e+12);
        document.getElementsByClassName("ans-NUM").innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = " * 1852     ";
        document.getElementById("2-formula").innerHTML = " * 1.852    ";
        document.getElementById("3-formula").innerHTML = " * 1.852e+2 ";
        document.getElementById("4-formula").innerHTML = " * 6076     ";
        document.getElementById("5-formula").innerHTML = " * 2025     ";
        document.getElementById("6-formula").innerHTML = " * 1.151    ";
        document.getElementById("7-formula").innerHTML = " * 72910    ";
        document.getElementById("8-formula").innerHTML = " * 1.852e+6 ";
        document.getElementById("9-formula").innerHTML = " * 1.852e+9 ";
        document.getElementById("10-formula").innerHTML = "* 1.852e+12";
    }
};

function Mass() {
    let NUM = document.getElementById('NUM').value || 1;
    let UNIT = document.getElementById('UNIT').value || 'undefined';
    console.log("btn 'BTN-1' pressed.");
    console.log(NUM);
    console.log(UNIT);

    if (UNIT === 'KG') {
        document.getElementById("1-text").innerHTML = "KG to G:     ";
        document.getElementById("2-text").innerHTML = "KG to MG:    ";
        document.getElementById("3-text").innerHTML = "KG to μG:    ";
        document.getElementById("4-text").innerHTML = "KG to TONNE: ";
        document.getElementById("5-text").innerHTML = "KG to I-TON: ";
        document.getElementById("6-text").innerHTML = "KG to US-TON:";
        document.getElementById("7-text").innerHTML = "KG to STONE: ";
        document.getElementById("8-text").innerHTML = "KG to LBS:   ";
        document.getElementById("9-text").innerHTML = "KG to OZ:    ";

        document.getElementById("10-text").innerHTML = "KG to G:     ";
        document.getElementById("11-text").innerHTML = "KG to MG:    ";
        document.getElementById("12-text").innerHTML = "KG to μG:    ";
        document.getElementById("13-text").innerHTML = "KG to TONNE: ";
        document.getElementById("14-text").innerHTML = "KG to I-TON: ";
        document.getElementById("15-text").innerHTML = "KG to US-TON:";
        document.getElementById("16-text").innerHTML = "KG to STONE: ";
        document.getElementById("17-text").innerHTML = "KG to LBS:   ";
        document.getElementById("18-text").innerHTML = "KG to OZ:    ";

        document.getElementById("01").innerHTML = (NUM * 1e+3 );
        document.getElementById("02").innerHTML = (NUM * 1e+6 );
        document.getElementById("03").innerHTML = (NUM * 1e+9 );
        document.getElementById("04").innerHTML = (NUM / 1000 );
        document.getElementById("05").innerHTML = (NUM / 1016 );
        document.getElementById("06").innerHTML = (NUM /907.6 );
        document.getElementById("07").innerHTML = (NUM / 6.35 );
        document.getElementById("08").innerHTML = (NUM *2.205 );
        document.getElementById("09").innerHTML = (NUM *35.274);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 1e+3 ";
        document.getElementById("2-formula").innerHTML = "* 1e+6 ";
        document.getElementById("3-formula").innerHTML = "* 1e+9 ";
        document.getElementById("4-formula").innerHTML = "/ 1000 ";
        document.getElementById("5-formula").innerHTML = "/ 1016 ";
        document.getElementById("6-formula").innerHTML = "/907.6 ";
        document.getElementById("7-formula").innerHTML = "/ 6.35 ";
        document.getElementById("8-formula").innerHTML = "*2.205 ";
        document.getElementById("9-formula").innerHTML = "*35.274";

        Hide(UNIT);
    } if (UNIT === 'G') {
        document.getElementById("1-text").innerHTML = "G to KG:     ";
        document.getElementById("2-text").innerHTML = "G to MG:    ";
        document.getElementById("3-text").innerHTML = "G to μG:    ";
        document.getElementById("4-text").innerHTML = "G to TONNE: ";
        document.getElementById("5-text").innerHTML = "G to I-TON: ";
        document.getElementById("6-text").innerHTML = "G to US-TON:";
        document.getElementById("7-text").innerHTML = "G to STONE: ";
        document.getElementById("9-text").innerHTML = "G to OZ:    ";
        document.getElementById("8-text").innerHTML = "G to LBS:   ";

        document.getElementById("10-text").innerHTML = "G to KG:     ";
        document.getElementById("11-text").innerHTML = "G to MG:    ";
        document.getElementById("12-text").innerHTML = "G to μG:    ";
        document.getElementById("13-text").innerHTML = "G to TONNE: ";
        document.getElementById("14-text").innerHTML = "G to I-TON: ";
        document.getElementById("15-text").innerHTML = "G to US-TON:";
        document.getElementById("16-text").innerHTML = "G to STONE: ";
        document.getElementById("17-text").innerHTML = "G to LBS:   ";
        document.getElementById("18-text").innerHTML = "G to OZ:    ";

        document.getElementById("01").innerHTML = (NUM / 1000  );
        document.getElementById("02").innerHTML = (NUM * 1000  );
        document.getElementById("04").innerHTML = (NUM / 1e+6  );
        document.getElementById("03").innerHTML = (NUM * 1e+6  );
        document.getElementById("05").innerHTML = (NUM /1.01e+6);
        document.getElementById("06").innerHTML = (NUM /907200 );
        document.getElementById("07").innerHTML = (NUM /6350   );
        document.getElementById("08").innerHTML = (NUM / 453.6 );
        document.getElementById("09").innerHTML = (NUM / 28.35 );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 1000  ";
        document.getElementById("2-formula").innerHTML = "* 1000  ";
        document.getElementById("3-formula").innerHTML = "/ 1e+6  ";
        document.getElementById("4-formula").innerHTML = "* 1e+6  ";
        document.getElementById("5-formula").innerHTML = "/1.01e+6";
        document.getElementById("6-formula").innerHTML = "/907200 ";
        document.getElementById("7-formula").innerHTML = "/6350   ";
        document.getElementById("8-formula").innerHTML = "/ 453.6 ";
        document.getElementById("9-formula").innerHTML = "/ 28.35 ";

        Hide(UNIT);
    } if (UNIT === 'US-TON') {
        document.getElementById("1-text").innerHTML = "US-TON to KG:    ";
        document.getElementById("2-text").innerHTML = "US-TON to G:     ";
        document.getElementById("3-text").innerHTML = "US-TON to MG:    ";
        document.getElementById("4-text").innerHTML = "US-TON to μG:    "; 
        document.getElementById("5-text").innerHTML = "US-TON to TONNE: ";
        document.getElementById("6-text").innerHTML = "US-TON to I-TON  ";
        document.getElementById("7-text").innerHTML = "US-TON to STONE: ";
        document.getElementById("9-text").innerHTML = "US-TON to OZ:    ";
        document.getElementById("8-text").innerHTML = "US-TON to LBS:   ";

        document.getElementById("10-text").innerHTML = "US-TON to KG:    ";
        document.getElementById("11-text").innerHTML = "US-TON to G:     ";
        document.getElementById("12-text").innerHTML = "US-TON to MG:    ";
        document.getElementById("13-text").innerHTML = "US-TON to μG:    ";
        document.getElementById("14-text").innerHTML = "US-TON to TONNE: ";
        document.getElementById("15-text").innerHTML = "US-TON to I-TON  ";
        document.getElementById("16-text").innerHTML = "US-TON to STONE: ";
        document.getElementById("17-text").innerHTML = "US-TON to OZ:    ";
        document.getElementById("18-text").innerHTML = "US-TON to LBS:   ";

        document.getElementById("01").innerHTML = (NUM * 907.2    );
        document.getElementById("02").innerHTML = (NUM * 907200   );
        document.getElementById("03").innerHTML = (NUM * 9.072e+8 );
        document.getElementById("04").innerHTML = (NUM * 9.072e+11);
        document.getElementById("05").innerHTML = (NUM / 1.102    );
        document.getElementById("06").innerHTML = (NUM / 1.12     );
        document.getElementById("07").innerHTML = (NUM * 142.9    );
        document.getElementById("08").innerHTML = (NUM * 2000     );
        document.getElementById("09").innerHTML = (NUM * 32000    );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 907.2    ";
        document.getElementById("2-formula").innerHTML = "* 907200   ";
        document.getElementById("3-formula").innerHTML = "* 9.072e+8 ";
        document.getElementById("4-formula").innerHTML = "* 9.072e+11";
        document.getElementById("5-formula").innerHTML = "/ 1.102    ";
        document.getElementById("6-formula").innerHTML = "/ 1.12     ";
        document.getElementById("7-formula").innerHTML = "* 142.9    ";
        document.getElementById("8-formula").innerHTML = "* 2000     ";
        document.getElementById("9-formula").innerHTML = "* 32000    ";

        Hide(UNIT);
    } if (UNIT === 'LBS') {
        document.getElementById("1-text").innerHTML = "LBS to KG:   ";
        document.getElementById("2-text").innerHTML = "LBS to G:    ";
        document.getElementById("3-text").innerHTML = "LBS to MG:   ";
        document.getElementById("4-text").innerHTML = "LBS to μG:   "; 
        document.getElementById("5-text").innerHTML = "LBS to TONNE: ";
        document.getElementById("6-text").innerHTML = "LBS to I-TON: ";
        document.getElementById("7-text").innerHTML = "LBS to US-TON:";
        document.getElementById("9-text").innerHTML = "LBS to STONE: ";
        document.getElementById("8-text").innerHTML = "LBS to OZ:    ";

        document.getElementById("10-text").innerHTML = "LBS to KG:   ";
        document.getElementById("11-text").innerHTML = "LBS to G:    ";
        document.getElementById("12-text").innerHTML = "LBS to MG:   ";
        document.getElementById("13-text").innerHTML = "LBS to μG:   ";
        document.getElementById("14-text").innerHTML = "LBS to TONNE: ";
        document.getElementById("15-text").innerHTML = "LBS to I-TON: ";
        document.getElementById("16-text").innerHTML = "LBS to US-TON:";
        document.getElementById("17-text").innerHTML = "LBS to STONE: ";
        document.getElementById("18-text").innerHTML = "LBS to OZ:    ";

        document.getElementById("01").innerHTML = (NUM / 2.205    );
        document.getElementById("02").innerHTML = (NUM * 453.6    );
        document.getElementById("03").innerHTML = (NUM * 453600   );
        document.getElementById("04").innerHTML = (NUM * 34.536e+8);
        document.getElementById("05").innerHTML = (NUM / 2205     );
        document.getElementById("06").innerHTML = (NUM / 2240     );
        document.getElementById("07").innerHTML = (NUM / 2000     );
        document.getElementById("08").innerHTML = (NUM / 14       );
        document.getElementById("09").innerHTML = (NUM * 16       );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 2.205    ";
        document.getElementById("2-formula").innerHTML = "* 453.6    ";
        document.getElementById("3-formula").innerHTML = "* 453600   ";
        document.getElementById("4-formula").innerHTML = "* 34.536e+8";
        document.getElementById("5-formula").innerHTML = "/ 2205     ";
        document.getElementById("6-formula").innerHTML = "/ 2240     ";
        document.getElementById("7-formula").innerHTML = "/ 2000     ";
        document.getElementById("8-formula").innerHTML = "/ 14       ";
        document.getElementById("9-formula").innerHTML = "* 16       ";

        Hide(UNIT);
    } if (UNIT === 'MG') {
        document.getElementById("1-text").innerHTML = "MG to KG:    ";
        document.getElementById("2-text").innerHTML = "MG to G:     ";
        document.getElementById("3-text").innerHTML = "MG to μG:    ";
        document.getElementById("4-text").innerHTML = "MG to TONNE: "; 
        document.getElementById("5-text").innerHTML = "MG to I-TON: ";
        document.getElementById("6-text").innerHTML = "MG to US-TON:";
        document.getElementById("7-text").innerHTML = "MG to STONE: ";
        document.getElementById("9-text").innerHTML = "MG to LBS:   ";
        document.getElementById("8-text").innerHTML = "MG to OZ:    ";

        document.getElementById("10-text").innerHTML = "MG to KG:    ";
        document.getElementById("11-text").innerHTML = "MG to G:     ";
        document.getElementById("12-text").innerHTML = "MG to μG:    ";
        document.getElementById("13-text").innerHTML = "MG to TONNE: ";
        document.getElementById("14-text").innerHTML = "MG to I-TON: ";
        document.getElementById("15-text").innerHTML = "MG to US-TON:";
        document.getElementById("16-text").innerHTML = "MG to STONE: ";
        document.getElementById("17-text").innerHTML = "MG to LBS:   ";
        document.getElementById("18-text").innerHTML = "MG to OZ:    ";

        document.getElementById("01").innerHTML = (NUM / 1e+6    );
        document.getElementById("02").innerHTML = (NUM / 1000    );
        document.getElementById("03").innerHTML = (NUM * 1000    );
        document.getElementById("04").innerHTML = (NUM / 1e+9    );
        document.getElementById("05").innerHTML = (NUM / 1.016e+6);
        document.getElementById("06").innerHTML = (NUM / 9.072e+8);
        document.getElementById("07").innerHTML = (NUM / 6.35e+6 );
        document.getElementById("08").innerHTML = (NUM / 45600   );
        document.getElementById("09").innerHTML = (NUM / 283500  );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 1e+6    ";
        document.getElementById("2-formula").innerHTML = "/ 1000    ";
        document.getElementById("3-formula").innerHTML = "* 1000    ";
        document.getElementById("4-formula").innerHTML = "/ 1e+9    ";
        document.getElementById("5-formula").innerHTML = "/ 1.016e+6";
        document.getElementById("6-formula").innerHTML = "/ 9.072e+8";
        document.getElementById("7-formula").innerHTML = "/ 6.35e+6 ";
        document.getElementById("8-formula").innerHTML = "/ 45600   ";
        document.getElementById("9-formula").innerHTML = "/ 283500  ";
        Hide(UNIT);
    } if (UNIT === 'TONE') {
        document.getElementById("1-text").innerHTML = "TONNE to KG:    ";
        document.getElementById("2-text").innerHTML = "TONNE to G:     ";
        document.getElementById("3-text").innerHTML = "TONNE to MG:    ";
        document.getElementById("4-text").innerHTML = "TONNE to μG:    "; 
        document.getElementById("5-text").innerHTML = "TONNE to I-TON: ";
        document.getElementById("6-text").innerHTML = "TONNE to US-TON:";
        document.getElementById("7-text").innerHTML = "TONNE to STONE: ";
        document.getElementById("9-text").innerHTML = "TONNE to LBS:   ";
        document.getElementById("8-text").innerHTML = "TONNE to OZ:    ";

        document.getElementById("10-text").innerHTML = "TONNE to KG:    ";
        document.getElementById("11-text").innerHTML = "TONNE to G:     ";
        document.getElementById("12-text").innerHTML = "TONNE to MG:    ";
        document.getElementById("13-text").innerHTML = "TONNE to μG:    ";
        document.getElementById("14-text").innerHTML = "TONNE to I-TON: ";
        document.getElementById("15-text").innerHTML = "TONNE to US-TON:";
        document.getElementById("16-text").innerHTML = "TONNE to STONE: ";
        document.getElementById("17-text").innerHTML = "TONNE to LBS:   ";
        document.getElementById("18-text").innerHTML = "TONNE to OZ:    ";

        document.getElementById("01").innerHTML = (NUM * 1000 );
        document.getElementById("02").innerHTML = (NUM * 1e+6 );
        document.getElementById("03").innerHTML = (NUM * 1e+9 );
        document.getElementById("04").innerHTML = (NUM * 1e+12);
        document.getElementById("05").innerHTML = (NUM * 1.016);
        document.getElementById("06").innerHTML = (NUM * 1.102);
        document.getElementById("07").innerHTML = (NUM * 157.5);
        document.getElementById("08").innerHTML = (NUM * 2205 );
        document.getElementById("09").innerHTML = (NUM * 35270);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 1000 ";
        document.getElementById("2-formula").innerHTML = "* 1e+6 ";
        document.getElementById("3-formula").innerHTML = "* 1e+9 ";
        document.getElementById("4-formula").innerHTML = "* 1e+12";
        document.getElementById("5-formula").innerHTML = "* 1.016";
        document.getElementById("6-formula").innerHTML = "* 1.102";
        document.getElementById("7-formula").innerHTML = "* 157.5";
        document.getElementById("8-formula").innerHTML = "* 2205 ";
        document.getElementById("9-formula").innerHTML = "* 35270";
        Hide(UNIT);
    } if (UNIT === 'MicroG') {
        document.getElementById("1-text").innerHTML = "μG to KG:    ";
        document.getElementById("2-text").innerHTML = "μG to G:     ";
        document.getElementById("3-text").innerHTML = "μG to MG:    ";
        document.getElementById("4-text").innerHTML = "μG to TONNE: "; 
        document.getElementById("5-text").innerHTML = "μG to I-TON: ";
        document.getElementById("6-text").innerHTML = "μG to US-TON:";
        document.getElementById("7-text").innerHTML = "μG to STONE: ";
        document.getElementById("9-text").innerHTML = "μG to LBS:   ";
        document.getElementById("8-text").innerHTML = "μG to OZ:    ";

        document.getElementById("10-text").innerHTML = "μG to KG:    ";
        document.getElementById("11-text").innerHTML = "μG to G:     ";
        document.getElementById("12-text").innerHTML = "μG to MG:    ";
        document.getElementById("13-text").innerHTML = "μG to TONNE: ";
        document.getElementById("14-text").innerHTML = "μG to I-TON: ";
        document.getElementById("15-text").innerHTML = "μG to US-TON:";
        document.getElementById("16-text").innerHTML = "μG to STONE: ";
        document.getElementById("17-text").innerHTML = "μG to LBS:   ";
        document.getElementById("18-text").innerHTML = "μG to OZ:    ";

        document.getElementById("01").innerHTML = (NUM / 1e+9     );
        document.getElementById("02").innerHTML = (NUM / 1e+6     );
        document.getElementById("03").innerHTML = (NUM / 1000     );
        document.getElementById("04").innerHTML = (NUM / 1e+12    );
        document.getElementById("05").innerHTML = (NUM / 1.016e+12);
        document.getElementById("06").innerHTML = (NUM / 9.072e+11);
        document.getElementById("07").innerHTML = (NUM / 6.35e+9  );
        document.getElementById("08").innerHTML = (NUM / 4.536e+8 );
        document.getElementById("09").innerHTML = (NUM / 2.835e+7 );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 1e+9     ";
        document.getElementById("2-formula").innerHTML = "/ 1e+6     ";
        document.getElementById("3-formula").innerHTML = "/ 1000     ";
        document.getElementById("4-formula").innerHTML = "/ 1e+12    ";
        document.getElementById("5-formula").innerHTML = "/ 1.016e+12";
        document.getElementById("6-formula").innerHTML = "/ 9.072e+11";
        document.getElementById("7-formula").innerHTML = "/ 6.35e+9  ";
        document.getElementById("8-formula").innerHTML = "/ 4.536e+8 ";
        document.getElementById("9-formula").innerHTML = "/ 2.835e+7 ";
        Hide(UNIT);
    } if (UNIT === 'OZ') {
        document.getElementById("1-text").innerHTML = "OZ to KG:     ";
        document.getElementById("2-text").innerHTML = "OZ to G:    ";
        document.getElementById("3-text").innerHTML = "OZ to MG:    ";
        document.getElementById("4-text").innerHTML = "OZ to μG:    "; 
        document.getElementById("5-text").innerHTML = "OZ to TONNE: ";
        document.getElementById("6-text").innerHTML = "OZ to I-TON: ";
        document.getElementById("7-text").innerHTML = "OZ to US-ton:";
        document.getElementById("8-text").innerHTML = "OZ to STONE: ";
        document.getElementById("9-text").innerHTML = "OZ to LBS:   ";

        document.getElementById("10-text").innerHTML = "OZ to KG:     ";
        document.getElementById("11-text").innerHTML = "OZ to G:    ";
        document.getElementById("12-text").innerHTML = "OZ to MG:    ";
        document.getElementById("13-text").innerHTML = "OZ to μG:    ";
        document.getElementById("14-text").innerHTML = "OZ to TONNE: ";
        document.getElementById("15-text").innerHTML = "OZ to I-TON: ";
        document.getElementById("16-text").innerHTML = "OZ to US-ton:";
        document.getElementById("17-text").innerHTML = "OZ to STONE: ";
        document.getElementById("18-text").innerHTML = "OZ to LBS:   ";

        document.getElementById("01").innerHTML = (NUM / 35.274  );
        document.getElementById("02").innerHTML = (NUM * 28.35   );
        document.getElementById("03").innerHTML = (NUM * 283500  );
        document.getElementById("04").innerHTML = (NUM * 2.835e+7);
        document.getElementById("05").innerHTML = (NUM / 35270   );
        document.getElementById("06").innerHTML = (NUM / 35840   );
        document.getElementById("07").innerHTML = (NUM / 32000   );
        document.getElementById("08").innerHTML = (NUM / 224     );
        document.getElementById("09").innerHTML = (NUM / 16      );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 35.274  ";
        document.getElementById("2-formula").innerHTML = "* 28.35   ";
        document.getElementById("3-formula").innerHTML = "* 283500  ";
        document.getElementById("4-formula").innerHTML = "* 2.835e+7";
        document.getElementById("5-formula").innerHTML = "/ 35270   ";
        document.getElementById("6-formula").innerHTML = "/ 35840   ";
        document.getElementById("7-formula").innerHTML = "/ 32000   ";
        document.getElementById("8-formula").innerHTML = "/ 224     ";
        document.getElementById("9-formula").innerHTML = "/ 16      ";
        Hide(UNIT);
    } if (UNIT === 'I-TON') {
        document.getElementById("1-text").innerHTML = "I-TON to KG:     ";
        document.getElementById("2-text").innerHTML = "I-TON to G:    ";
        document.getElementById("3-text").innerHTML = "I-TON to MG:    ";
        document.getElementById("4-text").innerHTML = "I-TON to μG:    "; 
        document.getElementById("5-text").innerHTML = "I-TON to TONNE: ";
        document.getElementById("6-text").innerHTML = "I-TON to US-TON: ";
        document.getElementById("7-text").innerHTML = "I-TON to STONE: ";
        document.getElementById("8-text").innerHTML = "I-TON to LBS:   ";
        document.getElementById("9-text").innerHTML = "I-TON to OZ:    ";

        document.getElementById("10-text").innerHTML = "I-TON to KG:     ";
        document.getElementById("11-text").innerHTML = "I-TON to G:    ";
        document.getElementById("12-text").innerHTML = "I-TON to MG:    ";
        document.getElementById("13-text").innerHTML = "I-TON to μG:    ";
        document.getElementById("14-text").innerHTML = "I-TON to TONNE: ";
        document.getElementById("15-text").innerHTML = "I-TON to US-TON:";
        document.getElementById("16-text").innerHTML = "I-TON to STONE: ";
        document.getElementById("17-text").innerHTML = "I-TON to LBS:   ";
        document.getElementById("18-text").innerHTML = "I-TON to OZ:    ";

        document.getElementById("01").innerHTML = (NUM * 1016     );
        document.getElementById("02").innerHTML = (NUM * 1.01e+6  );
        document.getElementById("03").innerHTML = (NUM * 1.016e+6 );
        document.getElementById("04").innerHTML = (NUM * 1.016e+12);
        document.getElementById("05").innerHTML = (NUM * 1.016    );
        document.getElementById("06").innerHTML = (NUM * 1.12     );
        document.getElementById("07").innerHTML = (NUM * 160      );
        document.getElementById("08").innerHTML = (NUM * 2240     );
        document.getElementById("09").innerHTML = (NUM * 35840    );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 1016     ";
        document.getElementById("2-formula").innerHTML = "* 1.01e+6  ";
        document.getElementById("3-formula").innerHTML = "* 1.016e+6 ";
        document.getElementById("4-formula").innerHTML = "* 1.016e+12";
        document.getElementById("5-formula").innerHTML = "* 1.016    ";
        document.getElementById("6-formula").innerHTML = "* 1.12     ";
        document.getElementById("7-formula").innerHTML = "* 160      ";
        document.getElementById("8-formula").innerHTML = "* 2240     ";
        document.getElementById("9-formula").innerHTML = "* 35840    ";
        Hide(UNIT);
    } if (UNIT === 'STONE') {
        document.getElementById("1-text").innerHTML = "STONE? to G:     ";
        document.getElementById("2-text").innerHTML = "STONE? to KG:    ";
        document.getElementById("3-text").innerHTML = "STONE? to MG:    ";
        document.getElementById("4-text").innerHTML = "STONE? to μG:    "; 
        document.getElementById("5-text").innerHTML = "STONE? to TONNE: ";
        document.getElementById("6-text").innerHTML = "STONE? to US-TON:";
        document.getElementById("7-text").innerHTML = "STONE? to I-TON: ";
        document.getElementById("8-text").innerHTML = "STONE? to LBS:   ";
        document.getElementById("9-text").innerHTML = "STONE? to OZ:    ";

        document.getElementById("10-text").innerHTML = "STONE? to G:     ";
        document.getElementById("11-text").innerHTML = "STONE? to KG:    ";
        document.getElementById("12-text").innerHTML = "STONE? to MG:    ";
        document.getElementById("13-text").innerHTML = "STONE? to μG:    ";
        document.getElementById("14-text").innerHTML = "STONE? to TONNE: ";
        document.getElementById("15-text").innerHTML = "STONE? to US-TON:";
        document.getElementById("16-text").innerHTML = "STONE? to I-TON: ";
        document.getElementById("17-text").innerHTML = "STONE? to LBS:   ";
        document.getElementById("18-text").innerHTML = "STONE? to OZ:    ";

        document.getElementById("01").innerHTML = (NUM * 6.35);
        document.getElementById("02").innerHTML = (NUM * 6350);
        document.getElementById("03").innerHTML = (NUM * 6.35e+6);
        document.getElementById("04").innerHTML = (NUM * 1.016e+12);
        document.getElementById("05").innerHTML = (NUM * 1.016);
        document.getElementById("06").innerHTML = (NUM * 142.9);
        document.getElementById("07").innerHTML = (NUM * 1.016);
        document.getElementById("08").innerHTML = (NUM * 14);
        document.getElementById("09").innerHTML = (NUM * 35270);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 1016     ";
        document.getElementById("2-formula").innerHTML = "* 1.01e+6  ";
        document.getElementById("3-formula").innerHTML = "* 1.016e+6 ";
        document.getElementById("4-formula").innerHTML = "* 1.016e+12";
        document.getElementById("5-formula").innerHTML = "* 1.016    ";
        document.getElementById("6-formula").innerHTML = "* 1.12     ";
        document.getElementById("7-formula").innerHTML = "* 160      ";
        document.getElementById("8-formula").innerHTML = "* 2240     ";
        document.getElementById("9-formula").innerHTML = "* 35840    ";
        Hide(UNIT);
    }
};

function Time() {
    let NUM = document.getElementById('NUM').value || 1;
    let UNIT = document.getElementById('UNIT').value || 'undefined';
    console.log("btn 'BTN-1' pressed.");
    console.log(NUM);
    console.log(UNIT);

    if (UNIT === 'S') {
        document.getElementById("1-text").innerHTML = "S to M:";
        document.getElementById("2-text").innerHTML = "S to H:";
        document.getElementById("3-text").innerHTML = "S to M:";
        document.getElementById("4-text").innerHTML = "S to H:";

        document.getElementById("01").innerHTML = (NUM / 60   );
        document.getElementById("02").innerHTML = (NUM / 3600 );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 60   ";
        document.getElementById("2-formula").innerHTML = "/ 3600 ";
        Hide(UNIT)
    } if (UNIT === 'M') {
        document.getElementById("1-text").innerHTML = "M to S:";
        document.getElementById("2-text").innerHTML = "M to H:";
        document.getElementById("3-text").innerHTML = "M to S:";
        document.getElementById("4-text").innerHTML = "M to H:";

        document.getElementById("01").innerHTML = (NUM * 60 );
        document.getElementById("02").innerHTML = (NUM / 60 );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 60   ";
        document.getElementById("2-formula").innerHTML = "/ 60 ";
        Hide(UNIT)
    } if (UNIT === 'H') {
        document.getElementById("1-text").innerHTML = "H to S:";
        document.getElementById("2-text").innerHTML = "H to M:";
        document.getElementById("3-text").innerHTML = "H to S:";
        document.getElementById("4-text").innerHTML = "H to M:";

        document.getElementById("01").innerHTML = (NUM * 60   );
        document.getElementById("02").innerHTML = (NUM * 3600 );
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 60   ";
        document.getElementById("2-formula").innerHTML = "* 3600 ";
        Hide(UNIT)
    };
}; 

function Temp() {
    let NUM = document.getElementById('NUM').value || 1;
    let UNIT = document.getElementById('UNIT').value || 'undefined';
    console.log("btn 'BTN-1' pressed.");
    console.log(NUM);
    console.log(UNIT);

    if (UNIT === 'K') {
        document.getElementById("1-text").innerHTML = "K to C:";
        document.getElementById("2-text").innerHTML = "K to F:";
        document.getElementById("3-text").innerHTML = "K to C:";
        document.getElementById("4-text").innerHTML = "K to F(Formula):";

        document.getElementById("01").innerHTML = (NUM - 273.15);
        document.getElementById("02").innerHTML = ((NUM - 273.15) * 9/5 + 32);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "- 273.15";
        document.getElementById("2-formula").innerHTML = "(NUMBER - 273.15) * 9/5 + 32)";
        Hide(UNIT)
    } if (UNIT === 'C') {
        document.getElementById("1-text").innerHTML = "C to K:";
        document.getElementById("2-text").innerHTML = "C to F:";
        document.getElementById("3-text").innerHTML = "C to K:";
        document.getElementById("4-text").innerHTML = "C to F(Formula):";

        document.getElementById("01").innerHTML = (NUM + 273.15);
        document.getElementById("02").innerHTML = ((NUM * 9/5) + 32);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "+ 273.15";
        document.getElementById("2-formula").innerHTML = "(NUMBER * 9/5) + 32)";
        Hide(UNIT)
    } if (UNIT === 'F') {
        document.getElementById("1-text").innerHTML = "F to K:";
        document.getElementById("2-text").innerHTML = "F to C:";
        document.getElementById("3-text").innerHTML = "F to K(Formula):";
        document.getElementById("4-text").innerHTML = "F to C(Formula):";

        document.getElementById("01").innerHTML = ((NUM - 32) * 5/9 + 273.15);
        document.getElementById("02").innerHTML = ((NUM - 32) * 5/9);
        document.getElementsByClassName('ans-text-NUM').innerHTML = "";

        document.getElementById("1-formula").innerHTML = "(NUMBER - 32) * 5/9 + 273.15)";
        document.getElementById("2-formula").innerHTML = "(NUMBER - 32) * 5/9";
        Hide(UNIT)
    }
};

function Liquids() {

    let NUM = document.getElementById('NUM').value || 1;
    let UNIT = document.getElementById('UNIT').value || 'undefined';
    console.log("btn 'BTN-1' pressed.");
    console.log(NUM);
    console.log(UNIT);

    if (UNIT === "L") {
        document.getElementById("1-text").innerHTML = "L to CL:";
        document.getElementById("2-text").innerHTML = "L to ML:";
        document.getElementById("3-text").innerHTML = "L to OZ:";

        document.getElementById("4-text").innerHTML = "L to CL:";
        document.getElementById("5-text").innerHTML = "L to ML:";
        document.getElementById("6-text").innerHTML = "L to OZ:";

        document.getElementById("01").innerHTML = (NUM * 100    );
        document.getElementById("02").innerHTML = (NUM * 1000   );
        document.getElementById("03").innerHTML = (NUM * 32.1951);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "* 100    ";
        document.getElementById("2-formula").innerHTML = "* 1000   ";
        document.getElementById("3-formula").innerHTML = "* 32.1951";
        Hide(UNIT)
    } if (UNIT === "CL") {
        document.getElementById("1-text").innerHTML = "CL to L:";
        document.getElementById("2-text").innerHTML = "CL to ML:";
        document.getElementById("3-text").innerHTML = "CL to OZ:";

        document.getElementById("4-text").innerHTML = "CL to L:";
        document.getElementById("5-text").innerHTML = "CL to ML:";
        document.getElementById("6-text").innerHTML = "CL to OZ:";

        document.getElementById("01").innerHTML = (NUM / 100  );
        document.getElementById("02").innerHTML = (NUM * 10   );
        document.getElementById("03").innerHTML = (NUM / 2.841);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 100  ";
        document.getElementById("2-formula").innerHTML = "* 10   ";
        document.getElementById("3-formula").innerHTML = "/ 2.841";
        Hide(UNIT)
    } if (UNIT === "ML") {
        document.getElementById("1-text").innerHTML = "ML to L:";
        document.getElementById("2-text").innerHTML = "ML to CL:";
        document.getElementById("3-text").innerHTML = "ML to OZ:";

        document.getElementById("4-text").innerHTML = "ML to L:";
        document.getElementById("5-text").innerHTML = "ML to CL:";
        document.getElementById("6-text").innerHTML = "ML to OZ:";

        document.getElementById("01").innerHTML = (NUM / 1000  );
        document.getElementById("02").innerHTML = (NUM / 10    );
        document.getElementById("03").innerHTML = (NUM / 28.413);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 1000  ";
        document.getElementById("2-formula").innerHTML = "/ 10    ";
        document.getElementById("3-formula").innerHTML = "/ 28.413";
        Hide(UNIT)
    } if (UNIT === "OZ") {
        document.getElementById("1-text").innerHTML = "OZ to L:";
        document.getElementById("2-text").innerHTML = "OZ to CL:";
        document.getElementById("3-text").innerHTML = "OZ to ML:";

        document.getElementById("4-text").innerHTML = "OZ to L:";
        document.getElementById("5-text").innerHTML = "OZ to CL:";
        document.getElementById("6-text").innerHTML = "OZ to ML:";

        document.getElementById("01").innerHTML = (NUM / 35.195);
        document.getElementById("02").innerHTML = (NUM * 2.841 );
        document.getElementById("03").innerHTML = (NUM * 28.413);
        document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

        document.getElementById("1-formula").innerHTML = "/ 35.195";
        document.getElementById("2-formula").innerHTML = "* 2.841 ";
        document.getElementById("3-formula").innerHTML = "* 28.413";
        Hide(UNIT)
    };
};

if (document.URL.includes("Home.html") || document.URL.includes("home")) {
    console.log("you are in the home page")
    let type = document.getElementById("TYPE").value || 'null';

    lightDarkMode()

    function Type() {
        let type = document.getElementById("TYPE").value || 'null';
        if (type === 'null') {
            alert("Please select a type of measurement.")
        } if (type === 'LEN') {
            document.getElementById("unit").innerHTML = '<select name="unit" id="UNIT"><option value="M">Meters</option><option value="KM">Kilometers</option><option value="CM">Centimeters</option><option value="FT">Feet</option><option value="YD">Yards</option><option value="MI">Miles</option><option value="IN">Inches</option><option value="MM">Millimeters</option><option value="μM">Micrometers</option><option value="NM">Nanometers</option><option value="NMI">Nautical Mile</option></select>';
            document.getElementById("legend").innerHTML = '<p class="Legend-text"> M = Meter/Metro </p><p class="Legend-text"> KM = Kilometer/Kilómetro </p><p class="Legend-text"> CM = Centimeter/Centímetro </p><p class="Legend-text"> FT = Feet/Pies </p><p class="Legend-text"> YD = Yards/yardas </p><p class="Legend-text"> MI = Miles/Millas</p><p class="Legend-text"> IN = Inches/Pulgadas</p><p class="Legend-text"> MM = Millimeter</p><p class="Legend-text"> μM = Micrometer</p><p class="Legend-text"> NM = Nanometer</p><p class="Legend-text"> NMI = Nautical Mile</p>';
            document.getElementById("1").innerHTML = '<p class="ans-text"> <span id="1-text"></span> <span id="01"></span></p><p class="ans-text"> <span id="2-text"></span> <span id="02"></span></p><p class="ans-text"> <span id="3-text"></span> <span id="03"></span></p><p class="ans-text"> <span id="4-text"></span> <span id="04"></span></p><p class="ans-text"> <span id="5-text"></span> <span id="05"></span></p><p class="ans-text"> <span id="6-text"></span> <span id="06"></span></p><p class="ans-text"> <span id="7-text"></span> <span id="07"></span></p><p class="ans-text"> <span id="8-text"></span> <span id="08"></span></p><p class="ans-text"> <span id="9-text"></span> <span id="09"></span></p><p class="ans-text"> <span id="10-text"></span> <span id="10"></span></p>';
            document.getElementById("2").innerHTML = '<p class="ans-text"> <span id="11-text"></span> <span class="ans-text-NUM"></span> <span id="1-formula"></span></p><p class="ans-text"> <span id="12-text"></span> <span class="ans-text-NUM"></span> <span id="2-formula"></span></p><p class="ans-text"> <span id="13-text"></span> <span class="ans-text-NUM"></span> <span id="3-formula"></span></p><p class="ans-text, delete-1"> <span id="14-text"></span> <span class="ans-text-NUM"></span> <span id="4-formula"></span></p><p class="ans-text, delete-2"> <span id="15-text"></span> <span class="ans-text-NUM"></span> <span id="5-formula"></span></p><p class="ans-text, delete-3"> <span id="16-text"></span> <span class="ans-text-NUM"></span> <span id="6-formula"></span></p><p class="ans-text, delete-4"> <span id="17-text"></span> <span class="ans-text-NUM"></span> <span id="7-formula"></span></p><p class="ans-text, delete-5"> <span id="18-text"></span> <span class="ans-text-NUM"></span> <span id="8-formula"></span></p><p class="ans-text, delete-6"> <span id="19-text"></span> <span class="ans-text-NUM"></span> <span id="9-formula"></span></p><p class="ans-text, delete-7"> <span id="20-text"></span> <span class="ans-text-NUM"></span> <span id="10-formula"></span></p>';
        } if (type === 'TIME') {
            document.getElementById("unit").innerHTML = '<select aria-label="unit selector" name="UNIT" id="UNIT"><option value="H">Hours</option><option value="S">Seconds</option><option value="M">Minutes</option></select>';
            document.getElementById("legend").innerHTML = '<p class="Legend-text"> S = Second/Segundo </p><p class="Legend-text"> M = Minute/Minuto </p><p class="Legend-text"> H = Hours/Horas </p>';
            document.getElementById("1").innerHTML = '<p class="ans-text" > <span id="1-text"></span> <span id="01"></span></p><p class="ans-text" > <span id="2-text"></span> <span id="02"></span></p>'
            document.getElementById("2").innerHTML = '<p class="ans-text"> <span id="3-text"></span> <span class="ans-text-NUM"></span> <span id="1-formula"></span></p><p class="ans-text"> <span id="4-text"></span> <span class="ans-text-NUM"></span> <span id="2-formula"></span></p>'
        } if (type === 'MASS') {
            document.getElementById("unit").innerHTML = '<select aria-label="unit selector" name="UNIT" id="UNIT"><option value="KG">Kilograms</option><option value="G">grams</option><option value="MG">Milligrams</option><option value="MicroG">Micrograms</option><option value="TONE">Metric TON(TONNE)</option><option value="I-TON">Imperial TON</option><option value="US-TON">US Tons</option><option value="STONE">Stone</option><option value="LBS">Pounds</option><option value="OZ">Ounce</option></select>'; 
            document.getElementById("legend").innerHTML = '<p class="Legend-text"> KG = Kilogram/Kilogramo </p><p class="Legend-text"> G = Gram/Gramo </p><p class="Legend-text"> MG = Milligram/Miligramo </p><p class="Legend-text"> μG = Microgram/Micro gramo </p><p class="Legend-text"> LBS = Pound/Libra </p><p class="Legend-text"> US-TON = US Ton/Tonelada Americana </p><p class="Legend-text"> I-TON = Imperial Ton/Tonelada Imperial </p><p class="Legend-text"> TONNE = Metric Ton/Tonelada Métrica </p><p class="Legend-text"> OZ = Ounce/Onza </p><p class="Legend-text"> STONE = Literal Stone/Roca </p>';
            document.getElementById("1").innerHTML = '<p class="ans-text" > <span id="1-text"></span> <span id="01"></span></p><p class="ans-text" > <span id="2-text"></span> <span id="02"></span></p><p class="ans-text" > <span id="3-text"></span> <span id="03"></span></p><p class="ans-text" > <span id="4-text"></span> <span id="04"></span></p><p class="ans-text" > <span id="5-text"></span> <span id="05"></span></p><p class="ans-text" > <span id="6-text"></span> <span id="06"></span></p><p class="ans-text" > <span id="7-text"></span> <span id="07"></span></p><p class="ans-text" > <span id="8-text"></span> <span id="08"></span></p><p class="ans-text" > <span id="9-text"></span> <span id="09"></span></p>';
            document.getElementById("2").innerHTML = '<p class="ans-text"> <span id="10-text"></span> <span class="ans-text-NUM"></span> <span id="1-formula"></span></p><p class="ans-text"> <span id="11-text"></span> <span class="ans-text-NUM"></span> <span id="2-formula"></span></p><p class="ans-text"> <span id="12-text"></span> <span class="ans-text-NUM"></span> <span id="3-formula"></span></p><p class="ans-text"> <span id="13-text"></span> <span class="ans-text-NUM"></span> <span id="4-formula"></span></p><p class="ans-text"> <span id="14-text"></span> <span class="ans-text-NUM"></span> <span id="5-formula"></span></p><p class="ans-text"> <span id="15-text"></span> <span class="ans-text-NUM"></span> <span id="6-formula"></span></p><p class="ans-text"> <span id="16-text"></span> <span class="ans-text-NUM"></span> <span id="7-formula"></span></p><p class="ans-text"> <span id="17-text"></span> <span class="ans-text-NUM"></span> <span id="8-formula"></span></p><p class="ans-text"> <span id="18-text"></span> <span class="ans-text-NUM"></span> <span id="9-formula"></span></p>';
        } if (type === 'TEMP') {
            document.getElementById("unit").innerHTML = '<select aria-label="unit selector" name="UNIT" id="UNIT"><option value="K">Kelvin</option><option value="C">Celsius</option><option value="F">Fahrenheit</option></select>';
            document.getElementById("legend").innerHTML = '<p class="Legend-text"> k = Kelvin </p><p class="Legend-text"> C = Celcius </p><p class="Legend-text"> F = Fahrenhiet/Farenhiet </p>';
            document.getElementById("1").innerHTML = '<p class="ans-text" > <span id="1-text"></span> <span id="01"></span></p><p class="ans-text" > <span id="2-text"></span> <span id="02"></span></p>';
            document.getElementById("2").innerHTML = '<p class="ans-text"> <span id="3-text"></span> <span class="ans-text-NUM"></span> <span id="1-formula"></span></p><p class="ans-text"> <span id="4-text"></span> <span class="ans-text-NUM"></span> <span id="2-formula"></span></p>';
        } if (type === 'LIQ') {
            document.getElementById("unit").innerHTML = '<select aria-label="unit selector" name="UNIT" id="UNIT"><option value="L">Liters</option><option value="CL">Centiliters</option><option value="ML">Milliliters</option><option value="OZ">Ounce</option></select>';
            document.getElementById("legend").innerHTML = '<p class="Legend-text"> L = Liter/litro </p><p class="Legend-text"> CL = Centiliter/Centilitro </p><p class="Legend-text"> ML = Mililitre/Mililitro </p><p class="Legend-text"> OZ = Ounce/Onza </p>';
            document.getElementById("1").innerHTML = '<p class="ans-text" > <span id="1-text"></span> <span id="01"></span></p><p class="ans-text" > <span id="2-text"></span> <span id="02"></span></p><p class="ans-text" > <span id="3-text"></span> <span id="03"></span></p>';
            document.getElementById("2").innerHTML = '<p class="ans-text"> <span id="4-text"></span> <span class="ans-text-NUM"></span> <span id="1-formula"></span></p><p class="ans-text"> <span id="5-text"></span> <span class="ans-text-NUM"></span> <span id="2-formula"></span></p><p class="ans-text"> <span id="6-text"></span> <span class="ans-text-NUM"></span> <span id="3-formula"></span></p>';
        };
    };

    function Do() {
        let type = document.getElementById("TYPE"). value || 'null';
        if (type === 'null') {
            alert("Please select a type of measurement.")
        } if (type === 'LEN') {
            Len()
        } if (type === 'TIME') {
            Time()
            document.getElementsByClassName("delete-1").visibility = 'hidden';
        } if (type === 'MASS') {
            Mass()
        } if (type === 'TEMP') {
            Temp()
        } if (type === 'LIQ') {
            Liquids()
        };
    };

};

// !PAGE CODE

if (document.URL.includes("pa.html")) {
    
    console.log("you are in the PA page.");

    let f1 = document.getElementById("PA-F1").value || 0;
    let f2 = document.getElementById("PA-F2").value || 0;
    let a1 = document.getElementById("PA-A1").value || 0;
    let a2 = document.getElementById("PA-A2").value || 0;

    function Hide_pa(f1, f2, a1, a2) {
        if (f1 === 0 && f2 === 0 && a1 === 0 && a2 === 0) {
            document.getElementById("ans-footer").style.visibility = "visible";
            document.getElementById("ans").style.visibility = "hidden";
        } else {
            document.getElementById("ans-footer").style.visibility = "hidden";
            document.getElementById("ans").style.visibility = "visible";
        };
    };

    Hide_pa(f1, f2, a1, a2);

    function PA() {
        console.log("btn 'BTN-1-PA' pressed.");

        document.getElementById("pa-f1").innerHTML = "";
        document.getElementById("pa-f2").innerHTML = "";
        document.getElementById("pa-a1").innerHTML = "";
        document.getElementById("pa-a2").innerHTML = "";

        let f1 = document.getElementById("PA-F1").value || 0;
        let f2 = document.getElementById("PA-F2").value || 0;
        let a1 = document.getElementById("PA-A1").value || 0;
        let a2 = document.getElementById("PA-A2").value || 0;

        console.log("f1 "+ f1);
        console.log("f2 "+ f2);
        console.log("a1 "+ a1);
        console.log("a2 "+ a2);

        Hide_pa(f1, f2, a1, a2);

        if (f1 === 0) {
            let st1 = a1 * f2;
            document.getElementById("pa-f1").innerHTML = (st1 / a2);
            // st1 == step 1
        } if (f2 === 0) {
            let st1 = f1 * a2;
            document.getElementById("pa-f2").innerHTML = (st1 / a1);
            // st1 == step 1
        } if (a1 === 0) {
            let st1 = f1 * a2;
            document.getElementById("pa-a1").innerHTML = (st1 / f2);
            // st1 == step 1
        } if (a2 === 0) {
            let st1 = f2 * a1;
            document.getElementById("pa-a2").innerHTML = (st1 / f1);
            // st1 == step 1
        };
    };
};

if (document.URL.includes("qf.html")) {

    console.log("you are in the quadratic functions page. ");


    function Hide_qf(a,b,c) {
        if (a === 0 && b === 0 && c === 0) {
            document.getElementById("ans-footer").style.visibility = "visible";
            document.getElementById("ans").style.visibility = "hidden";
        } else {
            document.getElementById("ans-footer").style.visibility = "hidden";
            document.getElementById("ans").style.visibility = "visible";
        }; 
    };

    let a = document.getElementById("QF-A").value || 0;
    let b = document.getElementById("QF-B").value || 0;
    let c = document.getElementById("QF-C").value || 0;
    Hide_qf(a,b,c);

    function Qf() {
        let a = document.getElementById("QF-A").value || 0;
        let b = document.getElementById("QF-B").value || 0;
        let c = document.getElementById("QF-C").value || 0;

        Hide_qf(a,b,c);

        console.log("A " + a);
        console.log("B " + b);
        console.log("C " + c);

        let COOKIES = (-1* b)/(2*a);
        document.getElementById("qf-1").innerHTML = COOKIES;
        let x2 = COOKIES**2;
        console.log("x2 "+ x2);
        let C = (c * -1) * -1;
        console.log("c "+C);
        let A = a * x2;
        console.log("a "+A);
        let B = b * COOKIES;
        console.log("b "+B);
        document.getElementById("qf-2").innerHTML = (A+B+C);

    };
};

if (document.URL.includes("qf2.html")) {

    console.log("You are in the qf2 page.")

    function Hide_qf2(a,b,c,x1,x2,x3) {
        if (a === null && b === null && c === null && x1 === null && x2 === null && x3 === null) {
            document.getElementById("ans-footer").style.visibility = "visible";
            document.getElementById("ans").style.visibility = "hidden";
            document.getElementById("ans-2").style.visibility = "hidden";
        } else if (x1 != null && x2 != null && x3 != null && a != null && b != null && c != null) {
            document.getElementById("ans-footer").style.visibility = "hidden";
            document.getElementById("ans").style.visibility = "visible";
            document.getElementById("ans-2").style.visibility = "visible";
        } else if (a != null && b != null && c != null && x1 === null && x2 === null && x3 === null) {
            document.getElementById("ans-footer").style.visibility = "hidden";
            document.getElementById("ans").style.visibility = "visible";
            document.getElementById("ans-2").style.visibility = "hidden";
        };
    };

    let a = document.getElementById("QF-A").value || null;
    let b = document.getElementById("QF-B").value || null;
    let c = document.getElementById("QF-C").value || null;
    let x1 = document.getElementById("QF2-x1").value || null;
    let x2 = document.getElementById("QF2-x2").value || null;
    let x3 = document.getElementById("QF2-x3").value || null; 

    Hide_qf2(a,b,c,x1,x2,x3)

    function Qf() {
        let a = document.getElementById("QF-A").value || null;
        let b = document.getElementById("QF-B").value || null;
        let c = document.getElementById("QF-C").value || null;
        let x1 = document.getElementById("QF2-x1").value || null;
        let x2 = document.getElementById("QF2-x2").value || null;
        let x3 = document.getElementById("QF2-x3").value || null; 

        Hide_qf2(a,b,c,x1,x2,x3);

        console.log("A " + a);        
        let COOKIES = (-1* b)/(2*a);
        document.getElementById("qf-1").innerHTML = COOKIES;
        let x2_ = COOKIES**2;
        console.log("x2 "+ x2_);
        let C = (c * -1) * -1;
        console.log("c "+C);
        let A = a * x2;;
        console.log("a "+A);
        let B = b * COOKIES;
        console.log("b "+B);
        document.getElementById("qf-2").innerHTML = (A+B+C);
    };

    function solve_y(a,b,c,COOKIES) {
        let x2_ = COOKIES**2;
        let C = (c * -1) * -1;
        let A = a * x2_;
        let B = b * COOKIES;
        let ans = (A+B+C)
        return ans
    };

    function Qfx() {
        let a = document.getElementById("QF-A").value || null;
        let b = document.getElementById("QF-B").value || null;
        let c = document.getElementById("QF-C").value || null;
        let x1 = document.getElementById("QF2-x1").value || null;
        let x2 = document.getElementById("QF2-x2").value || null;
        let x3 = document.getElementById("QF2-x3").value || null;     

        Hide_qf2(a,b,c,x1,x2,x3)

        console.log("Qfx function")
        console.log("a ",a)
        console.log("b ",b)
        console.log("c ",c)
        console.log("x1 ",x1)
        console.log("x2 ",x2)
        console.log("x3 ",x3)

        document.getElementById("qf2-1").innerHTML = x1;
        document.getElementById("qf2-1-2").innerHTML = solve_y(a,b,c,x1);
        console.log("x1")
        console.log(x1);
        console.log(solve_y(a,b,c,x1));

        document.getElementById("qf2-2").innerHTML = x2;
        document.getElementById("qf2-2-2").innerHTML = solve_y(a,b,c,x2);
        console.log("x2")
        console.log(x2);
        console.log(solve_y(a,b,c,x2));

        document.getElementById("qf2-3").innerHTML = x3;
        document.getElementById("qf2-3-2").innerHTML = solve_y(a,b,c,x3);
        console.log("x3")
        console.log(x3);
        console.log(solve_y(a,b,c,x3));
    };
};

if (document.URL.includes("re.html")) {
    console.log("you are in the re page")

    function Hide_RE(num_res,r1,r2,r3,r4,r5) {
        if (num_res === "null") {
            document.getElementById('RE-R1').style.visibility = 'hidden';
            document.getElementById('RE-R2').style.visibility = 'hidden';
            document.getElementById('RE-R3').style.visibility = 'hidden';
            document.getElementById('RE-R4').style.visibility = 'hidden';
            document.getElementById('RE-R5').style.visibility = 'hidden';

            if (r1 === 0 && r2 === 0 && r3 === 0 && r4 === 0 && r5 === 0) {
                document.getElementById('re-1').style.visibility = 'hidden';
 
            }; 

            console.log("num_res = null")
        };
        if (num_res === '1') {
            document.getElementById('RE-R1').style.visibility = 'visible';
            document.getElementById('RE-R2').style.visibility = 'hidden';
            document.getElementById('RE-R3').style.visibility = 'hidden';
            document.getElementById('RE-R4').style.visibility = 'hidden';
            document.getElementById('RE-R5').style.visibility = 'hidden'; 
            
        if (r1 === 0 && r2 === 0 && r3 === 0 && r4 === 0 && r5 === 0) {
            document.getElementById('re-1').style.visibility = 'hidden';

        } else {
            document.getElementById('re-1').style.visibility = "visible";
            document.getElementById('ans-footer').style.visibility = "hidden";
        };

        console.log("num_res = 1")
        };
        if (num_res === '2') {
            document.getElementById('RE-R1').style.visibility = 'visible';
            document.getElementById('RE-R2').style.visibility = 'visible';
            document.getElementById('RE-R3').style.visibility = 'hidden';
            document.getElementById('RE-R4').style.visibility = 'hidden';
            document.getElementById('RE-R5').style.visibility = 'hidden'; 

            if (r1 === 0 && r2 === 0 && r3 === 0 && r4 === 0 && r5 === 0) {
                document.getElementById('re-1').style.visibility = 'hidden';

            } else {
                document.getElementById('re-1').style.visibility = 'visible';
                document.getElementById('ans-footer').style.visibility = "hidden";
            };
            
        console.log("num_res = 2")

        };
        if (num_res === '3') {
            document.getElementById('RE-R1').style.visibility = 'visible';
            document.getElementById('RE-R2').style.visibility = 'visible';
            document.getElementById('RE-R3').style.visibility = 'visible';
            document.getElementById('RE-R4').style.visibility = 'hidden';
            document.getElementById('RE-R5').style.visibility = 'hidden'; 

            if (r1 === 0 && r2 === 0 && r3 === 0 && r4 === 0 && r5 === 0) {
                document.getElementById('re-1').style.visibility = 'hidden';
            } else {
                document.getElementById('re-1').style.visibility = 'visible';
                document.getElementById('ans-footer').style.visibility = "hidden";
            };

        console.log("num_res = 3")

        };
        if (num_res === '4') {
            document.getElementById('RE-R1').style.visibility = 'visible';
            document.getElementById('RE-R2').style.visibility = 'visible';
            document.getElementById('RE-R3').style.visibility = 'visible';
            document.getElementById('RE-R4').style.visibility = 'visible';
            document.getElementById('RE-R5').style.visibility = 'hidden';
            
            if (r1 === 0 && r2 === 0 && r3 === 0 && r4 === 0 && r5 === 0) {
                document.getElementById('re-1').style.visibility = 'hidden';
            } else {
                document.getElementById('re-1').style.visibility = 'visible';
                document.getElementById('ans-footer').style.visibility = "hidden";
            };

            console.log("num_res = 4")
             
        };
        if (num_res === '5') {
            document.getElementById('RE-R1').style.visibility = 'visible';
            document.getElementById('RE-R2').style.visibility = 'visible';
            document.getElementById('RE-R3').style.visibility = 'visible';
            document.getElementById('RE-R4').style.visibility = 'visible';
            document.getElementById('RE-R5').style.visibility = 'visible'; 
        
            if (r1 === 0 && r2 === 0 && r3 === 0 && r4 === 0 && r5 === 0) {
                document.getElementById('re-1').style.visibility = 'hidden';
            } else {
                document.getElementById('re-1').style.visibility = 'visible';
                document.getElementById('ans-footer').style.visibility = "hidden";
            };

            console.log("num_res = 5")

        };
    };

    let r1 = document.getElementById("RE-R1").value || 0;
    let r2 = document.getElementById("RE-R2").value || 0;
    let r3 = document.getElementById("RE-R3").value || 0;
    let r4 = document.getElementById("RE-R4").value || 0;
    let r5 = document.getElementById("RE-R5").value || 0;

    let num_res = document.getElementById('RE-#RECIS').value || null;

    console.log("r1", r1)
    console.log("r2", r2)
    console.log("r3", r3)
    console.log("r4", r4)
    console.log("r5", r5)
    console.log("num_res", num_res)

    Hide_RE(num_res,r1,r2,r3,r4,r5)

    function RE() {
        

        let r1_ = document.getElementById("RE-R1").value || 0;
        let r2_ = document.getElementById("RE-R2").value || 0;
        let r3_ = document.getElementById("RE-R3").value || 0;
        let r4_ = document.getElementById("RE-R4").value || 0;
        let r5_ = document.getElementById("RE-R5").value || 0;
        
        let r1 = (r1_ * -1) *-1
        let r2 = (r2_ * -1) *-1
        let r3 = (r3_ * -1) *-1
        let r4 = (r4_ * -1) *-1
        let r5 = (r5_ * -1) *-1

        let srpl = document.getElementById("RE-SRPL").value || null;

        let num_res = document.getElementById('RE-#RECIS').value || null;
        
        Hide_RE(num_res,r1,r2,r3,r4,r5)
        
        console.log("r1", r1)
        console.log("r2", r2)
        console.log("r3", r3)
        console.log("r4", r4)
        console.log("r5", r5)
        console.log("num_res", num_res)
    
        if (num_res === "1") {
            document.getElementById("re-1-2").innerHTML = r1;
        } 
        
        //! SR Code
        if (srpl === "SR") {
	        if (num_res === "2") {
	            document.getElementById("re-1-2").innerHTML = (r1+r2);
	        } if (num_res === "3") {
	            document.getElementById("re-1-2").innerHTML = (r1+r2+r3);
	        } if (num_res === "4") {
	            document.getElementById("re-1-2").innerHTML = (r1+r2+r3+r4);
	        } if (num_res === "5") {
	            document.getElementById("re-1-2").innerHTML = (r1+r2+r3+r4+r5);
	        };
        } 
        // ! PL Code
        if (srpl === "PL") {
            if (num_res === "2") {
                document.getElementById("re-1-2").innerHTML = (1/r1+1/r2)** -1;
            } if (num_res === "3") {
                document.getElementById("re-1-2").innerHTML = (1/r1+1/r2+1/r3)** -1;
            } if (num_res === "4") {
                document.getElementById("re-1-2").innerHTML = (1/r1+1/r2+1/r3+1/r4) ** -1;
            } if (num_res === "5") {
                document.getElementById("re-1-2").innerHTML = (1/r1+1/r2+1/r3+1/r4+1/r5) ** -1;
            };
        };
    };

};

if (document.URL.includes("trithingys.html")) {
    
    console.log("You are in the triangle formulas page.")


    function TRYTHINGYS() {
        let top_ = document.getElementById('TRY-1-NEEDS_MARGIN').value || 1;
        let left_ = document.getElementById('TRY-2').value || 1;
        let right_ = document.getElementById('TRY-3').value || 1;

        let top = (top_ * -1) * -1;
        let left = (left_ * -1) * -1;
        let right = (right_ * -1) * -1;

        let tot = document.getElementById('try-tot').value || null;

        console.log("top ",top)
        console.log("left ",left)
        console.log("right ",right)

        document.getElementById('try-1').innerHTML = (left * right);
        document.getElementById('try-2').innerHTML = (top / right);
        document.getElementById('try-3').innerHTML = (top / left);

        if (tot === 'null') {
            document.getElementById('try-1-1').innerHTML = "Top Number:";
            document.getElementById('try-2-1').innerHTML = "Left Number:";
            document.getElementById('try-3-1').innerHTML = "Right Number:";
        }
        if (tot === 'RHO') {
            document.getElementById('try-1-1').innerHTML = "Mass:";
            document.getElementById('try-2-1').innerHTML = "Density:";
            document.getElementById('try-3-1').innerHTML = "Volume:";
        } if (tot === 'Q') {
            document.getElementById('try-1-1').innerHTML = "Charge:";
            document.getElementById('try-2-1').innerHTML = "Electric current:";
            document.getElementById('try-3-1').innerHTML = "Time:";
        } if (tot === 'EC') {
            document.getElementById('try-1-1').innerHTML = "Force";
            document.getElementById('try-2-1').innerHTML = "Electric field:";
            document.getElementById('try-3-1').innerHTML = "Charge:";
        } if (tot === 'ACC') {
            document.getElementById('try-1-1').innerHTML = "Force";
            document.getElementById('try-2-1').innerHTML = "Mass:";
            document.getElementById('try-3-1').innerHTML = "Acceleration:";  
        } if (tot === 'V') {
            document.getElementById('try-1-1').innerHTML = "Voltage:";
            document.getElementById('try-2-1').innerHTML = "Resistance:";
            document.getElementById('try-3-1').innerHTML = "Electric current:";
        } if (tot === 'V2') {
            document.getElementById('try-1-1').innerHTML = "Voltage^2:";
            document.getElementById('try-2-1').innerHTML = "Watts:";
            document.getElementById('try-3-1').innerHTML = "Resistance:";

            document.getElementById('try-1').innerHTML = (Math.sqrt(left * right));
            document.getElementById('try-2').innerHTML = ((top**2) / right);
            document.getElementById('try-3').innerHTML = ((top**2) / left);
        } if (tot === 'F') {
            document.getElementById('try-1-1').innerHTML = "Work:";
            document.getElementById('try-2-1').innerHTML = "Force:";
            document.getElementById('try-3-1').innerHTML = "Distance:";
        } if (tot === 'LAMBDA') {
            document.getElementById('try-1-1').innerHTML = "Voltage:";
            document.getElementById('try-2-1').innerHTML = "Lambda(λ):";
            document.getElementById('try-3-1').innerHTML = "Watts:";
        };
    };

};