$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        onLeave: function (index, nextIndex, direction) {
             //reaching our last section? The one with our normal site?
            if (nextIndex == 13) {
                $('#pp-nav').fadeOut();
                $('#arrow').fadeOut();

            }
 
            //leaving our last section? The one with our normal site?
            if (index == 13) {
                $('#pp-nav').fadeIn();
                $('#arrow').fadeIn();

            }
        },
    });
});