{
  function ready(callbackFunc){
      if (document.readyState !== 'loading') {
          callbackFunc();
      } else {
          document.addEventListener('DOMContentLoaded', callbackFunc);
      }
  }

  ready(function(){
      let video = videojs('test-video', {
          width: 640, // 幅
          height: 360, // 高さ
          autoplay: false, // 自動再生
          loop: false, // ループ再生
          controls: true, // コントロール制御表示
          preload: 'none', // 読み込み制御
          poster: '', // サムネイル表示
      });
      video.src({
          type: 'video/mp4',
          src: 'https://video.twimg.com/ext_tw_video/1250418510473265154/pu/vid/1280x720/7qeM14JHrLvcsbTp.mp4?tag=10'
      });
      video.on(['loadstart', 'loadedmetadata', 'loadeddata', 'play', 'playing', 'pause', 'suspend', 'seeking', 'seeked', 'waiting', 'canplay', 'canplaythrough', 'ratechange', 'ended', 'emptied', 'error', 'abort'], function(e){
      });
      video.on('loadeddata', function(){
      });

      let video2 = videojs('test-video2', {
        width: 640, // 幅
        height: 360, // 高さ
        autoplay: false, // 自動再生
        loop: false, // ループ再生
        controls: true, // コントロール制御表示
        preload: 'none', // 読み込み制御
        poster: 'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e15/11078839_1652766391621170_253951196_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=9YtEskD9l8AAX8_y8MI&oh=ddd324719dbb94d04d2525263752bccf&oe=5F17532E', // サムネイル表示
    });
    video2.src({
        type: 'video/mp4',
        src: 'https://scontent-nrt1-1.cdninstagram.com/v/t50.2886-16/11166162_377345842453097_2146280623_n.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ19wcm9ncmVzc2l2ZV91cmxnZW4ucHJvZHVjdF90eXBlLmZlZWRcIl0ifQ&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Cwa3YopJsTwAX8qnDKi&oe=5F177A0C&oh=d15f3c671da2d116f8b7a03ca3b0ff84'
    });
    video2.on(['loadstart', 'loadedmetadata', 'loadeddata', 'play', 'playing', 'pause', 'suspend', 'seeking', 'seeked', 'waiting', 'canplay', 'canplaythrough', 'ratechange', 'ended', 'emptied', 'error', 'abort'], function(e){
    });
    video2.on('loadeddata', function(){
    });

    let video3 = videojs('test-video3', {
      width: 640, // 幅
      height: 360, // 高さ
      autoplay: false, // 自動再生
      loop: false, // ループ再生
      controls: true, // コントロール制御表示
      preload: 'none', // 読み込み制御
      poster: './contents/kaeru.png', // サムネイル表示
    });
    video3.src({
        type: 'video/mp4',
        src: 'https://scontent-nrt1-1.cdninstagram.com/v/t50.2886-16/11166162_377345842453097_2146280623_n.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ19wcm9ncmVzc2l2ZV91cmxnZW4ucHJvZHVjdF90eXBlLmZlZWRcIl0ifQ&_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Cwa3YopJsTwAX8qnDKi&oe=5F177A0C&oh=d15f3c671da2d116f8b7a03ca3b0ff84'
    });
    video3.on(['loadstart', 'loadedmetadata', 'loadeddata', 'play', 'playing', 'pause', 'suspend', 'seeking', 'seeked', 'waiting', 'canplay', 'canplaythrough', 'ratechange', 'ended', 'emptied', 'error', 'abort'], function(e){
    });
    video3.on('loadeddata', function(){
    });
    });
}