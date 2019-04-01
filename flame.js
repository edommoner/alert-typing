make_flame_tags = function() {

    $("#alert-text-wrap")
        .append($("<div id='_decoration-wrap' class='decoration-wrap'/>")
            .append(
                $("<div id='_decoration-box'/>")
                .append($("<div id='_decoration-text-bak'/>"))
            )
            .append($("<div class='_decoration-ring-partial'/>")

            )
            .append(
                $("<div id='_decoration-ring-wrap'/>")
                .append($("<div id='_decoration-ring1' class='_decoration-ring'/>"))
                .append($("<div id='_decoration-ring3' class='_decoration-ring2'/>"))
            )

        )
        .append($("<div id='_decoration-text-area'/>"));

    $("#alert-text").css({ "padding": "0", "margin": "0" });
    $("#alert-message").css({ "font-size": "", "font-weight": "" });
    $("#alert-user-message").css({ "font-size": "", "font-weight": "" });
    $("#_decoration-text-area").append($("#alert-text"));

};