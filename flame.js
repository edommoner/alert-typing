$(function() {

    $("#alert-text-wrap")
        .append($("<div id='decoration-wrap' class='decoration-wrap'/>")
            .append(
                $("<div id='decoration-box'/>")
                .append($("<div id='decoration-text-bak'/>"))
                .append($("<div id='decoration-text-area'/>"))
            )
            .append($("<div class='decoration-ring-partial'/>")

            )
            .append(
                $("<div id='decoration-ring-wrap'/>")
                .append($("<div id='decoration-ring1' class='decoration-ring'/>"))
                .append($("<div id='decoration-ring3' class='decoration-ring2'/>"))
            )
        );

    $("#alert-text").css({ "padding": "0", "margin": "0" });
    $("#alert-message").css({ "font-size": "", "font-weight": "" });
    $("#alert-user-message").css({ "font-size": "", "font-weight": "" });
    $("#decoration-text-area").append($("#alert-text"));
});