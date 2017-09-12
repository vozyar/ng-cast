angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  
  //url: "https://www.youtube.com/embed/" + this.video.id.videoId,
  // TODO
  templateUrl: 'src/templates/videoListEntry.html'
});
