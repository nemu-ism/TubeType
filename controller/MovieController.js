// IFrame Player API コード を読み込む
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

videoId = 'dBdEb4XVLqs'

// IFrame Player API コードが読み込まれると onYouTubeIframeAPIReady関数が実行される
var player;
function onYouTubeIframeAPIReady() {
    // 動画プレーヤーを挿入する YT.Player オブジェクトを作成する
    player = new YT.Player( 'player', {
        width: '760', //960
        height: '540', //540
        videoId: videoId, // YouTube動画ID
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function ply() {
    player.destroy();
    player = new YT.Player( 'player', {
        width: '760', //960
        height: '540', //540
        videoId: 'EKUBLenVvH4', // YouTube動画ID
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.PLAYING && !done){
        event.target.loadVideoById(videoId);
    }
}