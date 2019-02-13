$(function() {
    $(":input").keyup(function() {
        $("div").html($(":input").val());
    });
});
