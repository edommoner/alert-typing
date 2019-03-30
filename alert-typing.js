$(function() {

    let variable_order_array = [];
    $.each($("#alert-message > span"), function(index, elm) {

        let token = $(elm).attr("data-token");
        let tmp_ary = [];
        let style = $(elm).attr("style");

        $.each($(elm).find(".animated-letter"), function(i, anime_elm) {
            tmp_ary.push($('<div>').append($(anime_elm).attr("style", style)).html());
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
            message_ary = message_ary.concat(val.split(""));
        }
    });

    $("#alert-message").empty();
    typing(message_ary);
});


async function typing(message_ary = []) {
    let count = 0;
    const delay = 100 //1文字が表示される時間
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
}

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