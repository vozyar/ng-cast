angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<',
    onClick: '<'
  },
  // TODO
  controller: function() {
 
    this.onClick = () => {};
    

  },
  
  templateUrl: 'src/templates/videoList.html'
});
