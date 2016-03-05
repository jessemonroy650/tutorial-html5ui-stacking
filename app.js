var gWaittime  = 100;
var gTimeouttime = 5000;
//
function onButtonClick() {
    console.log("Button clicked.");
    document.getElementById('stack1').style.zIndex = -1;
}

function onButton2() {
    console.log("Button clicked.");
    document.getElementById('stack2').style.zIndex = 2;
    document.getElementById('stack3').style.zIndex = 3;
}

// add Event listener to [Do It] button
document.getElementById('doit').addEventListener('click', function() {
    onButtonClick();
});

document.getElementById('do2').addEventListener('click', function() {
    onButton2();
});
