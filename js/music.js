const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [
	    
		{
            name: "春泥",
            artist: "旺仔小乔",
            url: "http://www.wall-e.cn/103/view.php/3da7218ac1f578cf75a68c89e83980e8.mp3&raw=true",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
			lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#171513"
        },
		
		
		{
            name: "夜夜夜漫长",
            artist: "好多倩",
            url: "http://www.wall-e.cn/103/view.php/cfe44d2d7e2591a3f48145d028cab76d.mp3&raw=true",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
			lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#171513"
        },
		
		
		
		
		
		{
            name: "如愿",
            artist: "王菲",
            url: "http://www.wall-e.cn/data/view.php/75c62c42ba51a7b441b99ca5e2443497.mp3&raw=true",
            cover: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000",
			lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#171513"
        },
		{
            name: "漠河舞厅",
            artist: "陈一发儿",
            url: "http://www.wall-e.cn/data/view.php/7ca091e22b8d79001c19cb2abffee521.mp3&raw=true",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#0057a7"
        },
        {
            name: "晚风作酒",
            artist: "未知",
            url: "http://www.wall-e.cn/data/view.php/69fda1dd184141b9b43387f73b915637.mp3&raw=true",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#0057a7"
        },
		{
            name: "DANCE MONKEY",
            artist: "未知",
            url: "http://www.wall-e.cn/data/view.php/540788ce1db3340f897de396c0e4d6ba.mp3&raw=true",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#0057a7"
        },
		{
            name: "每段路",
            artist: "吕方",
            url: "http://music.163.com/song/media/outer/url?id=1320340708.mp3&raw=true",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#0057a7"
        },
		{
            name: "都是你的错",
            artist: "郑中基 / 陈慧琳",
            url: "http://music.163.com/song/media/outer/url?id=191469.mp3&raw=true",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#0057a7"
        },
		{
            name: "盗将行",
            artist: "花粥",
            url: "http://music.163.com/song/media/outer/url?id=574566207.mp3&raw=true",
            cover: "https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU_1.jpg?max_age=2592000",
            lrc: "https://s-sh-2127-music.oss.dogecdn.com/lrc%2F%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.lrc",
            theme: "#0057a7"
        },
       
    ]
});

/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});