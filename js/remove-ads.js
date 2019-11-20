((window, jQuery) => {
    const w = window;
    const $ = jQuery;
    const it = w.it || {};
    it.ui = it.ui || {};

    const ui = {
        init: () => {
            // var url_string = window.location.href;
            // var url = new URL(url_string);
            // switch (url.origin) {
            //     case "https://www.youtube.com":
            //         ui.youtubeRemoveAds();
            //         break;
            //     case "https://ngoac.net":
            //             ui.youtubeRemoveAds();
            //         ui.ngoacNetRemoveAds();
            //         ui.ngoacNetClickViewRemoveAds();
            //         break;
            //     default:
            //         break;
            // }
            ui.youtubeRemoveAds();
            ui.ngoacNetRemoveAds();
            ui.ngoacNetClickViewRemoveAds();
        },
        ngoacNetRemoveAds: () => {
            let dropDowns = Array.from(document.querySelectorAll('.center-banners > div'));
            dropDowns.forEach(node => {
                node.remove();
            });
            $(".left-banners").remove();
            $(".right-banners").remove();
            $(".box_detail_banner").remove();
            $("h1.livestream").remove();
            $(".breadcrumb").remove();
            $(".center-banners").remove();
            $(".box_detail_video_right").remove();
            $(".box_detail_video").addClass("hidechat");
            $(".box_detail_video_leftMenu").addClass("d-none");
            $(".box_detail_header").addClass("d-none");

            setInterval(() => {
                $(".show-ads-banner").remove();
                $(".divdatcuoc").remove();
                $(".popup-ads-banner").remove();
                $(".adBot").addClass("d-none");
                $(".adAboveBottom").addClass("d-none");
                $(".adTop").addClass("d-none");
            }, 1000);
        },
        ngoacNetClickViewRemoveAds: () => {
            $(".redirectA").click((e) => {
                e.preventDefault();
                var link = $(e.currentTarget).data("href");
                location.href = link;
            });
        },
        youtubeRemoveAds: () => {
            // var video = 'https://www.youtube-nocookie.com/v/' + $('.hide-skeleton').attr('video-id');
            setInterval(() => {
                $(".ytp-ad-skip-button-container").click();
                $(".ytp-ad-skip-button-container").trigger("click");
                $(".ytp-ad-overlay-slot").click();
                return false;
            }, 1000);
        }
    };


    if (!w
        || !$
        // || !it.service
        || it.ui.remove_ads) {
        return;
    }

    it.ui.remove_ads = ui;
    w.it = it;
    w.addEventListener("load", function () {
        it.ui.remove_ads.init();
    }, false);
})(window, $);