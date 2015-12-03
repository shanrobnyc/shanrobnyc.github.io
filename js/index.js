$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        onLeave: function (index, nextIndex, direction) {
             //reaching our last section? The one with our normal site?
            if (nextIndex == 12) {
                $('#pp-nav').fadeOut();
                $('#arrow').fadeOut();

            }
 
            //leaving our last section? The one with our normal site?
            if (index == 12) {
                $('#pp-nav').fadeIn();
                $('#arrow').fadeIn();

            }
        },
    });
});