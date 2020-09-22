document.getElementById('name').focus()

function doKeyUp(e, current, next) {
    if (window.event) e = window.event;
    
    if(e.keyCode == 13) {
        document.getElementById(next).focus();
    }
}