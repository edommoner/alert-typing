$(function() {

    $("#wrap").css("display", "none");
    $.ajax({
        type: "get",
        url: "https://api.github.com/repos/edommoner/alert-typing/releases",
        data: "data",
        dataType: "json",
        success: function(res) {
            // console.log(res);

            url_common = "https://cdn.jsdelivr.net/gh/edommoner/alert-typing@";
            url_ver = res[0].tag_name;
            // url_ver = "lated/";
            url_head = url_common + url_ver + "/";

            load_files = [];
            load_files.push(url_head + "boot.min.js");

            injectFile(load_files);
            run();
        }
    });

});

async function run() {

    let count_timer = 0;
    while (count_timer < 10) {

        if (typeof $.fn.boot === 'function') {
            break;
        }
        count_timer++;
        await sleep(200);
    }
    $().boot();
}

function injectFile(loadFiles) {
    var tags = document.createDocumentFragment();
    for (var i = 0; i < loadFiles.length; i++) {
        if (loadFiles[i].match(/\.css$/)) {
            var read_flag = true;
            $.each($("link"), function(indexInArray, valueOfElement) {
                if ($(this).attr("href") == loadFiles[i])
                    read_flag = false;
            });

            if (read_flag) {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = loadFiles[i];
                tags.appendChild(link);
            }
        } else if (loadFiles[i].match(/\.js$/)) {
            var read_flag = true;
            $.each($("script"), function(indexInArray, valueOfElement) {
                if ($(this).attr("src") == loadFiles[i])
                    read_flag = false;
            });
            if (read_flag) {
                var script = document.createElement('script');
                script.src = loadFiles[i];
                tags.appendChild(script);
            }
        }
        document.getElementsByTagName('head')[0].appendChild(tags);
    }
}



function sleep(time) {
    return new Promise(function(resolve, reject) {
        window.setTimeout(resolve, time);
    });
}