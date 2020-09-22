document.getElementById('name').focus()
document.getElementById('name').onkeyup = 
function doKeyUp(e, current, next) {
    if (window.event) e = window.event;

    if(e.keyCode == 13) {
        document.getElementById(next).focus();
    }
}