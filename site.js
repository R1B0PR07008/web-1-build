console.log("hi, welcome to WEB-1. I see you're looking at the code. I wouldn't really trust it since it is my first website but you can get some inspiration from it.");
// !setting up database for username,psw,profile img, ect... AND setting up login/register functions
// if  (document.URL.includes("login.html")) {
//     console.log("you are in the login page.")

// !PAGE CODE
    function Hide(UNIT) {
        let un = 'undefined';
        if (UNIT === un ) {
            document.getElementsByClassName("ans-text").visibility = "hidden";
            document.getElementById('ans-text').style.visibility = "hidden";
            document.getElementById('1-LEN-IF').style.visibility = "visible";
            document.getElementById('2-LEN-IF').style.visibility = "visible";
        } if (
            UNIT === 'M' ||
             UNIT === 'KM' ||
             UNIT === 'CM' || 
             UNIT === 'FT' ||
             UNIT === 'YD' ||
             UNIT === 'MI' ||
             UNIT === 'IN' ||

            UNIT === 'G' ||
            UNIT === 'KG' ||
            UNIT === 'TON' ||
            UNIT === 'LBS' ||
            UNIT === 'MG' ||

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
            document.getElementById('1-LEN-IF').style.visibility = "hidden";
            document.getElementById('2-LEN-IF').style.visibility = "hidden";
            document.getElementById('ans-text').style.visibility = "visible";
            document.getElementsByClassName("ans-text").visibility = "visible";
        };
    };

if (document.URL.includes("len.html")) {
    console.log("you are in the len page");

    let UNIT = document.getElementById('UNIT-LEN').value || 'undefined';
    // Hide(UNIT);

    function Len() {
        let NUM = document.getElementById('NUM-LEN').value || 1;
        let UNIT = document.getElementById('UNIT-LEN').value || 'undefined';
        console.log("btn 'BTN-1-LEN' pressed.");
        console.log(NUM);
        console.log(UNIT);
        if (UNIT === 'M') {

            document.getElementById("len-1-text").innerHTML = "M to KM";
            document.getElementById("len-2-text").innerHTML = "M to CM";
            document.getElementById("len-3-text").innerHTML = "M to FT";
            document.getElementById("len-4-text").innerHTML = "M to YD";
            document.getElementById("len-5-text").innerHTML = "M to MI";
            document.getElementById("len-6-text").innerHTML = "M to IN";

            document.getElementById("len-7-text").innerHTML = "M to KM";
            document.getElementById("len-8-text").innerHTML = "M to CM";
            document.getElementById("len-9-text").innerHTML = "M to FT";
            document.getElementById("len-10-text").innerHTML = "M to YD";
            document.getElementById("len-11-text").innerHTML = "M to MI";
            document.getElementById("len-12-text").innerHTML = "M to IN";


            document.getElementById("01-len").innerHTML = (NUM / 1000);
            document.getElementById("02-len").innerHTML = (NUM * 100);
            document.getElementById("03-len").innerHTML = (NUM * 3.28);
            document.getElementById("04-len").innerHTML = (NUM * 1.094);
            document.getElementById("05-len").innerHTML = (NUM / 1809);
            document.getElementById("06-len").innerHTML = (NUM * 39.37);
            document.getElementsByClassName("ans-NUM").innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "/ 1000";
            document.getElementById("len-2-formula").innerHTML = "* 100";
            document.getElementById("len-3-formula").innerHTML = "*3.28";
            document.getElementById("len-4-formula").innerHTML = "* 1.094";
            document.getElementById("len-5-formula").innerHTML = "/ 1809";
            document.getElementById("len-6-formula").innerHTML = "* 39.37";

            Hide(UNIT)
        } if (UNIT === 'KM') {
            document.getElementById("len-1-text").innerHTML = "KM to M:";
            document.getElementById("len-2-text").innerHTML = "KM to CM:";
            document.getElementById("len-3-text").innerHTML = "KM to FT:";
            document.getElementById("len-4-text").innerHTML = "KM to YD:";
            document.getElementById("len-5-text").innerHTML = "KM to MI:";
            document.getElementById("len-6-text").innerHTML = "KM to IN:";

            document.getElementById("len-7-text").innerHTML = "KM to M:";
            document.getElementById("len-8-text").innerHTML = "KM to CM:";
            document.getElementById("len-9-text").innerHTML = "KM to FT:";
            document.getElementById("len-10-text").innerHTML ="KM to YD:";
            document.getElementById("len-11-text").innerHTML ="KM to MI:";
            document.getElementById("len-12-text").innerHTML ="KM to IN:";


            document.getElementById("01-len").innerHTML = (NUM * 1000  );
            document.getElementById("02-len").innerHTML = (NUM * 100000);
            document.getElementById("03-len").innerHTML = (NUM * 3281  );
            document.getElementById("04-len").innerHTML = (NUM * 1094  );
            document.getElementById("05-len").innerHTML = (NUM / 1.609 );
            document.getElementById("06-len").innerHTML = (NUM * 39370 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 1000  ";
            document.getElementById("len-2-formula").innerHTML = "* 100000";
            document.getElementById("len-3-formula").innerHTML = "* 3281  ";
            document.getElementById("len-4-formula").innerHTML = "* 1094  ";
            document.getElementById("len-5-formula").innerHTML = "/ 1.609 ";
            document.getElementById("len-6-formula").innerHTML = "* 39370 ";

            Hide(UNIT)
        } if (UNIT === 'CM') {
            document.getElementById("len-1-text").innerHTML = "CM to M:";
            document.getElementById("len-2-text").innerHTML = "CM to KM:";
            document.getElementById("len-3-text").innerHTML = "CM to FT:";
            document.getElementById("len-4-text").innerHTML = "CM to YD:";
            document.getElementById("len-5-text").innerHTML = "CM to MI:";
            document.getElementById("len-6-text").innerHTML = "CM to IN:";

            document.getElementById("len-7-text").innerHTML = "CM to M:";
            document.getElementById("len-8-text").innerHTML = "CM to KM:";
            document.getElementById("len-9-text").innerHTML = "CM to FT:";
            document.getElementById("len-10-text").innerHTML ="CM to YD:";
            document.getElementById("len-11-text").innerHTML ="CM to MI:";
            document.getElementById("len-12-text").innerHTML ="CM to IN:";


            document.getElementById("01-len").innerHTML = (NUM / 100   );
            document.getElementById("02-len").innerHTML = (NUM / 1e+6  );
            document.getElementById("03-len").innerHTML = (NUM / 30.48 );
            document.getElementById("04-len").innerHTML = (NUM / 41.44 );
            document.getElementById("05-len").innerHTML = (NUM / 160934);
            document.getElementById("06-len").innerHTML = (NUM / 2.54  );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "/ 100   ";
            document.getElementById("len-2-formula").innerHTML = "/ 1e+6  ";
            document.getElementById("len-3-formula").innerHTML = "/ 30.48 ";
            document.getElementById("len-4-formula").innerHTML = "/ 41.44 ";
            document.getElementById("len-5-formula").innerHTML = "/ 160934";
            document.getElementById("len-6-formula").innerHTML = "/ 2.54  ";

            Hide(UNIT)
        } if (UNIT === 'FT') {
            document.getElementById("len-1-text").innerHTML = "FT to M:";
            document.getElementById("len-2-text").innerHTML = "FT to KM:";
            document.getElementById("len-3-text").innerHTML = "FT to CM:";
            document.getElementById("len-4-text").innerHTML = "FT to YD:";
            document.getElementById("len-5-text").innerHTML = "FT to MI:";
            document.getElementById("len-6-text").innerHTML = "FT to IN:";

            document.getElementById("len-7-text").innerHTML = "FTto M:";
            document.getElementById("len-8-text").innerHTML = "FTto KM:";
            document.getElementById("len-9-text").innerHTML = "FTto CM:";
            document.getElementById("len-10-text").innerHTML ="FTto YD:";
            document.getElementById("len-11-text").innerHTML ="FTto MI:";
            document.getElementById("len-12-text").innerHTML ="FTto IN:";


            document.getElementById("01-len").innerHTML = (NUM * 3.281 );
            document.getElementById("02-len").innerHTML = (NUM / 3281  );
            document.getElementById("03-len").innerHTML = (NUM * 30.48 );
            document.getElementById("04-len").innerHTML = (NUM * 3     );
            document.getElementById("05-len").innerHTML = (NUM / 5280  );
            document.getElementById("06-len").innerHTML = (NUM * 12    );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 3.281 ";
            document.getElementById("len-2-formula").innerHTML = "/ 3281  ";
            document.getElementById("len-3-formula").innerHTML = "* 30.48 ";
            document.getElementById("len-4-formula").innerHTML = "* 3     ";
            document.getElementById("len-5-formula").innerHTML = "/ 5280  ";
            document.getElementById("len-6-formula").innerHTML = "* 12    ";

            Hide(UNIT)
        } if (UNIT === 'YD') {
            document.getElementById("len-1-text").innerHTML = "YD to M:";
            document.getElementById("len-2-text").innerHTML = "YD to KM:";
            document.getElementById("len-3-text").innerHTML = "YD to CM:";
            document.getElementById("len-4-text").innerHTML = "YD to FT:";
            document.getElementById("len-5-text").innerHTML = "YD to MI:";
            document.getElementById("len-6-text").innerHTML = "YD to IN:";

            document.getElementById("len-7-text").innerHTML = "YD to M:";
            document.getElementById("len-8-text").innerHTML = "YD to KM:";
            document.getElementById("len-9-text").innerHTML = "YD to CM:";
            document.getElementById("len-10-text").innerHTML ="YD to FT:";
            document.getElementById("len-11-text").innerHTML ="YD to MI:";
            document.getElementById("len-12-text").innerHTML ="YD to IN:";


            document.getElementById("01-len").innerHTML = (NUM * 1.094 );
            document.getElementById("02-len").innerHTML = (NUM / 1094  );
            document.getElementById("03-len").innerHTML = (NUM * 91.44 );
            document.getElementById("04-len").innerHTML = (NUM * 3     );
            document.getElementById("05-len").innerHTML = (NUM / 1760  );
            document.getElementById("06-len").innerHTML = (NUM / 12    );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 1.094 ";
            document.getElementById("len-2-formula").innerHTML = "/ 1094  ";
            document.getElementById("len-3-formula").innerHTML = "* 91.44 ";
            document.getElementById("len-4-formula").innerHTML = "* 3     ";
            document.getElementById("len-5-formula").innerHTML = "/ 1760  ";
            document.getElementById("len-6-formula").innerHTML = "/ 12    ";

            Hide(UNIT)
        } if (UNIT === 'MI') {
            document.getElementById("len-1-text").innerHTML = "MI to M:";
            document.getElementById("len-2-text").innerHTML = "MI to KM:";
            document.getElementById("len-3-text").innerHTML = "MI to CM:";
            document.getElementById("len-4-text").innerHTML = "MI to FT:";
            document.getElementById("len-5-text").innerHTML = "MI to YD:";
            document.getElementById("len-6-text").innerHTML = "MI to IN:";

            document.getElementById("len-7-text").innerHTML = "MI to M:";
            document.getElementById("len-8-text").innerHTML = "MI to KM:";
            document.getElementById("len-9-text").innerHTML = "MI to CM:";
            document.getElementById("len-10-text").innerHTML ="MI to FT:";
            document.getElementById("len-11-text").innerHTML ="MI to YD:";
            document.getElementById("len-12-text").innerHTML ="MI to IN:";


            document.getElementById("01-len").innerHTML = (NUM * 1609   );
            document.getElementById("02-len").innerHTML = (NUM * 1.609 );
            document.getElementById("03-len").innerHTML = (NUM * 160934);
            document.getElementById("04-len").innerHTML = (NUM * 5280  );
            document.getElementById("05-len").innerHTML = (NUM * 1760  );
            document.getElementById("06-len").innerHTML = (NUM * 63360 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "* 1609  ";
            document.getElementById("len-2-formula").innerHTML = "* 1.609 ";
            document.getElementById("len-3-formula").innerHTML = "* 160934";
            document.getElementById("len-4-formula").innerHTML = "* 5280  ";
            document.getElementById("len-5-formula").innerHTML = "* 1760  ";
            document.getElementById("len-6-formula").innerHTML = "* 63360 ";

            Hide(UNIT)
        } if (UNIT === 'IN') {
            document.getElementById("len-1-text").innerHTML = "IN to M:";
            document.getElementById("len-2-text").innerHTML = "IN to KM:";
            document.getElementById("len-3-text").innerHTML = "IN to CM:";
            document.getElementById("len-4-text").innerHTML = "IN to FT:";
            document.getElementById("len-5-text").innerHTML = "IN to YD:";
            document.getElementById("len-6-text").innerHTML = "IN to MI:";

            document.getElementById("len-7-text").innerHTML = "IN to M:";
            document.getElementById("len-8-text").innerHTML = "IN to KM:";
            document.getElementById("len-9-text").innerHTML = "IN to CM:";
            document.getElementById("len-10-text").innerHTML ="IN to FT:";
            document.getElementById("len-11-text").innerHTML ="IN to YD:";
            document.getElementById("len-12-text").innerHTML ="IN to MI:";


            document.getElementById("01-len").innerHTML = (NUM / 39.37 );
            document.getElementById("02-len").innerHTML = (NUM / 39370 );
            document.getElementById("03-len").innerHTML = (NUM * 2.54  );
            document.getElementById("04-len").innerHTML = (NUM / 12    );
            document.getElementById("05-len").innerHTML = (NUM / 36    );
            document.getElementById("06-len").innerHTML = (NUM / 63360 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("len-1-formula").innerHTML = "/ 39.37 ";
            document.getElementById("len-2-formula").innerHTML = "/ 39370 ";
            document.getElementById("len-3-formula").innerHTML = "* 2.54  ";
            document.getElementById("len-4-formula").innerHTML = "/ 12    ";
            document.getElementById("len-5-formula").innerHTML = "/ 36    ";
            document.getElementById("len-6-formula").innerHTML = "/ 63360 ";

            Hide(UNIT)
        };
    };
};

if (document.URL.includes("mass.html")) {
    console.log("you are in the mass page");

    function Mass() {
        let NUM = document.getElementById('NUM-MASS').value || 1;
        let UNIT = document.getElementById('UNIT-MASS').value || 'undefined';
        console.log("btn 'BTN-1-MASS' pressed.");
        console.log(NUM);
        console.log(UNIT);

        if (UNIT === 'KG') {
            document.getElementById("mass-1-text").innerHTML = "KG to KG:";
            document.getElementById("mass-2-text").innerHTML = "KG to TON:";
            document.getElementById("mass-3-text").innerHTML = "KG to LBS:";
            document.getElementById("mass-4-text").innerHTML = "KG to MG:";

            document.getElementById("mass-5-text").innerHTML = "KG to KG:";
            document.getElementById("mass-6-text").innerHTML = "KG to TON:";
            document.getElementById("mass-7-text").innerHTML = "KG to LBS:";
            document.getElementById("mass-8-text").innerHTML = "KG to MG:";

            document.getElementById("01-mass").innerHTML = (NUM * 1000 );
            document.getElementById("02-mass").innerHTML = (NUM / 907  );
            document.getElementById("03-mass").innerHTML = (NUM * 2.205);
            document.getElementById("04-mass").innerHTML = (NUM / 1e+7 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("mass-1-formula").innerHTML = "* 1000 ";
            document.getElementById("mass-2-formula").innerHTML = "/ 907  ";
            document.getElementById("mass-3-formula").innerHTML = "* 2.205";
            document.getElementById("mass-4-formula").innerHTML = "/ 1e+7 or 100,000,00";

            Hide(UNIT);
        } if (UNIT === 'G') {
            document.getElementById("mass-1-text").innerHTML = "G to KG:";
            document.getElementById("mass-2-text").innerHTML = "G to TON:";
            document.getElementById("mass-3-text").innerHTML = "G to LBS:";
            document.getElementById("mass-4-text").innerHTML = "G to MG:";

            document.getElementById("mass-5-text").innerHTML = "G to KG:";
            document.getElementById("mass-6-text").innerHTML = "G to TON:";
            document.getElementById("mass-7-text").innerHTML = "G to LBS:";
            document.getElementById("mass-8-text").innerHTML = "G to MG:";

            document.getElementById("01-mass").innerHTML = (NUM / 1000  );
            document.getElementById("02-mass").innerHTML = (NUM / 907185);
            document.getElementById("03-mass").innerHTML = (NUM / 454   );
            document.getElementById("04-mass").innerHTML = (NUM * 1000  );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("mass-1-formula").innerHTML = "/ 1000  ";
            document.getElementById("mass-2-formula").innerHTML = "/ 907185";
            document.getElementById("mass-3-formula").innerHTML = "/ 454   ";
            document.getElementById("mass-4-formula").innerHTML = "* 1000  ";

            Hide(UNIT);
        } if (UNIT === 'TON') {
            document.getElementById("mass-1-text").innerHTML = "TON to G:";
            document.getElementById("mass-2-text").innerHTML = "TON to KG:";
            document.getElementById("mass-3-text").innerHTML = "TON to LBS:";
            document.getElementById("mass-4-text").innerHTML = "TON to MG:";

            document.getElementById("mass-5-text").innerHTML = "TON to G:";
            document.getElementById("mass-6-text").innerHTML = "TON to KG:";
            document.getElementById("mass-7-text").innerHTML = "TON to LBS:";
            document.getElementById("mass-8-text").innerHTML = "TON to MG:";

            document.getElementById("01-mass").innerHTML = (NUM * 907195  );
            document.getElementById("02-mass").innerHTML = (NUM * 907     );
            document.getElementById("03-mass").innerHTML = (NUM * 2000    );
            document.getElementById("04-mass").innerHTML = (NUM * 9.072e+8);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("mass-1-formula").innerHTML = "* 907195  ";
            document.getElementById("mass-2-formula").innerHTML = "* 907     ";
            document.getElementById("mass-3-formula").innerHTML = "* 2000    ";
            document.getElementById("mass-4-formula").innerHTML = "* 9.072e+8";

            Hide(UNIT);
        } if (UNIT === 'LBS') {
            document.getElementById("mass-1-text").innerHTML = "LBS to G:";
            document.getElementById("mass-2-text").innerHTML = "LBS to KG:";
            document.getElementById("mass-3-text").innerHTML = "LBS to TON:";
            document.getElementById("mass-4-text").innerHTML = "LBS to MG:";

            document.getElementById("mass-5-text").innerHTML = "LBS to G:";
            document.getElementById("mass-6-text").innerHTML = "LBS to KG:";
            document.getElementById("mass-7-text").innerHTML = "LBS to TON:";
            document.getElementById("mass-8-text").innerHTML = "LBS to MG:";

            document.getElementById("01-mass").innerHTML = (NUM * 454    );
            document.getElementById("02-mass").innerHTML = (NUM / 2.205  );
            document.getElementById("03-mass").innerHTML = (NUM / 2000   );
            document.getElementById("04-mass").innerHTML = (NUM / 453_592);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("mass-1-formula").innerHTML = "* 454    ";
            document.getElementById("mass-2-formula").innerHTML = "/ 2.205  ";
            document.getElementById("mass-3-formula").innerHTML = "/ 2000   ";
            document.getElementById("mass-4-formula").innerHTML = "/ 453_592";

            Hide(UNIT);
        } if (UNIT === 'MG') {
            document.getElementById("mass-1-text").innerHTML = "MG to G:";
            document.getElementById("mass-2-text").innerHTML = "MG to KG:";
            document.getElementById("mass-3-text").innerHTML = "MG to TON:";
            document.getElementById("mass-4-text").innerHTML = "MG to LBS:";

            document.getElementById("mass-5-text").innerHTML = "MG to G:";
            document.getElementById("mass-6-text").innerHTML = "MG to KG:";
            document.getElementById("mass-7-text").innerHTML = "MG to TON:";
            document.getElementById("mass-8-text").innerHTML = "MG to LBS:";

            document.getElementById("01-mass").innerHTML = (NUM / 1000         );
            document.getElementById("02-mass").innerHTML = (NUM / 100_000_0    );
            document.getElementById("03-mass").innerHTML = (NUM / 100_000_000_0);
            document.getElementById("04-mass").innerHTML = (NUM / 1453592      );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("mass-1-formula").innerHTML = "/ 1000         ";
            document.getElementById("mass-2-formula").innerHTML = "/ 100_000_0    ";
            document.getElementById("mass-3-formula").innerHTML = "/ 100_000_000_0";
            document.getElementById("mass-4-formula").innerHTML = "/ 1453592      ";

            Hide(UNIT);
        };
    };
};

if (document.URL.includes("time.html")) {
    console.log("you are in the time page");

    function Time() {
        let NUM = document.getElementById('NUM-TIME').value || 1;
        let UNIT = document.getElementById('UNIT-TIME').value || 'undefined';
        console.log("btn 'BTN-1-TIME' pressed.");
        console.log(NUM);
        console.log(UNIT);

        if (UNIT === 'S') {
            document.getElementById("time-1-text").innerHTML = "S to M:";
            document.getElementById("time-2-text").innerHTML = "S to H:";
            document.getElementById("time-3-text").innerHTML = "S to M:";
            document.getElementById("time-4-text").innerHTML = "S to H:";

            document.getElementById("01-time").innerHTML = (NUM / 60   );
            document.getElementById("02-time").innerHTML = (NUM / 3600 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("time-1-formula").innerHTML = "/ 60   ";
            document.getElementById("time-2-formula").innerHTML = "/ 3600 ";
            Hide(UNIT)
        } if (UNIT === 'M') {
            document.getElementById("time-1-text").innerHTML = "S to S:";
            document.getElementById("time-2-text").innerHTML = "S to H:";
            document.getElementById("time-3-text").innerHTML = "S to S:";
            document.getElementById("time-4-text").innerHTML = "S to H:";

            document.getElementById("01-time").innerHTML = (NUM * 60   );
            document.getElementById("02-time").innerHTML = (NUM / 60 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("time-1-formula").innerHTML = "* 60   ";
            document.getElementById("time-2-formula").innerHTML = "/ 60 ";
            Hide(UNIT)
        } if (UNIT === 'H') {
            document.getElementById("time-1-text").innerHTML = "S to S:";
            document.getElementById("time-2-text").innerHTML = "S to M:";
            document.getElementById("time-3-text").innerHTML = "S to S:";
            document.getElementById("time-4-text").innerHTML = "S to M:";

            document.getElementById("01-time").innerHTML = (NUM * 60   );
            document.getElementById("02-time").innerHTML = (NUM * 3600 );
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("time-1-formula").innerHTML = "* 60   ";
            document.getElementById("time-2-formula").innerHTML = "* 3600 ";
            Hide(UNIT)
        };
    }; 
};

if (document.URL.includes("temp.html")) {
    console.log("you are in the temp page");

    function Temp() {
        let NUM = document.getElementById('NUM-TEMP').value || 1;
        let UNIT = document.getElementById('UNIT-TEMP').value || 'undefined';
        console.log("btn 'BTN-1-TEMP' pressed.");
        console.log(NUM);
        console.log(UNIT);

        if (UNIT === 'K') {
            document.getElementById("temp-1-text").innerHTML = "K to C:";
            document.getElementById("temp-2-text").innerHTML = "K to F:";
            document.getElementById("temp-3-text").innerHTML = "K to C:";
            document.getElementById("temp-4-text").innerHTML = "K to F(Formula):";

            document.getElementById("01-temp").innerHTML = (NUM - 273.15);
            document.getElementById("02-temp").innerHTML = ((NUM - 273.15) * 9/5 + 32);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("temp-1-formula").innerHTML = "- 273.15";
            document.getElementById("temp-2-formula").innerHTML = "(NUMBER - 273.15) * 9/5 + 32)";
            Hide(UNIT)
        } if (UNIT === 'C') {
            document.getElementById("temp-1-text").innerHTML = "C to K:";
            document.getElementById("temp-2-text").innerHTML = "C to F:";
            document.getElementById("temp-3-text").innerHTML = "C to K:";
            document.getElementById("temp-4-text").innerHTML = "C to F(Formula):";

            document.getElementById("01-temp").innerHTML = (NUM + 273.15);
            document.getElementById("02-temp").innerHTML = ((NUM * 9/5) + 32);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("temp-1-formula").innerHTML = "+ 273.15";
            document.getElementById("temp-2-formula").innerHTML = "(NUMBER * 9/5) + 32)";
            Hide(UNIT)
        } if (UNIT === 'F') {
            document.getElementById("temp-1-text").innerHTML = "F to K:";
            document.getElementById("temp-2-text").innerHTML = "F to C:";
            document.getElementById("temp-3-text").innerHTML = "F to K(Formula):";
            document.getElementById("temp-4-text").innerHTML = "F to C(Formula):";

            document.getElementById("01-temp").innerHTML = ((NUM - 32) * 5/9 + 273.15);
            document.getElementById("02-temp").innerHTML = ((NUM - 32) * 5/9);
            document.getElementsByClassName('ans-text-NUM').innerHTML = "";

            document.getElementById("temp-1-formula").innerHTML = "(NUMBER - 32) * 5/9 + 273.15)";
            document.getElementById("temp-2-formula").innerHTML = "(NUMBER - 32) * 5/9";
            Hide(UNIT)
        }
    }
};

if (document.URL.includes("liquids.html")) {
    console.log("you are in the liquids page.")

    function Liquids() {
        let NUM = document.getElementById('NUM-LQ').value || 1;
        let UNIT = document.getElementById('UNIT-LQ').value || 'undefined';
        console.log("btn 'BTN-1-LQ' pressed.");
        console.log(NUM);
        console.log(UNIT);

        if (UNIT === "L") {
            document.getElementById("lq-1-text").innerHTML = "L to CL:";
            document.getElementById("lq-2-text").innerHTML = "L to ML:";
            document.getElementById("lq-3-text").innerHTML = "L to OZ:";

            document.getElementById("lq-4-text").innerHTML = "L to CL:";
            document.getElementById("lq-5-text").innerHTML = "L to ML:";
            document.getElementById("lq-6-text").innerHTML = "L to OZ:";

            document.getElementById("01-lq").innerHTML = (NUM * 100    );
            document.getElementById("02-lq").innerHTML = (NUM * 1000   );
            document.getElementById("03-lq").innerHTML = (NUM * 32.1951);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("lq-1-formula").innerHTML = "* 100    ";
            document.getElementById("lq-2-formula").innerHTML = "* 1000   ";
            document.getElementById("lq-3-formula").innerHTML = "* 32.1951";
            Hide(UNIT)
        } if (UNIT === "CL") {
            document.getElementById("lq-1-text").innerHTML = "CL to L:";
            document.getElementById("lq-2-text").innerHTML = "CL to ML:";
            document.getElementById("lq-3-text").innerHTML = "CL to OZ:";

            document.getElementById("lq-4-text").innerHTML = "CL to L:";
            document.getElementById("lq-5-text").innerHTML = "CL to ML:";
            document.getElementById("lq-6-text").innerHTML = "CL to OZ:";

            document.getElementById("01-lq").innerHTML = (NUM / 100  );
            document.getElementById("02-lq").innerHTML = (NUM * 10   );
            document.getElementById("03-lq").innerHTML = (NUM / 2.841);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("lq-1-formula").innerHTML = "/ 100  ";
            document.getElementById("lq-2-formula").innerHTML = "* 10   ";
            document.getElementById("lq-3-formula").innerHTML = "/ 2.841";
            Hide(UNIT)
        } if (UNIT === "ML") {
            document.getElementById("lq-1-text").innerHTML = "ML to L:";
            document.getElementById("lq-2-text").innerHTML = "ML to CL:";
            document.getElementById("lq-3-text").innerHTML = "ML to OZ:";

            document.getElementById("lq-4-text").innerHTML = "ML to L:";
            document.getElementById("lq-5-text").innerHTML = "ML to CL:";
            document.getElementById("lq-6-text").innerHTML = "ML to OZ:";

            document.getElementById("01-lq").innerHTML = (NUM / 1000  );
            document.getElementById("02-lq").innerHTML = (NUM / 10    );
            document.getElementById("03-lq").innerHTML = (NUM / 28.413);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("lq-1-formula").innerHTML = "/ 1000  ";
            document.getElementById("lq-2-formula").innerHTML = "/ 10    ";
            document.getElementById("lq-3-formula").innerHTML = "/ 28.413";
            Hide(UNIT)
        } if (UNIT === "OZ") {
            document.getElementById("lq-1-text").innerHTML = "OZ to L:";
            document.getElementById("lq-2-text").innerHTML = "OZ to CL:";
            document.getElementById("lq-3-text").innerHTML = "OZ to ML:";

            document.getElementById("lq-4-text").innerHTML = "OZ to L:";
            document.getElementById("lq-5-text").innerHTML = "OZ to CL:";
            document.getElementById("lq-6-text").innerHTML = "OZ to ML:";

            document.getElementById("01-lq").innerHTML = (NUM / 35.195);
            document.getElementById("02-lq").innerHTML = (NUM * 2.841 );
            document.getElementById("03-lq").innerHTML = (NUM * 28.413);
            document.getElementsByClassName('ans-text-NUM').innerHTML = NUM;

            document.getElementById("lq-1-formula").innerHTML = "/ 35.195";
            document.getElementById("lq-2-formula").innerHTML = "* 2.841 ";
            document.getElementById("lq-3-formula").innerHTML = "* 28.413";
            Hide(UNIT)
        };
    };
};

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

        let x = (-1* b)/(2*a);
        document.getElementById("qf-1").innerHTML = x;
        let x2 = x**2;
        console.log("x2 "+ x2);
        let C = (c * -1) * -1;
        console.log("c "+C);
        let A = a * x2;
        console.log("a "+A);
        let B = b * x;
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
        let x = (-1* b)/(2*a);
        document.getElementById("qf-1").innerHTML = x;
        let x2_ = x**2;
        console.log("x2 "+ x2_);
        let C = (c * -1) * -1;
        console.log("c "+C);
        let A = a * x2;;
        console.log("a "+A);
        let B = b * x;
        console.log("b "+B);
        document.getElementById("qf-2").innerHTML = (A+B+C);
    };

    function solve_y(a,b,c,x) {
        let x2_ = x**2;
        let C = (c * -1) * -1;
        let A = a * x2_;
        let B = b * x;
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


    function hide_try() {

    };

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