angular.module('video-player')

.component('app', {
  
  controller: function() {
    this.selectVideo = function() {};

    this.searchResults = () => {};
 
    this.currentVideo = window.exampleVideoData[0];
   
    this.videos = window.exampleVideoData;

  },
  
  // TODO
  templateUrl: 'src/templates/app.html'
});
