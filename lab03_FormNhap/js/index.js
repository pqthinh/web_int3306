document.getElementById('name').focus()

document.getElementById('name').onkeyup = function(e) {
    doKeyUp(e, this, "place")
}
document.getElementById("place").onkeyup = function(e) {
    doKeyUp(e, this, "birth")
}
document.getElementById("birth").onkeyup = function(e) {
    doKeyUp(e, this, "email")
}
document.getElementById("email").onkeyup = function(e) {
    doKeyUp(e, this, "phone")
}
document.getElementById('phone').onkeyup = function(e) {
    doKeyUp(e, this, "username")
}
document.getElementById('username').onkeyup = function(e) {
    doKeyUp(e, this, "pass")
}
document.getElementById('pass').onkeyup = function(e) {
    doKeyUp(e, this, "repass")
}
document.getElementById('repass').onkeyup = function(e) {
    doKeyUp(e, this, "note")
}
function doKeyUp(e, current, next) {
    console.log(e)
    if (window.event) e = window.event;

    if(e.keyCode == 13) {
        document.getElementById(next).focus();
    }
}




// function submit() {
//     //return
// }
// function quit() {
//     //return
// }