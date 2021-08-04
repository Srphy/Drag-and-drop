function reportWindowSize() {
    resize();
}

window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);

function readURL(event) {

    var getImagePath = URL.createObjectURL(event.target.files[0]);
    document.getElementById('fond').src = getImagePath;
    resize();
    cross();
    clear();
}

function clearimg() {
    $('#fond').removeAttr('src');
    $('#backfond').css('visibility', 'visible');
    $('.clear').css('visibility', 'hidden');
}

function resize() {
    setTimeout(function() {

        var height = document.getElementById('fond').offsetHeight;
        var width = document.getElementById('fond').offsetWidth;

        $('#container').css('height', height);
        $('#container').css('width', width);
        $('#container').css('max-height', '90%');
        $('#container').css('max-width', '90%');

    }, 10);
}

function clear() {
    if (document.getElementById('fond').src == "") {
        $('#backfond').css('visibility', 'visible');
    } else {
        $('#backfond').css('visibility', 'hidden');
    }
}

function cross() {
    setTimeout(function() {

        if (document.getElementById('fond').src == "") {
            $('.clear').css('visibility', 'hidden');
            console.log("null");
        } else {
            $('.clear').css('visibility', 'visible');
        }
    }, 10);
}