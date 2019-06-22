

function topClick() {
    document.getElementById('cont').style.alignItems  = "flex-start";
}
function bottomClick() {
    document.getElementById('cont').style.alignItems  = "flex-end";
}
function leftClick() {
    document.getElementById('cont').style.justifyContent   = "flex-start";
}
function rightClick() {
    document.getElementById('cont').style.justifyContent  = "flex-end";
}
function centrClick() {
    document.getElementById('cont').style.alignItems  = "center";
    document.getElementById('cont').style.justifyContent  = "center";
}
