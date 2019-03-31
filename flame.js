$(function() {

    $("#alert-text-wrap")
        .append($("<div id='decoration-wrap'/>")
            .append(
                $("<div id='decoration-box'/>")
                .append($("<div id='decoration-text-bak'/>"))
                .append($("<div id='decoration-text-area'/>"))
            )
            .append(
                $("<div id='decoration-ring-wrap'/>")
                .append($("<div id='decoration-ring1' class='decoration-ring'/>"))
                .append($("<div id='decoration-ring2' class='decoration-ring'/>"))
                .append($("<div id='decoration-ring3' class='decoration-ring2'/>"))
                .append($("<div id='decoration-ring4' class='decoration-ring2'/>"))
            )
        );

    $("#alert-message").css({ "font-size": "", "font-weight": "" });
    $("#alert-user-message").css({ "font-size": "", "font-weight": "" });
});