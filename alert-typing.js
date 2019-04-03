(function($) {
    $.fn.alert_typing = function() {

        let effect = $("#alert-text-wrap").attr("data-effect");
        let data_flame = $("#alert-text-wrap").attr("data-flame");

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
        let flame1_flag = false;
        let flame2_flag = false;

        switch (data_flame) {
            case "flame1":
                flame1_flag = true;
                break;
            default:
                break;
        }

        if (!flame1_flag)
            $("#alert-text-wrap").append($("#alert-text").clone().addClass("clone-alert-text").attr("id", "").css("display", ""));

        let variable_order_array = [];
        $.each($(".clone-alert-text #alert-message > span"), function(index, elm) {

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
            $(".clone-alert-text #alert-message > span[data-token=" + token + "]").empty().append("@@##" + token + "##@@");
        });

        let message_text = $(".clone-alert-text #alert-message").text();
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
        typing(message_ary, glitch_flag2, flame1_flag);
    };


    async function typing(message_ary = [], glitch_flag2 = false, flame1_flag = false) {
        let count = 0;
        let delay = 100 //1文字が表示される時間
        let duration = $("#alert-text-wrap").attr("data-duration");
        // console.log(duration);
        let data_text = "";
        if (typeof duration !== "undefined" && duration.match(/^\d*$/))
            delay = duration;
        $(".clone-alert-text #alert-message").empty();

        await sleep(1000);
        while (true) {

            let buf = "";
            for (let index = 0; index < count; index++) {
                buf += message_ary[index];

            }

            if (count < message_ary.length) {
                let tmp = "<span class='cursor'>" + message_ary[count] + "</span>";
                $(".clone-alert-text #alert-message").html(buf + tmp); //1文字だけ追加していく
                count++;
            } else {
                $(".clone-alert-text #alert-message").html(buf); //1文字だけ追加していく
                break;
            }
            await sleep(delay);
        }

        if (glitch_flag2)
            glitch2(flame1_flag);

    }

    function glitch2(flame1_flag) {
        $("#decoration-wrap").mgGlitch({
            destroy: false,
            glitch: true,
            scale: false,
            blend: true,
            blendModeType: 'hue',
            glitch1TimeMin: 200,
            glitch1TimeMax: 400,
            glitch2TimeMin: 100,
            glitch2TimeMax: 200,
            glitch1Range: 16,
            glitch2Range: 16,
        });
        $("#decoration-text-area").mgGlitch({
            destroy: false,
            glitch: true,
            scale: false,
            blend: true,
            blendModeType: 'hue',
            glitch1TimeMin: 200,
            glitch1TimeMax: 400,
            glitch2TimeMin: 100,
            glitch2TimeMax: 200,
            glitch1Range: 16,
            glitch2Range: 16,
            basePos: true,
            zIndexStart: 8
        });

        if (!flame1_flag) {
            $(".clone-alert-text").mgGlitch({
                destroy: false,
                glitch: true,
                scale: false,
                blend: true,
                blendModeType: 'hue',
                glitch1TimeMin: 200,
                glitch1TimeMax: 400,
                glitch2TimeMin: 100,
                glitch2TimeMax: 200,
                glitch1Range: 16,
                glitch2Range: 16,
                basePos: true,
                zIndexStart: 8
            });
        }
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


})(jQuery);