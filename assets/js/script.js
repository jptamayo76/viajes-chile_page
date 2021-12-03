$(function () {

    $('[data-bs-toggle="popover"]').popover();

    $('[data-bs-toggle="tooltip"]').tooltip();

    $("a").click(function () {
        var gato = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 65
            },
            1000
        )
    });

});