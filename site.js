console.log("hi, welcome to WEB-1. I see you're looking at the code. I wouldn't really trust it since it is my first website but you can get some inspiration from it.");
console.log(window.innerWidth)



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
    if (window.innerWidth > 836) {
        document.getElementById("nav").innerHTML = '<div class="dropdown"><button class="center , dropbtn" type="button">General Math</button><div class="dropdown-content"><a class="Program-link" href="./fractions.html">Fractions</a></div></div><div class="dropdown"><button class="center , dropbtn" type="button">General Formulas</button><div class="dropdown-content"><a class="Program-link" href="/re.html">RE </a><a class="Program-link" id="link-14" href="./pytheorem.html">Pythagorean Theorem</a><a class="Program-link" href="./Linear.html">Linear functions</a><a class="Program-link" href="/qf.html">Quadratic Functions </a><a class="Program-link" href="/qf2.html">Quadratic Functions | Graphing </a><a class="Program-link" href="/fq.html">Factoring Quadratics </a><a class="Program-link" href="/pa.html">Pressure Program </a></div></div><div class="dropdown"><button class="center , dropbtn" type="button">Triangle Formulas</button><div class="dropdown-content"><a class="Program-link" href="./trithingys.html">Triangle formulas</a></div></div>'
        document.getElementById("nav-text").style.fontSize = "1.2em"
    }
    else if (window.innerWidth <= 836) {
        console.log("screen is small than 767px")

        let element = document.getElementById("lightDarkSelector").value;
        let img = "white-hamburger-menu-icon-24.jpg"

        if (element === '1') {
            img = 'menu_FILL0_wght500_GRAD0_opsz40.svg'
        } else {
            img = 'white-hamburger-menu-icon-24.jpg'
        }

        document.getElementById("nav").innerHTML = '<div class="dropdown"><button class="dropbtn" type="button"><img class="center" src="./img/'+img+'" alt="Menu Button"></button><div class="dropdown-content"><h1 class="balck">General Math</h1><a class="Program-link" href="/fractions.html">Fractions</a><h1 class="balck">General Formulas</h1><a class="Program-link" href="/re.html">RE </a><a class="Program-link" id="link-14" href="./pytheorem.html">Pythagorean Theorem</a><a class="Program-link" href="./Linear.html">Linear functions</a><a class="Program-link" href="/qf.html">Quadratic Functions </a><a class="Program-link" href="/qf2.html">Quadratic Functions | Graphing </a><a class="Program-link" href="/fq.html">Factoring Quadratics</a><a class="Program-link" href="/pa.html">Pressure Program </a><h1 class="balck">Triangle formulas</h1><a class="Program-link" href="./trithingys.html">Triangle formulas</a></div></div>'
        document.getElementById("nav-text").style.fontSize = "2em"
        document.getElementById('lightdark-floatRight').style.marginTop = '5.5mm';
    }
};

function phoneMode(p) {
        if (p === 'h') {
            if (window.innerWidth <= 1107) {
                document.getElementById("nav-text").style.fontSize = "2em"
                document.getElementById("Tittle-Div").style.backgroundImage = "none";
                document.getElementById("Tittle").style.fontSize = "800%";
                document.getElementById('lightdark-floatRight-h').style.marginTop = '3.3mm';
            }
            else {
                document.getElementById("Tittle-Div").style.backgroundImage = "/img/WEB-1NewNewTittleImage.png";
            };
            if (window.innerWidth <= 870) {
                console.log('Phone screen');
                elementWidth(1, 3, 99)
                elementWidth(14, 15, 99)
                element(2).style.marginBottom = "2mm";
                document.getElementById("Tittle").style.fontSize = "800%";


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
                elementWidth(18, 19, 99)
                document.getElementById("qf-img-1").style.height = '100px';

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
                elementWidth(18, 19, 99)
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
                elementWidth(16, 17, 99)
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
        } else if (p === 'f') {
            nav()
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(20, 21, 99)
            }
            else {
                element(20).style.width = "60%"
                element(20).style.minHeight = "600px"
                element(21).style.width = "35%"
            }
        } else if (p === 'l') {
            nav()
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(22, 23, 99)
            }
            else {
                element(22).style.width = "60%"
                element(22).style.minHeight = "600px"
                element(23).style.width = "35%"
            }
        } else if (p === 'fq') {
            nav()
            if (window.innerWidth <= 910) {
                console.log(window.innerWidth)
                console.log("Phone Screen")
                elementWidth(24, 25, 99)
            }
            else {
                element(24).style.width = "60%"
                element(24).style.minHeight = "600px"
                element(25).style.width = "35%"
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
    let elementValue = document.getElementById("lightDarkSelector").value || 1;
    console.log(elementValue)
    let ansBlock = document.querySelector(".Ans-block");
    let legendBlock = document.querySelector(".Legend-block");

    if (elementValue === "1") { // light mode

        if (document.URL.includes("ome") || document.URL === 'https://science-calc.com/') {
            elementProgramLink(1, 14, "#000000");
            console.log("light mode selected");
            document.getElementById("_0").style.backgroundColor = "#FFFFFF";
            document.getElementById("_0").style.color = "#000000";
            ansBlock.style.backgroundColor = "#fff000";
            legendBlock.style.backgroundColor = "#fff000";
            document.querySelector("#react-1.main-div-nav").style.backgroundColor = "#fff000";
            document.querySelector("#react-2.main-div-nav").style.backgroundColor = "#fff000";
            document.querySelector("#react-3.main-div-nav").style.backgroundColor = "#fff000";
            document.querySelector(".navbar").style.backgroundColor = '#FFFFFF';
            document.querySelector(".navbar-brand").style.color = '#000000';
            document.getElementById("lightDarkSelector").style.backgroundColor = "#fff000";
            document.getElementById("lightDarkSelector-text").innerHTML = 'Light Mode.';
            document.getElementById("lightDarkSelector-text").style.color = '#000000';
            document.cookie = 'mode=light';

            if (window.innerWidth > 790) {
                document.getElementById("Tittle-Div").style.backgroundImage = 'url(./img/WEB-1NewNewTittleImage.png)';
            }

        } else {
            document.getElementById("lightDarkSelector").style.backgroundColor = "#fff000";
            document.querySelector(".navbar").style.backgroundColor = '#FFFFFF';
            document.querySelector(".navbar").style.color = '#000000';
            console.log("not home page");
            console.log("light mode selected");
            document.getElementById("_0").style.backgroundColor = "#FFFFFF";
            document.getElementById("_0").style.color = "#000000";
            ansBlock.style.backgroundColor = "#fff000";
            legendBlock.style.backgroundColor = "#fff000";
            document.getElementById("lightDarkSelector-text").innerHTML = 'Light Mode.';
            document.getElementById("lightDarkSelector-text").style.color = '#000000';
            document.cookie = 'mode=light';
            elementProgramLink(6, 8, "#000000");


            if (document.URL.includes('pytheorem')){

            }else if (document.URL.includes("re")) {
                document.getElementById('re-img-1').innerHTML = '<img src="./img/Science Calc Info (1).png" alt="a parallel circuit" class="re-imgSmall">';
                document.getElementById('re-img-2').innerHTML = '<img src="./img/Science Calc Info (4).png" alt="Formula for parallel" class="re-imgSmall-2">';
                document.getElementById('re-img-3').innerHTML = '<img src="./img/seriesWhite.png" alt="a series circuit" class="re-imgSmall">';
                document.getElementById('re-img-4').innerHTML = '<img src="./img/re1 (2).png" alt="series formula" class="re-imgSmall-2">';
            } else if (document.URL.includes("qf")) {
                document.getElementById('qf-img-1').innerHTML = '<img src="./img/graph-1.png" alt="graph" class="qf-imgSmall">';
                document.getElementById('qf-img-2').innerHTML = '<img src="./img/qf-function (2).png" alt="quadratic functions equation" class="qf-imgSmaller">';
                document.getElementById('qf-img-3').innerHTML = '<img src="./img/xFormula (1).png" alt="formula to find x" class="qf-imgSmaller">';
            } else if (document.URL.includes("pa")) {
                document.getElementById('pa-img-1').innerHTML = '<img src="./img/paEzample (2).png" alt="example of pa formula" id="pa-imgSmall">'
            } else if (document.URL.includes('fractions')) {
                document.getElementById('link-1-F').style.color = '#000000';
            } else if (document.URL.includes('linear') || document.URL.includes('Linear')) {
                document.getElementById('L-Type').style.backgroundColor = '#FFF000';
            } else if (document.URL.includes('fq')) {
                console.log('awd')
                document.getElementById('FQ-imgSwap').innerHTML = '<img src="./img/fq (1).png" alt="simple q formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-2').innerHTML = '<img src="./img/FQ-2 (1).png" alt="simple q formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-3').innerHTML = '<img src="./img/FQ-3 (2).png" alt="simple q formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-4').innerHTML = '<img src="./img/FQ-4 (2).png" alt="simple q  formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-5').innerHTML = '<img src="./img/FQ-5 (2).png" alt="simple q formula" class="FQ-img-tini">';
            }

        }

    } else if (elementValue === "2") {
        console.log("dark mode")
        document.getElementById("lightDarkSelector-text").innerHTML = 'Dark Mode.'
        document.getElementById("lightDarkSelector-text").style.color = '#cacaca'

        if (document.URL.includes("ome")|| document.URL === 'https://science-calc.com/') {
            elementProgramLink(1, 14, "#cacaca");
            document.getElementById("_0").style.backgroundColor = "#020206";
            document.getElementById("_0").style.color = "#cacaca";
            ansBlock.style.backgroundColor = "#e63743";
            legendBlock.style.backgroundColor = "#e63743";
            document.querySelector("#react-1.main-div-nav").style.backgroundColor = "#e63743";
            document.querySelector("#react-2.main-div-nav").style.backgroundColor = "#e63743";
            document.querySelector("#react-3.main-div-nav").style.backgroundColor = "#e63743";
            document.querySelector(".navbar").style.backgroundColor = '#020206';
            document.querySelector(".navbar-brand").style.color = '#cacaca';
            document.getElementById("lightDarkSelector").style.backgroundColor = "#e63743";
            document.cookie = 'mode=dark';

            if (window.innerWidth > 790) {
                document.getElementById("Tittle-Div").style.backgroundImage = 'url(./img/WEB-1.png)';
            }

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
            document.getElementById("lightDarkSelector-text").innerHTML = 'Dark Mode.';
            document.getElementById("lightDarkSelector-text").style.color = '#cacaca';
            document.cookie = 'mode=dark';
            elementProgramLink(6, 8, "#cacaca");

            if (document.URL.includes("re")) {
                document.getElementById('re-img-1').innerHTML = '<img src="./img/Science Calc Info (2).png" alt="a parallel circuit" class="re-imgSmall">';
                document.getElementById('re-img-2').innerHTML = '<img src="./img/Science Calc Info (3).png" alt="Formula for parallel" class="re-imgSmall-2">';
                document.getElementById('re-img-3').innerHTML = '<img src="./img/seriesBlack.png" alt="a series circuit" class="re-imgSmall">';
                document.getElementById('re-img-4').innerHTML = '<img src="./img/re1 (1).png" alt="series formula" class="re-imgSmall-2">';
            } else if (document.URL.includes("qf")) {
                document.getElementById('qf-img-1').innerHTML = '<img src="./img/graph-2.png" alt="graph" class="qf-imgSmall">';
                document.getElementById('qf-img-2').innerHTML = '<img src="./img/qf-function (1).png" alt="quadratic functions equation" class="qf-imgSmaller">';
                document.getElementById('qf-img-3').innerHTML = '<img src="./img/xFormula (2).png" alt="formula to find x" class="qf-imgSmaller">';
            } else if (document.URL.includes("pa")) {
                document.getElementById('pa-img-1').innerHTML = '<img src="./img/paEzample (1).png" alt="example of pa formula" id="pa-imgSmall">'
            } else if (document.URL.includes('fractions')) {
                document.getElementById('link-1-F').style.color = '#cacaca';
            }  else if (document.URL.includes('linear') || document.URL.includes('Linear')) {
                document.getElementById('L-Type').style.backgroundColor = '#e63743';
            } else if (document.URL.includes('fq')) {
                console.log('awdwd')
                document.getElementById('FQ-imgSwap').innerHTML = '<img src="./img/fq (2).png" alt="simple q formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-2').innerHTML = '<img src="./img/FQ-2 (2).png" alt="simple q formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-3').innerHTML = '<img src="./img/FQ-3 (1).png" alt="simple q formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-4').innerHTML = '<img src="./img/FQ-4 (1).png" alt="simple q  formula" class="FQ-img-tini">';
                document.getElementById('FQ-imgSwap-5').innerHTML = '<img src="./img/FQ-5 (1).png" alt="simple q formula" class="FQ-img-tini">';
            }
        }
    }
}

function lightDarkCookie() {

    let ansBlock = document.querySelector(".Ans-block");
    let legendBlock = document.querySelector(".Legend-block");

    if (document.cookie.includes('mode=dark')) {
        document.cookie = 'mode=dark';
        document.getElementById("lightDarkSelector").value = '2'
        console.log("dark mode")
        document.getElementById("lightDarkSelector-text").innerHTML = 'Dark Mode.'
        document.getElementById("lightDarkSelector-text").style.color = '#cacaca'

        if (document.URL.includes("ome")|| document.URL === 'https://science-calc.com/') {
            elementProgramLink(1, 14, "#cacaca");
            document.getElementById("_0").style.backgroundColor = "#020206";
            document.getElementById("_0").style.color = "#cacaca";
            ansBlock.style.backgroundColor = "#e63743";
            legendBlock.style.backgroundColor = "#e63743";
            document.querySelector("#react-1.main-div-nav").style.backgroundColor = "#e63743";
            document.querySelector("#react-2.main-div-nav").style.backgroundColor = "#e63743";
            document.querySelector("#react-3.main-div-nav").style.backgroundColor = "#e63743";
            document.querySelector(".navbar").style.backgroundColor = '#020206';
            document.querySelector(".navbar-brand").style.color = '#cacaca';
            document.getElementById("lightDarkSelector").style.backgroundColor = "#e63743";

            if (window.innerWidth > 790) {
                document.getElementById("Tittle-Div").style.backgroundImage = 'url(./img/WEB-1.png)';
            }

            phoneMode('h');

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
            document.getElementById("lightDarkSelector-text").innerHTML = 'Dark Mode.';
            document.getElementById("lightDarkSelector-text").style.color = '#cacaca';
        }

        if (document.URL.includes("re")) {
            document.getElementById('re-img-1').innerHTML = '<img src="./img/Science Calc Info (2).png" alt="a parallel circuit" class="re-imgSmall">';
            document.getElementById('re-img-2').innerHTML = '<img src="./img/Science Calc Info (3).png" alt="Formula for parallel" class="re-imgSmall-2">';
            document.getElementById('re-img-3').innerHTML = '<img src="./img/seriesBlack.png" alt="a series circuit" class="re-imgSmall">';
            document.getElementById('re-img-4').innerHTML = '<img src="./img/re1 (1).png" alt="series formula" class="re-imgSmall-2">';
        } else if (document.URL.includes("qf")) {
            document.getElementById('qf-img-1').innerHTML = '<img src="./img/graph-2.png" alt="graph" class="qf-imgSmall">';
            document.getElementById('qf-img-2').innerHTML = '<img src="./img/qf-function (1).png" alt="quadratic functions equation" class="qf-imgSmaller">';
            document.getElementById('qf-img-3').innerHTML = '<img src="./img/xFormula (2).png" alt="formula to find x" class="qf-imgSmaller">';
        } else if (document.URL.includes("pa")) {
            document.getElementById('pa-img-1').innerHTML = '<img src="./img/paEzample (1).png" alt="example of pa formula" id="pa-imgSmall">'
        } else if (document.URL.includes('fractions')) {
            document.getElementById('link-1-F').style.color = '#cacaca';
        }  else if (document.URL.includes('linear')) {
            document.getElementById('L-Type').style.backgroundColor = '#e63743';
        } else if (document.URL.includes('fq')) {
            document.getElementById('FQ-imgSwap').innerHTML = '<img src="./img/fq (2).png" alt="simple q formula" class="FQ-img-tini">';
            document.getElementById('FQ-imgSwap-2').innerHTML = '<img src="./img/FQ-2 (2).png" alt="simple q formula" class="FQ-img-tini">';
            document.getElementById('FQ-imgSwap-3').innerHTML = '<img src="./img/FQ-3 (1).png" alt="simple q formula" class="FQ-img-tini">';
            document.getElementById('FQ-imgSwap-4').innerHTML = '<img src="./img/FQ-4 (1).png" alt="simple q  formula" class="FQ-img-tini">';
            document.getElementById('FQ-imgSwap-5').innerHTML = '<img src="./img/FQ-5 (1).png" alt="simple q formula" class="FQ-img-tini">';
        }
    }
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


        document.getElementById("01").innerHTML = (NUM / 3.281 );
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

if (document.URL.includes("ome") || document.URL.includes("ome") || document.URL === 'https://science-calc.com/') {
    lightDarkCookie();
    lightDarkMode();
    phoneMode('h');
    console.log("you are in the home page")

    function Type() {
        let type = document.getElementById("TYPE").value || 'null';
        if (type === 'LEN') {
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

    let type = document.getElementById("TYPE").value || 'null';
    document.getElementById("TYPE").addEventListener('change', Type, false);

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

if (document.URL.includes("pa")) {
    console.log("you are in the PA page.");
    lightDarkCookie()

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

if (document.URL.includes("qf")) {
    console.log("you are in the quadratic functions page. ");
    lightDarkCookie()

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

if (document.URL.includes("qf2")) {
    console.log("You are in the qf2 page.")
    lightDarkCookie()

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

if (document.URL.includes("re")) {

    function displayOutput() {
        let element = document.getElementById("re-range").value;
        document.getElementById("re-output").innerHTML = element;
    }

    function rInput() {
        let n = document.getElementById("re-range").value || 2;

        for (i=2; i <= 50; i++) {
            document.getElementById('re-inputs-'+i).innerHTML = "";
        };

        for (i=2; i <= n; i++) {
            document.getElementById('re-inputs-1').innerHTML = '<input type="number" placeholder="R1" name="R1" id="RE-R1"/>';
            let input = '<input type="number" placeholder="R'+i+'" name="R'+i+'" id="RE-R'+i+'" />';
            document.getElementById('re-inputs-'+i).innerHTML = input+'';
        };  
    };

    function rOutput() {
        let n = document.getElementById("re-range").value || 2;
        let type = document.getElementById("RE-SRPL").value || 'null';

        if (type === 'null') {
            alert("please select a type of circuit.")
        }

        if (type === 'SR') {

            let re = 0
                for (i=2; i <= n; i++) {
                    let r = document.getElementById("RE-R"+i).value *1;
                    re += r
                };
            
            console.log('OUTPUT:')
            console.log(re + document.getElementById('RE-R1').value*1)
            document.getElementById('re-1-2').innerHTML = re + document.getElementById('RE-R1').value*1;
            // document.getElementById('RE-R1').value*1 + r()

        } else if (type === 'PL') {

            let re = 0
            for (i=1; i <= n; i++) {
                let r = document.getElementById("RE-R"+i).value *1;
                console.log(r)
                re += 1/r
            };
            
        console.log('OUTPUT:')
        console.log((re)**-1)
        document.getElementById('re-1-2').innerHTML = (re)**-1;
        // document.getElementById('RE-R1').value*1 + r()

        }
    }
    
    console.log("you are in the re page")
    lightDarkCookie()
};

if (document.URL.includes("trithingys")) {
    console.log("You are in the triangle formulas page.")
    lightDarkCookie()

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

//! function for both fraction and linear programs.

function decimaltoFraction(n) {
    let num = n+"";
    if (num == '0') {
      ans = '0/0'
    }
    if (num.includes("0.")) {
      ans = (n * 10)+'/10';
    } else if (num.includes("0.0")) {
      ans = (n * 100)+'/100';
    } else if (num.includes("0.00")) {
      ans = (n * 1000)+'/1000';
    }
    return ans;
}


if (document.URL.includes("fractions")) {
    console.log("you are in the fractions page!");
    lightDarkCookie();

    function simplify(str) {
        var result = '', data = str.split('/'),
            numOne = Number(data[0]),
            numTwo = Number(data[1]);
        for (var i = Math.max(numOne, numTwo); i > 1; i--) {
        if ((numOne % i == 0) && (numTwo % i == 0)) {
            numOne /= i;
            numTwo /= i;
        }
        }
        if (numTwo === 1) {
        result = numOne.toString()
        } else {
        result = numOne.toString() + '/' + numTwo.toString()
        }
        return result
    }

    function Frac() {
        let oper = document.getElementById("F-Operaiton").value || null;
        let num1 = document.getElementById("numerator-1").value || 1;
        let num2 = document.getElementById("numerator-2").value || 1;
        let dem1 = document.getElementById("denominator-1").value || 1;
        let dem2 = document.getElementById("denominator-2").value || 1;
        console.log("num1 "+num1);
        console.log("num2 "+num2);
        console.log("dem1 "+dem1);
        console.log("dem2 "+dem2);

        if (oper === 'Tiem') {
            let n1 = (num1 *  num2);
            let n2 = (dem1 *  dem2);
            document.getElementById('F-Ans').innerHTML = ''+simplify(''+n1+'/'+n2);

            document.getElementById("F-decimal").innerHTML = (n1 / n2)

        } else if (oper === 'divide') {
            let num2_ = dem2;
            let dem2_ = num2;
            console.log("num2_ " + num2_)
            console.log("dem2_ " + dem2_)
            let n1 = (num1 *  num2_);
            let n2 = (dem1 *  dem2_);
            document.getElementById('F-Ans').innerHTML = ''+simplify(''+n1+'/'+n2);

            document.getElementById("F-decimal").innerHTML = (n1 / n2);
        } else if (oper == 'add') {

            let n1 = num1 / dem1;
            let n2 = num2 / dem2;

            let n = n1 + n2;
            document.getElementById("F-decimal").innerHTML = n;

            console.log("ans "+n);

            document.getElementById('F-Ans').innerHTML = ''+simplify(decimaltoFraction(n));

        } else if (oper == 'subs') {
            let n1 = num1 / dem1;
            let n2 = num2 / dem2;

            let n = n1 - n2;
            document.getElementById("F-decimal").innerHTML = n;

            console.log("ans "+n);

            document.getElementById('F-Ans').innerHTML = ''+simplify(decimaltoFraction(n));

        };
    };
};

if (document.URL.includes("linear")) {
    console.log("you are in the linear functions program.");
    lightDarkCookie();

    function inputType() {
        let type = document.getElementById('L-Type').value || 1;
        console.log("switch value: "+type);

        if (type === 1 || type === "1") {
            console.log("in input mode 1");
            document.getElementById('L-input').innerHTML = '<div class="normi-Vertical-align"><input type="number"placeholder="Y2"name="L-y2"id="L-y2"class="maketini-f"/><br/><input type="number"placeholder="X2"name="L-x2"id="L-x2"class="maketini-f"/></div><div class="normi-Vertical-align"><input type="number"placeholder="Y1"name="L-y1"id="L-y1"class="maketini-f"/><br/><input type="number"placeholder="X1"name="L-x1"id="L-x1"class="maketini-f"/> </div>';
            document.getElementById('L-rangeStatus').innerHTML = 'Click this to input only the slope.';
        } else if (type === 2 || type === "2") {
            console.log("in input mode 2");
            document.getElementById('L-input').innerHTML = '<input type="number"placeholder="Slope(M)"name="L-m"id="L-m"/><br/><p> please enter slope in decimals<p/>';
            document.getElementById('L-rangeStatus').innerHTML = 'Click this to input individual points on the graph.';
        }

    }
    
    function decimaltoFractionY(n) {
        let num = n+"";
        let y = 0
        if (num == '0') {
            y = 0 
        }
        if (num.includes("0.")) {
            y = n*10
        } else if (num.includes("0.0")) {
            y = n*100
        } else if (num.includes("0.00")) {
            y = n*1000
        }
        return y
      }
      
      function decimaltoFractionX(n) {
        let num = n+"";
        let y = 0
        if (num == '0') {
            y = 0 
        }
        if (num.includes("0.")) {
            y = 10
        } else if (num.includes("0.0")) {
            y = 100
        } else if (num.includes("0.00")) {
            y = 1000
        }
        return y
      }
      
      
      function simplify(str) {
        var result = '', data = str.split('/'),
            numOne = Number(data[0]),
            numTwo = Number(data[1]);
        for (var i = Math.max(numOne, numTwo); i > 1; i--) {
        if ((numOne % i == 0) && (numTwo % i == 0)) {
            numOne /= i;
            numTwo /= i;
        }
        }
        if (numTwo === 1) {
        result = numOne.toString()
        } else {
        result = numOne.toString() + '/' + numTwo.toString()
        }
        return result
      }
      
      
      function Linear() {
        let type = document.getElementById('L-Type').value || 1;
      
        if (type === '1') {
            let y1 = document.getElementById('L-y1').value || null;
            let y2 = document.getElementById('L-y2').value || null;
            let x1 = document.getElementById('L-x1').value || null;
            let x2 = document.getElementById('L-x2').value || null;
      
            let b = document.getElementById('L-b').value || null;
      
            let y = y2 - y1;
            console.log('y= '+y)
            let x = x2 - x1;
            console.log('x= '+x)
      
            let m = y/x;
            console.log('slope: '+m);
            decimaltoFraction(m);
      
            let p1Y = 0
      
            let p1X = (-(b))/m
            console.log('test: '+(-2*0.5))
            console.log('-b: '+(-(b)))
            console.log('X: '+p1X);
      
            let fracY_ = decimaltoFractionY(m);
            let fracX_ = decimaltoFractionX(m);
      
            simplify(decimaltoFraction(''+fracY_+'/'+fracX_))
            document.getElementById('F-Ans').innerHTML = ''+simplify(decimaltoFraction(''+fracY_+'/'+fracX_))
      
            let simpli = simplify(''+fracY_+'/'+fracX_);
      
            let fracY = 0;
            let fracX = 0; 
      
            if (simpli.substring(0 , 1) === '-') {
                fracY = simpli.substring(1, 2);
                fracX = simpli.substring(3 , 4)
            } else {
                fracY = simpli.substring(0, 1);
                fracX = simpli.substring(2 , 1)                
            }
      
            console.log('fracY: '+fracY);
            console.log('fracX: '+fracX);
      
            let p3Y = 0;
            let p3X = 0;             
      
      
            if (simpli.substring(0 , 1) === '-') {
                p2Y = p1Y + (fracY) * 1;
                p2X = p1X - (fracX) * 1;
                p3Y = p2Y + (fracY) * 1;
                p3X = p2X - (fracX) * 1;
            } else {
                p2Y = p1Y + (fracY) * 1;
                p2X = p1X + (fracX) * 1;
                p3Y = p2Y + (fracY) * 1;
                p3X = p2X + (fracX) * 1;                
            }
      
      
      
            document.getElementById('L-point1-X').innerHTML = p1X;
            document.getElementById('L-point1Y').innerHTML = p1Y;
            document.getElementById('L-point2-X').innerHTML = p2X;
            document.getElementById('L-point2Y').innerHTML = p2Y;
            document.getElementById('L-point3-X').innerHTML = p3X;
            document.getElementById('L-point3Y').innerHTML = p3Y;
      
        } else if (type === '2') {
            let b = document.getElementById('L-b').value || null;
      
            let m = document.getElementById('L-m').value || null;
            console.log('slope: '+m);
            decimaltoFraction(m);
      
            let p1Y = 0
      
            let p1X = (-(b))/m
            console.log('test: '+(-2*0.5))
            console.log('-b: '+(-(b)))
            console.log('X: '+p1X);
      
            let fracY_ = decimaltoFractionY(m);
            let fracX_ = decimaltoFractionX(m);

            simplify(decimaltoFraction(''+fracY_+'/'+fracX_))
            document.getElementById('F-Ans').innerHTML = ''+simplify(decimaltoFraction(''+fracY_+'/'+fracX_))

            let simpli = simplify(''+fracY_+'/'+fracX_);

            let fracY = 0;
            let fracX = 0;

            if (simpli.substring(0 , 1) === '-') {
                fracY = simpli.substring(1, 2);
                fracX = simpli.substring(3 , 4)
            } else {
                fracY = simpli.substring(0, 1);
                fracX = simpli.substring(2 , 1)
            }

            console.log('fracY: '+fracY);
            console.log('fracX: '+fracX);

            let p3Y = 0;
            let p3X = 0;

            if (simpli.substring(0 , 1) === '-') {
                p2Y = p1Y + (fracY) * 1;
                p2X = p1X - (fracX) * 1;
                p3Y = p2Y + (fracY) * 1;
                p3X = p2X - (fracX) * 1;
            } else {
                p2Y = p1Y + (fracY) * 1;
                p2X = p1X + (fracX) * 1;
                p3Y = p2Y + (fracY) * 1;
                p3X = p2X + (fracX) * 1;
            }

            document.getElementById('L-point1-X').innerHTML = p1X;
            document.getElementById('L-point1Y').innerHTML = p1Y;
            document.getElementById('L-point2-X').innerHTML = p2X;
            document.getElementById('L-point2Y').innerHTML = p2Y;
            document.getElementById('L-point3-X').innerHTML = p3X;
            document.getElementById('L-point3Y').innerHTML = p3Y;
        }

      }
}

if (document.URL.includes('fq')) {
    lightDarkCookie()
    function getfactors(A, B, C) {
        let quad = ''+A+'x^2+'+B+'x+'+C+'=0';
        console.log(quad)
        var myreg = /(.*?)x\^2/;
        var a = myreg.exec(quad);
        a = a[1];
        if (a==0) {
            alert('a may not be equal to zero.  Enter another function');
            return;
        }
        var myreg = /x\^2\+(.*?)x/;
        var b = myreg.exec(quad);
        b = b[1];
        var myreg = /x\+(.*?)=/;
        var c = myreg.exec(quad);
        c = c[1];
        var disc = (b*b-4*a*c);
        if (disc!=0) {
            disc = disc/Math.abs(disc);
        }
        switch (disc) {
            case -1:
                alert('The roots of this function are not real.  Please enter another function');
                return;
                break;
            case 1:
                if (Math.sqrt((b*b-4*a*c))==Math.round(Math.sqrt((b*b-4*a*c)))) {
                    if (-1*((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a)<0) {
                        var op1 = ' - '; 
                    } else { 
                        var op1 = ' + '; 
                    }
                    if (-1*((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a)<0) {
                        var op2 = ' - '; 
                    } else { 
                        var op2 = ' + '; 
                    }
                    if ((Math.abs(((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a))) < 1 && (Math.abs(((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a))) < 1) {
                        document.getElementById('FQ-ANS').innerHTML = ('('+A+'x' + op1 + A*(Math.abs(((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a))) + ' )('+A+'x' + op2 + A*(Math.abs(((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a))) + ' )'); 
                    } else if ((Math.abs(((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a))) < 1){
                        document.getElementById('FQ-ANS').innerHTML = ('( x' + op1 + (Math.abs(((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a))) + ' )('+A+ 'x' + op2 + A*(Math.abs(((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a))) + ' )'); 
                    }else if ((Math.abs(((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a))) < 1){
                        document.getElementById('FQ-ANS').innerHTML = ('('+A+'x' + op1 + A*(Math.abs(((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a))) + ' )('+ 'x' + op2 + (Math.abs(((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a))) + ' )'); 
                    } else {
                        document.getElementById('FQ-ANS').innerHTML = ('( x' + op1 + (Math.abs(((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a))) + ' )('+ 'x' + op2 + (Math.abs(((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a))) + ' )'); 

                    }
                } else {
                    alert ('The roots of this function are not rational, and therefore this function does not factor');
                }
                break;
            case 0:
                if ((b/a)<0) {
                    alert('( x' + ' + ' + (0-b/(2*a)) + ')( x' + ' + ' + (0-b/(2*a)) + ' )');
                } else {
                    alert('( x' + ' - ' + (b/(2*a)) + ')( x' + ' - ' + (b/(2*a)) + ' )');
                }
                break;
            default:
                alert('There is a problem with your syntax');
                return
        }
    }

    function findFactors(number) {
        const factorNumbers = [];
        for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
            factorNumbers.push(i);
            factorNumbers.push(number/i);
          }
        }
        return factorNumbers;
      }

    function fq() {
        let A = document.getElementById('QF-A').value;
        let B = document.getElementById('QF-B').value;
        let C = document.getElementById('QF-C').value;

        if (findFactors(A) == [1, A] && findFactors(C) == [1, C] || A == 1) {
            getfactors(A, B, C)
        } else {
            console.log(findFactors(Math.abs(A)));
            console.log(findFactors(Math.abs(C)));

            function combine() {
                for (let i = 1; i <= 20; i++){
                    // if (i == 1) {
                    //     console.log('0');
                    //     let facA = findFactors(Math.abs(A));
                    //     let facC = findFactors(Math.abs(C));
                    //     console.log(facA)
                    //     console.log('test:')
                    //     console.log(facA[0]*facA[4])
                    //     console.log(facC)
                    //     let B = 1*(document.getElementById('QF-B').value);
                    //     console.log(B)

                    //     if (facA[0] * facC[1] + facA[1]*facC[0] === 1*B) {
                    //         console.log(facA[0] * facC[1] + facA[1]*facC[0] )
                    //         console.log('('+facA[0]+'x+'+facC[0]+')('+facA[1]+'x+'+facC[1]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[0]+'x+'+facC[0]+')('+facA[1]+'x+'+facC[1]+')';
                    //         break
                    //     }else if (facA[0] * -1*(facC[1]) + facA[1]*facC[0] === 1*B) {
                    //         console.log(facA[0] * -1*(facC[1]) + facA[1]*facC[0] )
                    //         console.log('('+facA[0]+'x-'+facC[0]+')('+facA[1]+'x+'+facC[1]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[0]+'x-'+facC[0]+')('+facA[1]+'x+'+facC[1]+')';
                    //         break
                    //     }else if (facA[0] * facC[1] + facA[1]*-1*(facC[0]) === 1*B) {
                    //         console.log(facA[0] * facC[1] + facA[1]*-1*(facC[0]))
                    //         console.log('('+facA[0]+'x+'+facC[0]+')('+facA[1]+'x-'+facC[1]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[0]+'x+'+facC[0]+')('+facA[1]+'x-'+facC[1]+')';
                    //         break
                    //     }else if (facA[0] * -1*(facC[1]) + facA[1]*-1*(facC[0]) === 1*B) {
                    //         console.log(facA[0] * -1*(facC[1]) + facA[1]*-1*(facC[0]))
                    //         console.log('('+facA[0]+'x-'+facC[0]+')('+facA[1]+'x-'+facC[1]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[0]+'x-'+facC[0]+')('+facA[1]+'x-'+facC[1]+')';
                    //         break
                    //     }else {
                    //         console.log((facA[0] * facC[1]) + (facA[1]*facC[0]) )

                    //         console.log(facA[0] * -0*(facC[1]) + facA[1]*facC[0] )

                    //         console.log(facA[0] * facC[1] + facA[1]*-0*(facC[0]))

                    //         console.log(facA[0] * -0*(facC[1]) + facA[1]*-0*(facC[0]))

                    //         console.log('no')
                    //     }
                    // }else if (i == 2) {
                    //     console.log('2');
                    //     let facA = findFactors(Math.abs(A));
                    //     let facC = findFactors(Math.abs(C));
                    //     console.log(facA)
                    //     console.log(facC)
                    //     let B = document.getElementById('QF-B').value;

                    //     if (facA[2] * facC[3] + facA[3]*facC[2] === 1*B) {
                    //         console.log(facA[2] * facC[3] + facA[3]*facC[2])
                    //         console.log('('+facA[2]+'x+'+facC[2]+')('+facA[3]+'x+'+facC[3]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[2]+'+'+facC[2]+')('+facA[3]+'x+'+facC[3]+')';
                    //         break
                    //     }else if (facA[2] * -1*facC[3] + facA[3]*facC[2] === 1*B) {
                    //         console.log(facA[2] * -1*facC[3] + facA[3]*facC[2])
                    //         console.log('('+facA[2]+'x-'+facC[2]+')('+facA[3]+'x+'+facC[3]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[2]+'-'+facC[2]+')('+facA[3]+'x+'+facC[3]+')';
                    //         break
                    //     }else if (facA[2] * facC[3] + facA[3]*-1*facC[2] === 1*B) {
                    //         console.log(facA[2] * facC[3] + facA[3]*-1*facC[2])
                    //         console.log('('+facA[2]+'x+'+facC[2]+')('+facA[3]+'x-'+facC[3]+')');
                    //         document.getElementById('FQ-ANS').innerHTML ='('+facA[2]+'+'+facC[2]+')('+facA[3]+'x-'+facC[3]+')';
                    //         break
                    //     }else if (facA[2] * -1*facC[3] + facA[3]*-1*facC[2] === 1*B) {
                    //         console.log(facA[2] * -1*facC[3] + facA[3]*-1*facC[2])
                    //         console.log('('+facA[2]+'x-'+facC[2]+')('+facA[3]+'x-'+facC[3]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[2]+'x-'+facC[2]+')('+facA[3]+'x-'+facC[3]+')';
                    //         break
                    //     }else {
                    //         console.log(facA[2] * facC[3] + facA[3]*facC[2])

                    //         console.log(facA[2] * -1*facC[3] + facA[3]*facC[2])

                    //         console.log(facA[2] * facC[3] + facA[3]*-1*facC[2])

                    //         console.log(facA[2] * -1*facC[3] + facA[3]*-1*facC[2])

                    //         console.log('no')
                    //     }
                    // }else if (i == 3) {
                    //     console.log('3');
                    //     let facA = findFactors(Math.abs(A));
                    //     let facC = findFactors(Math.abs(C));
                    //     console.log(facA)
                    //     console.log(facC)
                    //     let B = document.getElementById('QF-B').value;

                    //     if (facA[4] * facC[5] + facA[5]*facC[4] === 1*B) {
                    //         console.log(facA[4] * facC[5] + facA[5]*facC[4])
                    //         console.log('('+facA[4]+'x+'+facC[4]+')('+facA[5]+'x+'+facC[5]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[4]+'x+'+facC[4]+')('+facA[5]+'x+'+facC[5]+')';
                    //         break
                    //     }else if (facA[4] * -1*facC[5] + facA[5]*facC[4] === 1*B) {
                    //         console.log(facA[4] * -1*facC[5] + facA[5]*facC[4])
                    //         console.log('('+facA[4]+'x-'+facC[4]+')('+facA[5]+'x+'+facC[5]+')');
                    //         document.getElementById('FQ-ANS').innerHTML ='('+facA[4]+'x-'+facC[4]+')('+facA[5]+'x+'+facC[5]+')';
                    //         break
                    //     }else if (facA[4] * facC[5] + facA[5]*-1*facC[4] === 1*B) {
                    //         console.log(facA[4] * facC[5] + facA[5]*-1*facC[4])
                    //         console.log('('+facA[4]+'x+'+facC[4]+')('+facA[5]+'x-'+facC[5]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[4]+'x+'+facC[4]+')('+facA[5]+'x-'+facC[5]+')';
                    //         break
                    //     }else if (facA[4] * -1*facC[5] + facA[5]*-1*facC[4] === 1*B) {
                    //         console.log(facA[4] * -1*facC[5] + facA[5]*-1*facC[4])
                    //         console.log('('+facA[4]+'x-'+facC[4]+')('+facA[5]+'x-'+facC[5]+')');
                    //         document.getElementById('fQ-ANS').innerHTML ='('+facA[4]+'x-'+facC[4]+')('+facA[5]+'x-'+facC[5]+')';
                    //         break
                    //     }else {
                    //         console.log(facA[4] * facC[5] + facA[5]*facC[4])

                    //         console.log(facA[4] * -1*facC[5] + facA[5]*facC[4])

                    //         console.log(facA[4] * facC[5] + facA[5]*-1*facC[4])

                    //         console.log(facA[4] * -1*facC[5] + facA[5]*-1*facC[4])

                    //         console.log('no')
                    //     }
                    // }else if (i == 4) {
                    //     console.log('4');
                    //     let facA = findFactors(Math.abs(A));
                    //     let facC = findFactors(Math.abs(C));
                    //     console.log(facA)
                    //     console.log(facC)
                    //     let B = document.getElementById('QF-B').value;

                    //     if (facA[6] * facC[7] + facA[7]*facC[6] === 1*B) {
                    //         console.log(facA[6] * facC[7] + facA[7]*facC[6])
                    //         console.log('('+facA[6]+'x+'+facC[6]+')('+facA[7]+'x+'+facC[7]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[6]+'x+'+facC[6]+')('+facA[7]+'x+'+facC[7]+')';
                    //         break
                    //     }else if (facA[6] * -1*facC[7] + facA[7]*facC[6] === 1*B) {
                    //         console.log(facA[6] * -1*facC[7] + facA[7]*facC[6])
                    //         console.log('('+facA[6]+'x-'+facC[6]+')('+facA[7]+'x+'+facC[7]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[6]+'x-'+facC[6]+')('+facA[7]+'x+'+facC[7]+')';
                    //         break
                    //     }else if (facA[6] * facC[7] + facA[7]*-1*facC[6] === 1*B) {
                    //         console.log(facA[6] * facC[7] + facA[7]*-1*facC[6])
                    //         console.log('('+facA[6]+'x+'+facC[6]+')('+facA[7]+'x-'+facC[7]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[6]+'x+'+facC[6]+')('+facA[7]+'x-'+facC[7]+')';
                    //         break
                    //     }else if (facA[6] * -1*facC[7] + facA[7]*-1*facC[6] === 1*B) {
                    //         console.log(facA[6] * -1*facC[7] + facA[7]*-1*facC[6])
                    //         console.log('('+facA[6]+'x-'+facC[6]+')('+facA[7]+'x-'+facC[7]+')');
                    //         document.getElementById('FQ-ANS').innerHTML ='('+facA[6]+'x-'+facC[6]+')('+facA[7]+'x-'+facC[7]+')';
                    //         break
                    //     }else {
                    //         console.log(facA[6] * facC[7] + facA[7]*facC[6])

                    //         console.log(facA[6] * -1*facC[7] + facA[7]*facC[6])

                    //         console.log(facA[6] * facC[7] + facA[7]*-1*facC[6])
                    //         console.log(facA[6] * -1*facC[7] + facA[7]*-1*facC[6])
                    //         console.log('no')
                    //     }
                    // }else if (i == 5) {
                    //     console.log('5');
                    //     let facA = findFactors(Math.abs(A));
                    //     let facC = findFactors(Math.abs(C));
                    //     console.log(facA)
                    //     console.log(facC)
                    //     let B = document.getElementById('QF-B').value;

                    //     if (facA[8] * facC[9] + facA[9]*facC[8] === 1*B) {
                    //         console.log('('+facA[8]+'x+'+facC[8]+')('+facA[9]+'x+'+facC[9]+')');
                    //         document.getElementById('FQ-ANS').innerHTML ='('+facA[8]+'x+'+facC[8]+')('+facA[9]+'x+'+facC[9]+')';
                    //         break
                    //     }else if (facA[8] * -1*facC[9] + facA[9]*facC[8] === 1*B) {
                    //         console.log('('+facA[8]+'x-'+facC[8]+')('+facA[9]+'x+'+facC[9]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[8]+'x-'+facC[8]+')('+facA[9]+'x+'+facC[9]+')';
                    //         break
                    //     }else if (facA[8] * facC[9] + facA[9]*-1*facC[8] === 1*B) {
                    //         console.log('('+facA[8]+'x+'+facC[8]+')('+facA[9]+'x-'+facC[9]+')');
                    //         document.getElementById('FQ-ANS').innerHTML ='('+facA[8]+'x+'+facC[8]+')('+facA[9]+'x-'+facC[9]+')';
                    //         break
                    //     }else if (facA[8] * -1*facC[9] + facA[9]*-1*facC[8] === 1*B) {
                    //         console.log('('+facA[8]+'x-'+facC[8]+')('+facA[9]+'x-'+facC[9]+')');
                    //         document.getElementById('FQ-ANS').innerHTML = '('+facA[8]+'x-'+facC[8]+')('+facA[9]+'x-'+facC[9]+')';
                    //         break
                    //     }else {
                    //         console.log(facA[8] * facC[9] + facA[9]*facC[8])
                    //         console.log(facA[8] * -1*facC[9] + facA[9]*facC[8])
                    //         console.log(facA[8] * facC[9] + facA[9]*-1*facC[8])
                    //         console.log(facA[8] * -1*facC[9] + facA[9]*-1*facC[8])
                    //         alert('this formula can\'t be factored.')
                    //         console.log('no')
                    //     }

                    // }
                    if (i % 2 != 0) {
                        console.log('even')
                        let facA = findFactors(Math.abs(A));
                        let facC = findFactors(Math.abs(C));
                        let B = 1*(document.getElementById('QF-B').value);

                        if (facA[i-1] * facC[i] + facA[i]*facC[i-1] === 1*B) {
                            console.log(facA[i-1] * facC[i] + facA[i]*facC[i-1] )
                            console.log('('+facA[i-1]+'x+'+facC[i-1]+')('+facA[i]+'x+'+facC[i]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x+'+facC[i-1]+')('+facA[i]+'x+'+facC[i]+')';
                            break
                        }else if (facA[i-1] * -1*(facC[i]) + facA[1]*facC[i-1] === 1*B) {
                            console.log(facA[i-1] * -1*(facC[1]) + facA[1]*facC[i-1] )
                            console.log('('+facA[i-1]+'x-'+facC[i-1]+')('+facA[1]+'x+'+facC[1]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-1]+')('+facA[i]+'x+'+facC[i]+')';
                            break
                        }else if (facA[i-1] * facC[i] + facA[i]*-1*(facC[i-1]) === 1*B) {
                            console.log(facA[i-1] * facC[i] + facA[i]*-1*(facC[i-1]))
                            console.log('('+facA[i-1]+'x+'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x+'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')';
                            break
                        }else if (facA[i-1] * -1*(facC[i]) + facA[i]*-1*(facC[i-1]) === 1*B) {
                            console.log(facA[i-1] * -1*(facC[i]) + facA[i]*-1*(facC[i-1]))
                            console.log('('+facA[i-1]+'x-'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')';
                            break
                        }else if (facA[i-1] * -1*(facC[i-2]) + facA[i]*-1*(facC[i-3]) === 1*B) {
                            console.log(facA[i-1] * -1*(facC[i-2]) + facA[i]*-1*(facC[i-3]))
                            console.log('('+facA[i-1]+'x-'+facC[i-3]+')('+facA[i]+'x-'+facC[i-2]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')';
                            break
                        }else if (facA[i-1] * -1*(facC[i-2]) + facA[i]*-1*(facC[i-3]) === 1*B) {
                            console.log(facA[i-1] * -1*(facC[i-2]) + facA[i]*-1*(facC[i-3]))
                            console.log('('+facA[i-1]+'x-'+facC[i-3]+')('+facA[i]+'x-'+facC[i-2]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')';
                            break
                        }else if (facA[i-1] * (facC[i-2]) + facA[i]*-1*(facC[i-3]) === 1*B) {
                            console.log(facA[i-1] * (facC[i-2]) + facA[i]*-1*(facC[i-3]))
                            console.log('('+facA[i-1]+'x-'+facC[i-3]+')('+facA[i]+'x-'+facC[i-2]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x+'+facC[i-2]+')('+facA[i]+'x-'+facC[i-3]+')';
                            break
                        }else if (facA[i-1] * -1*(facC[i-2]) + facA[i]*(facC[i-3]) === 1*B) {
                            console.log(facA[i-1] * -1*(facC[i-2]) + facA[i]*(facC[i-3]))
                            console.log('('+facA[i-1]+'x-'+facC[i-3]+')('+facA[i]+'x-'+facC[i-2]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-2]+')('+facA[i]+'x+'+facC[i-3]+')';
                            break
                        }else if (facA[i-1] * (facC[i-2]) + facA[i]*(facC[i-3]) === 1*B) {
                            console.log(facA[i-1] * (facC[i-2]) + facA[i]*(facC[i-3]))
                            console.log('('+facA[i-1]+'x-'+facC[i-3]+')('+facA[i]+'x-'+facC[i-2]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x+'+facC[i-3]+')('+facA[i]+'x+'+facC[i-2]+')';
                            break
                        }else if (facA[i-2] * -1*(facC[i-1]) + facA[i-3]*-1*(facC[i]) === 1*B) {
                            console.log(facA[i-2] * -1*(facC[i-1]) + facA[i-3]*-1*(facC[i]))
                            console.log('('+facA[i-2]+'x-'+facC[i]+')('+facA[i-3]+'x-'+facC[i-1]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')';
                            break
                        }else if (facA[i-2] * -1*(facC[i-1]) + facA[i-3]*-1*(facC[i]) === 1*B) {
                            console.log(facA[i-2] * -1*(facC[i-1]) + facA[i-3]*-1*(facC[i]))
                            console.log('('+facA[i-2]+'x-'+facC[i]+')('+facA[i-3]+'x-'+facC[i-1]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-1]+')('+facA[i]+'x-'+facC[i]+')';
                            break
                        }else if (facA[i-2] * (facC[i-1]) + facA[i-3]*-1*(facC[i]) === 1*B) {
                            console.log(facA[i-2] * (facC[i-1]) + facA[i-3]*-1*(facC[i]))
                            console.log('('+facA[i-2]+'x-'+facC[i]+')('+facA[i-3]+'x-'+facC[i-1]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x+'+facC[i-2]+')('+facA[i]+'x-'+facC[i-3]+')';
                            break
                        }else if (facA[i-2] * -1*(facC[i-1]) + facA[i-3]*(facC[i]) === 1*B) {
                            console.log(facA[i-2] * -1*(facC[i-1]) + facA[i-3]*(facC[i]))
                            console.log('('+facA[i-2]+'x-'+facC[i]+')('+facA[i-3]+'x-'+facC[i-1]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x-'+facC[i-2]+')('+facA[i]+'x+'+facC[i-3]+')';
                            break
                        }else if (facA[i-2] * (facC[i-1]) + facA[i-3]*(facC[i]) === 1*B) {
                            console.log(facA[i-2] * (facC[i-1]) + facA[i-3]*(facC[i]))
                            console.log('('+facA[i-2]+'x-'+facC[i]+')('+facA[i-3]+'x-'+facC[i-1]+')');
                            document.getElementById('FQ-ANS').innerHTML = '('+facA[i-1]+'x+'+facC[i-2]+')('+facA[i]+'x+'+facC[i-3]+')';
                            break
                        }else {
                            console.log((facA[i-1] * facC[i]) + (facA[i]*facC[i-1]) )

                            console.log(facA[i-1] * -i-1*(facC[i]) + facA[i]*facC[i-1] )

                            console.log(facA[i-1] * facC[i] + facA[i]*-i-1*(facC[i-1]))

                            console.log(facA[i-1] * -i-1*(facC[i]) + facA[i]*-i-1*(facC[i-1]))

                            console.log(facA[i-1] * -1*(facC[i-2]) + facA[i]*-1*(facC[i-3]))

                            console.log(facA[i-1] * (facC[i-2]) + facA[i]*-1*(facC[i-3]))

                            console.log(facA[i-1] * (facC[i-2]) + facA[i]*(facC[i-3]))

                            console.log(facA[i-1] * -1*(facC[i-2]) + facA[i]*(facC[i-3]))

                            console.log('no')
                            console.log('n= '+i)
                            console.log(facA[i]+'d'+facC[i])
                        }

                    }
                        
                }


            }
            combine()
        }

    }
}
if (document.URL.includes('pytheorem')) {
    console.log('you are in the Pythagorean Theorem page.');

    document.getElementById('hidee').style.visibility = 'hidden';
    document.getElementById('hidee?').style.visibility = 'visible';

    function Pythagorean() {
        document.getElementById('hidee').style.visibility = 'visible';
        document.getElementById('hidee?').style.visibility = 'hidden';

        let A = document.getElementById('PT-A').value || '0';
        let B = document.getElementById('PT-B').value || '0';
        let C = document.getElementById('PT-C').value || '0';

        if (A === '0') {
            let c = C**2
            let b = B**2


            let st1 = c - b;
            let ans = Math.sqrt(st1);

            console.log('ans '+ans)

            document.getElementById('Lettar').innerHTML = 'A';
            document.getElementById('PT-ans').innerHTML = ans;
        }else if (B === '0') {
            let c = C**2
            let b = A**2
            console.log(c)
            console.log(b)


            let st1 = c - b;
            console.log(st1)
            let ans = Math.sqrt(st1);

            console.log('ans '+ans)

            document.getElementById('Lettar').innerHTML = 'B';
            document.getElementById('PT-ans').innerHTML = ans;
        }else if (C === '0') {
            let c = B**2
            let b = A**2


            let st1 = c + b;
            let ans = Math.sqrt(st1);

            console.log('ans '+ans)

            document.getElementById('Lettar').innerHTML = 'C';
            document.getElementById('PT-ans').innerHTML = ans;
        }else {
            if (A**2 + B**2 === C**2) {
                document.getElementById('ansgle?').innerHTML = ''
                document.getElementById('hidee').style.visibility = 'hidden';
                document.getElementById('hidee2').style.visibility = 'visible';
                document.getElementById('ansgle?').innerHTML = 'Right angle'
            } else {
                document.getElementById('ansgle?').innerHTML = ''
                document.getElementById('hidee').style.visibility = 'hidden';
                document.getElementById('hidee2').style.visibility = 'visible';
                document.getElementById('ansgle?').innerHTML = 'Not Right angle'
            }
        }
    }
}