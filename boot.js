$(function() {
    let data_effect = $("#alert-text-wrap").attr("data-effect");
    let data_flame = $("#alert-text-wrap").attr("data-flame");

    let glitch1_flag = false;
    let glitch2_flag = false;

    let flame1_flag = false;
    let flame2_flag = false;

    switch (data_effect) {
        case "glitch":
            glitch1_flag = true;
            break;
        case "glitch2":
            glitch2_flag = true;
            break;
        default:
            break;
    }

    switch (data_flame) {
        case "flame1":
            flame1_flag = true;
            break;
        default:
            break;
    }

    if (flame1_flag)
        $().make_flame_tags();

    $("#_decoration-wrap").attr("id", "").attr("id", "decoration-wrap").removeClass("_decoration-wrap").addClass("decoration-wrap");
    $("#_decoration-box").attr("id", "").attr("id", "decoration-box");
    $("#_decoration-text-bak").attr("id", "").attr("id", "decoration-text-bak");
    $("#_decoration-text-area").attr("id", "").attr("id", "decoration-text-area");

    $("._decoration-ring-partial").removeClass("decoration-ring-partial").addClass("decoration-ring-partial");

    $("#_decoration-ring-wrap").attr("id", "").attr("id", "decoration-ring-wrap");
    $("#_decoration-ring1").attr("id", "").attr("id", "decoration-ring1").removeClass("_decoration-ring").addClass("decoration-ring");
    $("#_decoration-ring3").attr("id", "").attr("id", "decoration-ring3").removeClass("_decoration-ring2").addClass("decoration-ring2");


    $().alert_typing();
});