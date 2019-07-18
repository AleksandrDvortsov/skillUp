let countT = 155;
let countB = 155;
let countL = 483;
let countR = 483;

function topClick() {
    let top = setInterval(function() {
        if(document.getElementById('cont').style.paddingTop === '0px'){
            clearTimeout(top);
            return;
        }
       
        countT -= 5;
        countB += 5;
        document.getElementById('cont').style.paddingTop = countT + 'px';
        document.getElementById('cont').style.paddingBottom = countB + 'px';

    },100);
}
function bottomClick() {
    let bottom = setInterval(function() {
        if(document.getElementById('cont').style.paddingBottom === '0px'){
            clearTimeout(bottom);
            return;
        }
       
        countB -= 5;
        countT += 5;
        document.getElementById('cont').style.paddingTop = countT + 'px';
        document.getElementById('cont').style.paddingBottom = countB + 'px';

    },100);
}

function leftClick() {
    let left = setInterval(function() {
        if(document.getElementById('cont').style.paddingLeft === '3px'){
            clearTimeout(left);
            return;
        }
       
        countL -= 5;
        countR += 5;
        document.getElementById('cont').style.paddingLeft = countL + 'px';
        document.getElementById('cont').style.paddingRight = countR + 'px';

    },100);
}

function rightClick() {
    let right = setInterval(function() {
        if(document.getElementById('cont').style.paddingLeft === '1083px'){
            clearTimeout(right);
            return;
        }
       
        countR -= 5;
        countL += 5;
        document.getElementById('cont').style.paddingLeft = countL + 'px';
        document.getElementById('cont').style.paddingRight = countR + 'px';

    },100);
}

