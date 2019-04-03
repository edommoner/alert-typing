(function($) {
    $.fn.boot = function(tag_name = "latest") {
        $("#wrap").css("display", "none");
        url_common = "https://cdn.jsdelivr.net/gh/edommoner/alert-typing@";
        url_ver = tag_name;
        // url_ver = "lated/";
        url_head = url_common + url_ver + "/";

        load_files = [];
        if (typeof $.fn.alert_typing === 'undefined') {
            load_files.push(url_head + "alert-typing.min.css");
            load_files.push(url_head + "alert-typing.min.js");
        }

        if (typeof $.fn.make_flame_tags === 'undefined') {
            load_files.push(url_head + "flame.min.css");
            load_files.push(url_head + "flame.min.js");
        }

        if (typeof $.fn.mgGlitch === 'undefined') {
            load_files.push(url_head + "mgGlitch.min.js");
        }

        injectFile(load_files);
        start();

        async function start() {


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

            let count_timer = 0;
            while (count_timer < 20) {

                if (flame1_flag) {
                    if (typeof $.fn.make_flame_tags === 'function' && typeof $.fn.alert_typing === 'function') {
                        break;
                    }
                } else {
                    if (typeof $.fn.alert_typing === 'function') {
                        break;
                    }
                }
                count_timer++;
                await sleep(200);
            }


            $("#wrap").css("display", "");


            if (flame1_flag) {
                $().make_flame_tags();

                $("#_decoration-wrap").attr("id", "").attr("id", "decoration-wrap").removeClass("_decoration-wrap").addClass("decoration-wrap");
                $("#_decoration-box").attr("id", "").attr("id", "decoration-box");
                $("#_decoration-text-bak").attr("id", "").attr("id", "decoration-text-bak");
                $("#_decoration-text-area").attr("id", "").attr("id", "decoration-text-area");

                $("._decoration-ring-partial").removeClass("decoration-ring-partial").addClass("decoration-ring-partial");

                $("#_decoration-ring-wrap").attr("id", "").attr("id", "decoration-ring-wrap");
                $("#_decoration-ring1").attr("id", "").attr("id", "decoration-ring1").removeClass("_decoration-ring").addClass("decoration-ring");
                $("#_decoration-ring3").attr("id", "").attr("id", "decoration-ring3").removeClass("_decoration-ring2").addClass("decoration-ring2");
            }


            $().alert_typing();
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
    };
})(jQuery);