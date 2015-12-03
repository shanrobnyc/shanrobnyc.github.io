$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        onLeave: function (index, nextIndex, direction) {
             //reaching our last section? The one with our normal site?
            if (nextIndex == 11) {
                $('#pp-nav').fadeOut();
                $('#arrow').fadeOut();

            }
 
            //leaving our last section? The one with our normal site?
            if (index == 11) {
                $('#pp-nav').fadeIn();
                $('#arrow').fadeIn();

            }
        },
    });
});