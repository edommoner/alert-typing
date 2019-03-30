$(function() {

    const name_color = $("#alert-message span[data-token=name]").css("color");
    const amount_color = $("#alert-message span[data-token=amount]").css("color");
    const animation_class = "wiggle";

    let name_span = $("#alert-message span[data-token=name]");
    let amount_span = $("#alert-message span[data-token=amount]");
    let template = getSurfaceText($("#alert-message"));

    $("#alert-message .animated-letter").css({ "color": name_color });

    message_ary = [];
    $.each(name_span.find(".animated-letter"), function(indexInArray, valueOfElement) {
        message_ary.push($('<div>').append(valueOfElement).html());
    });

    message_ary = message_ary.concat(template.split(""));

    $.each(amount_span.find(".animated-letter"), function(indexInArray, valueOfElement) {
        message_ary.push($('<div>').append(valueOfElement).html());
    });

    $("#alert-message").empty();
    $("#alert-message").attr("data-count", 0);
    $("#alert-message").attr("timer-name", 0);
    typing(message_ary);
});


async function typing(message_ary = []) {
    let count = 0;
    const delay = 100 //1文字が表示される時間
    while (true) {
        let type_border = "border-right: 0.1em solid black; padding-right: 0.3em";


        let buf = "";
        for (let index = 0; index < count; index++) {
            buf += message_ary[index];

        }

        if (count < message_ary.length) {
            let tmp = "<span class='cursor' style='" + type_border + "'>" + message_ary[count] + "</span>";
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