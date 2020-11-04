$(document).ready(function() {
    //ripples
    $("#header,.info").ripples({
        dropRadius: 20,
        perturbance: 0.06

    });

    //magnific popup

    $(".parent-container").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });



    /* $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change');

    })
*/
    //window scroll


    //smooth scroll




});