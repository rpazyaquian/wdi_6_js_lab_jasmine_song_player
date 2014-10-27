// Player prototype needs to be defined here!

function Player() {

  this.play = function(song) {
    this.isPlaying = true;
    this.currentSong = song;
  }

  this.pause = function() {
    this.isPlaying = false;
  }

  this.resume = function() {
    this.isPlaying = true;
  }

}