$(function () {
    $('[data-toggle="offcanvas"]').on("click", function () {
        $(".offcanvas-collapse").toggleClass("open");
    });
});

$("#doWithData").on("show.bs.modal", function (event) {
    var recipient = $(event.relatedTarget).data("whatever");
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).

    var modal = $(this);
    modal.find(".modal-body input").val(recipient);
});
