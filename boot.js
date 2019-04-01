$(function() {
    url_common = "//cdn.jsdelivr.net/gh/edommoner/alert-typing@";
    url_ver = "0.3.7.6/";
    // url_ver = "lated/";
    url_head = url_common + url_ver;

    loadCss(url_head + "flame.min.css", dummy());
    loadCss(url_head + "alert-typing.min.css", dummy());
    loadScript(url_head + "mgGlitch.min.js", dummy());
    loadScript(url_head + "flame.min.js", dummy());
    loadScript(url_head + "alert-typing.min.js", dummy());

});

$(window).on("load", function() {
    start();
});

function dummy() {

}

function start() {

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
}

function loadScript(src, callback) {
    var done = false;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
    // Attach handlers for all browsers
    // script.onload = script.onreadystatechange = function() {
    //     if (!done && (!this.readyState ||
    //             this.readyState === "loaded" || this.readyState === "complete")) {
    //         done = true;
    //         callback();
    //         // Handle memory leak in IE
    //         script.onload = script.onreadystatechange = null;
    //         if (head && script.parentNode) {
    //             head.removeChild(script);
    //         }
    //     }
    // };
}

function loadCss(src, callback) {
    var done = false;
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    head.appendChild(link);
    link.href = src;
    // Attach handlers for all browsers
    // link.onload = link.onreadystatechange = function() {
    //     if (!done && (!this.readyState ||
    //             this.readyState === "loaded" || this.readyState === "complete")) {
    //         done = true;
    //         callback();
    //         // Handle memory leak in IE
    //         link.onload = link.onreadystatechange = null;
    //         if (head && link.parentNode) {
    //             head.removeChild(link);
    //         }
    //     }
    // };
}