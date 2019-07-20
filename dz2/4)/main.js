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




function XXX () {
   
    this.init = function() {
        this.btn = document.getElementById('btnR');
        this.btn.onclick = this.redraw;
    }
    // console.log(this.btn);
    this.right = function() {
        this.redraw;
        // this.redraw(document.getElementById('cont').style.paddingLeft, '1083px',countR,countL,document.getElementById('cont').style.paddingLeft,document.getElementById('cont').style.paddingRight = countR);
    }
    this.redraw = function(if1, if2, count1, count2, el1, el2) {
        alert('33')
        let xz = setInterval(function() {
            console.log(this);
            if(if1 === if2){
                clearTimeout(xz);
                return;
            }
            count1 -= 5;
            count2 += 5;
            el1 = countL + 'px';
            el2 = countR + 'px';
        }.bind(this),100)
    }
    
    this.init();
}

let x = new XXX();