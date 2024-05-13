var videoUrls = [
    "http://api.yujn.cn/api/zzxjj.php?video=1",
    "http://api.yujn.cn/api/zzxjj.php?video=2",
    "http://api.yujn.cn/api/zzxjj.php?video=3"
  ];
  var currentVideoIndex = 0;
  var videoPlayers = document.getElementsByClassName('videoPlayer'); // 获取所有视频元素

  function togglePlayPause() {
    for (var i = 0; i < videoPlayers.length; i++) {
      var videoPlayer = videoPlayers[i];
      if (videoPlayer.paused) {
        videoPlayer.play();
      } else {
        videoPlayer.pause();
      }
    }
  }

  function playNextVideo() {
    for (var i = 0; i < videoPlayers.length; i++) {
      var videoPlayer = videoPlayers[i];
      if (currentVideoIndex < videoUrls.length - 1) {
        currentVideoIndex++;
        videoPlayer.src = videoUrls[currentVideoIndex];
        videoPlayer.load();
        videoPlayer.play();
        return currentVideoIndex=0;
      }
    }
  }

  // 初始化所有视频
  for (var i = 0; i < videoPlayers.length; i++) {
    videoPlayers[i].src = videoUrls[currentVideoIndex];
    videoPlayers[i].load();
  }