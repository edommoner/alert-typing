$(function() {
    let effect = $("#alert-text-wrap").attr("data-effect");
    let flame = $("#alert-text-wrap").attr("data-flame");

    let glitch1_flag = false;
    let glitch2_flag = false;

    let flame1_flag = false;
    let flame2_flag = false;

    switch (effect) {
        case "glitch":
            glitch1_flag = true;
            break;
        case "glitch2":
            glitch2_flag = true;
            break;
        default:
            break;
    }

    switch (flame) {
        case "flame":
            flame1_flag = true;
            break;
        default:
            break;
    }

    if (flame1_flag)
        flame();

    alert_typing();
});