function player(){
    var VideoMp4Url = document.getElementById("VideoSourceMp4").value;
    document.write("<script>document.write(/"<head><title>JLCVideo - Player</title><link href='https://vjs.zencdn.net/6.2.5/video-js.css' rel='stylesheet'><script src='https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js'></script></head><body><video id='video' class='video-js' controls preload='auto' width='1000' height='680' poster='' data-setup='{}'><source src='"+VideoSourceMp4+"' type='application/x-mpegURL'><p class='vjs-no-js'>請啟用Javascript以播放影片或<a href='https://www.google.com.tw/chrome' target='_blank'>下載最新版瀏覽器</a></p></video><script src='https://vjs.zencdn.net/6.2.5/video.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.10.1/videojs-contrib-hls.min.js'></script><script src='https://unpkg.com/videojs-flash/dist/videojs-flash.js'></script><script src='https://yanwsh.github.io/videojs-panorama/dist/videojs-panorama.v5.min.js'></script></body>/")</script>")
		   }
