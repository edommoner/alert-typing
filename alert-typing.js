$(function() {
    let effect = $("#alert-text-wrap").attr("data-effect");

    let glitch_flag = false;
    let glitch_flag2 = false;

    switch (effect) {
        case "glitch":
            glitch_flag = true;
            break;
        case "glitch2":
            glitch_flag2 = true;
            break;
        default:
            break;
    }

    let variable_order_array = [];
    $.each($("#alert-message > span"), function(index, elm) {

        let token = $(elm).attr("data-token");
        let tmp_ary = [];
        let style = $(elm).attr("style");

        $.each($(elm).find(".animated-letter"), function(i, anime_elm) {
            if (glitch_flag) {
                tmp_ary.push($('<div>').append($(anime_elm).addClass("glitch").attr("data-text", $(anime_elm).text())).html());
            } else {
                tmp_ary.push($('<div>').append($(anime_elm).attr("style", style)).html());
            }
        });
        variable_order_array[token] = tmp_ary;
        $("#alert-message > span[data-token=" + token + "]").empty().append("@@##" + token + "##@@");
    });

    let message_text = $("#alert-message").text();
    let message_text_ary = message_text.split('@@');

    message_ary = [];

    $.each(message_text_ary, function(index, val) {
        if (val.match(/##.*##/)) {
            let token = val.replace(/#/g, "");
            message_ary = message_ary.concat(variable_order_array[token]);

        } else {
            if (glitch_flag) {
                $.each(val.split(""), function(i, char) {
                    message_ary.push("<span class='glitch' data-text='" + char + "'>" + char + "</span>");
                });
            } else {
                message_ary = message_ary.concat(val.split(""));
            }

        }
    });
    typing(message_ary);
});


async function typing(message_ary = []) {
    let count = 0;
    let delay = 100 //1文字が表示される時間
    let duration = $("#alert-text-wrap").attr("data-duration");
    console.log(duration);
    let data_text = "";
    if (typeof duration !== "undefined" && duration.match(/^\d*$/))
        delay = duration;

    while (true) {

        let buf = "";
        for (let index = 0; index < count; index++) {
            buf += message_ary[index];

        }

        if (count < message_ary.length) {
            let tmp = "<span class='cursor'>" + message_ary[count] + "</span>";
            $("#alert-message").html(buf + tmp); //1文字だけ追加していく
            count++;
        } else {
            $("#alert-message").html(buf); //1文字だけ追加していく
            break;
        }
        await sleep(delay);
    }

    if (glitch_flag2)
        glitch2();

}

function glitch2() {
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

    $(".decoration-wrap").mgGlitch({
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
};

function sleep(time) {
    return new Promise(function(resolve, reject) {
        window.setTimeout(resolve, time);
    });
}

function getSurfaceText(selector) {
    var elem = $(selector[0].outerHTML);
    elem.children().empty();
    return elem.text();
}