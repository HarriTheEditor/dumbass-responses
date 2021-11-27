alert("This game is in-complete. Please do not expect it to work half the time.");

function Colour(v, id) {
    if(v === true) {
        document.getElementById(id).style.color = "rgb(200, 200, 200)";
        document.body.style.cursor = "pointer";
    }else {
        document.getElementById(id).style.color = "rgb(255, 255, 255)";
        document.body.style.cursor = "default";
    }
}

function Redirect(des) {
    window.location = des
}
