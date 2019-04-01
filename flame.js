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

    $("#decoration-wrap").mgGlitch({
        // set 'true' to stop the plugin
        destroy: false,
        // set 'false' to stop glitching
        glitch: true,
        // set 'false' to stop scaling
        scale: false,
        // set 'false' to stop glitch blending
        blend: true,
        // select blend mode type
        blendModeType: 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin: 200,
        // set max time for glitch 1 elem
        glitch1TimeMax: 400,
        // set min time for glitch 2 elem
        glitch2TimeMin: 100,
        // set max time for glitch 2 elem
        glitch2TimeMax: 200,
        glitch1Range: 16,
        glitch2Range: 16,
    });

});