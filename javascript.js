let partPlayed = [false, false, false, false, false, false, false, false, false];
let partBeggining = [116, ];
let choiceTexts = [["Běžet doleva", "Běžet rovně"],["Nebavit se", "Pokecat"],["Odbýt otrapu", "Být slušný"], ["Dát kalhoty", "Nechat kalhoty"], ["Doručit","Otevřít balík"]];

let leftChoice = 0;
let rightChoice = 0;

let goBackTime = 0;
let stoppers = [false, false, false, false, false];

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '720',
    width: '1280',
    videoId: 'Cy7QOceNLsA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: { 
      'autoplay': 0,
      'controls': 0, 
      'rel' : 0,
      'fs' : 0,
  }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  choicesMenu = document.getElementById('choicesMenu');
  choice1 = document.getElementById('choice1');
  choice2 = document.getElementById('choice2');
  choicesMenu.style.display = "none";
  choice1.addEventListener('click', skipToPart1, false);
  choice2.addEventListener('click', skipToPart2, false);


  goBack = document.getElementById('goBack');
  goBackButton = document.getElementById('goBackButton');
  goBack.style.display = "none";
  goBackButton.addEventListener('click', jumpBack, false);

  
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  setInterval(showMenu, 200);
}
function stopVideo() {
  player.pauseVideo();
  player.seekTo(110);
}

function skipToPart1(){
  player.seekTo(leftChoice);
  player.playVideo();
  choicesMenu.style.display = "none";
}

function skipToPart2(){
  player.seekTo(rightChoice);
  player.playVideo();
  choicesMenu.style.display = "none";
}

function jumpBack(){
  player.seekTo(goBackTime);
  goBack.style.display = "none";
  player.playVideo();
}

function showMenu(){
  player.setSize(window.innerWidth, window.innerHeight);
  if (player.getCurrentTime() >= 116 && player.getCurrentTime() <= 117 && !stoppers[0]) {
    player.pauseVideo();
    choice1.innerHTML = choiceTexts[0][0];
    choice2.innerHTML = choiceTexts[0][1];
    choicesMenu.style.display = "block";
    stoppers[0] = true;
    leftChoice = 116;
    rightChoice = 184;
  }
  if (player.getCurrentTime() > 183 && player.getCurrentTime() < 184) {
    player.pauseVideo();
    goBack.style.display = "block";
    goBackTime = 110;
    stoppers[0] = false;
  }
  if (player.getCurrentTime() >= 194.2 && player.getCurrentTime() <= 195 && !stoppers[1]) {
    player.pauseVideo();
    choice1.innerHTML = choiceTexts[1][0];
    choice2.innerHTML = choiceTexts[1][1];
    choicesMenu.style.display = "block";
    stoppers[1] = true;
    leftChoice = 213.8;
    rightChoice = player.getCurrentTime();
  }
  if (player.getCurrentTime() >= 213 && player.getCurrentTime() < 213.7) {
    player.seekTo(230.5);
  }
  if (player.getCurrentTime() >= 303.3 && player.getCurrentTime() <= 304 && !stoppers[2]) {
    player.pauseVideo();
    choice1.innerHTML = choiceTexts[2][0];
    choice2.innerHTML = choiceTexts[2][1];
    choicesMenu.style.display = "block";
    stoppers[2] = true;
    leftChoice = player.getCurrentTime();
    rightChoice = 325.5;
  }
  if (player.getCurrentTime() > 324.9 && player.getCurrentTime() < 325.2) {
    player.pauseVideo();
    goBack.style.display = "block";
    goBackTime = 303;
    stoppers[2] = false;
  }
  if (player.getCurrentTime() >= 345 && player.getCurrentTime() <= 346 && !stoppers[3]) {
    player.pauseVideo();
    choice1.innerHTML = choiceTexts[3][0];
    choice2.innerHTML = choiceTexts[3][1];
    choicesMenu.style.display = "block";
    stoppers[3] = true;
    leftChoice = 548.6;
    rightChoice = player.getCurrentTime();
  }
  if (player.getCurrentTime() >= 428 && player.getCurrentTime() <= 428.6 && !stoppers[4]) {
    player.pauseVideo();
    choice1.innerHTML = choiceTexts[4][0];
    choice2.innerHTML = choiceTexts[4][1];
    choicesMenu.style.display = "block";
    stoppers[4] = true;
    leftChoice = player.getCurrentTime();
    rightChoice = 498;
  }
  if (player.getCurrentTime() >= 579.4 && player.getCurrentTime() <= 580 && !stoppers[5]) {
    player.pauseVideo();
    choice1.innerHTML = choiceTexts[4][0];
    choice2.innerHTML = choiceTexts[4][1];
    choicesMenu.style.display = "block";
    stoppers[5] = true;
    leftChoice = player.getCurrentTime();
    rightChoice = 647;
  }
}









/* 










window.addEventListener('load', function() {

  video = document.getElementById('video');
  choicesMenu = document.getElementById('choicesMenu');
  choice1 = document.getElementById('choice1');
  choice2 = document.getElementById('choice2');
  choicesMenu.style.display = "none";

  video.addEventListener('click', playOrPause, false);

  choice1.addEventListener('click', skipToPart1, false);
  choice2.addEventListener('click', skipToPart2, false);

  goBack = document.getElementById('goBack');
  goBackButton = document.getElementById('goBackButton');
  goBack.style.display = "none";
  goBackButton.addEventListener('click', jumpBack, false);

  setInterval(showMenu, 300);

  stoppers = [false, false, false, false, false];

  video.currentTime = 0;

}, false);

function jumpBack(){
  video.currentTime = goBackTime;
  goBack.style.display = "none";
  video.play();
}

function playOrPause() {
  if(video.paused){
    video.play();
  } else{
    video.pause();
  }
}

function skipToPart1(){
  video.currentTime = leftChoice;
  video.play();
  choicesMenu.style.display = "none";
}

function skipToPart2(){
  video.currentTime = rightChoice;
  video.play();
  choicesMenu.style.display = "none";
}

function showMenu(){
  if (video.currentTime >= 116 && video.currentTime <= 117 && !stoppers[0]) {
    video.pause();
    choice1.innerHTML = choiceTexts[0][0];
    choice2.innerHTML = choiceTexts[0][1];
    choicesMenu.style.display = "block";
    stoppers[0] = true;
    leftChoice = 116;
    rightChoice = 184;
  }
  if (video.currentTime > 183 && video.currentTime < 184) {
    video.pause();
    goBack.style.display = "block";
    goBackTime = 110;
    stoppers[0] = false;
  }
  if (video.currentTime >= 194.2 && video.currentTime <= 195 && !stoppers[1]) {
    video.pause();
    choice1.innerHTML = choiceTexts[1][0];
    choice2.innerHTML = choiceTexts[1][1];
    choicesMenu.style.display = "block";
    stoppers[1] = true;
    leftChoice = 213.8;
    rightChoice = video.currentTime;
  }
  if (video.currentTime >= 213 && video.currentTime < 213.7) {
    video.currentTime = 230.5;
  }
  if (video.currentTime >= 303.3 && video.currentTime <= 304 && !stoppers[2]) {
    video.pause();
    choice1.innerHTML = choiceTexts[2][0];
    choice2.innerHTML = choiceTexts[2][1];
    choicesMenu.style.display = "block";
    stoppers[2] = true;
    leftChoice = video.currentTime;
    rightChoice = 325.5;
  }
  if (video.currentTime > 324.9 && video.currentTime < 325.2) {
    video.pause();
    goBack.style.display = "block";
    goBackTime = 303;
    stoppers[2] = false;
  }
  if (video.currentTime >= 345 && video.currentTime <= 346 && !stoppers[3]) {
    video.pause();
    choice1.innerHTML = choiceTexts[3][0];
    choice2.innerHTML = choiceTexts[3][1];
    choicesMenu.style.display = "block";
    stoppers[3] = true;
    leftChoice = 548.6;
    rightChoice = video.currentTime;
  }
  if (video.currentTime >= 428 && video.currentTime <= 428.6 && !stoppers[4]) {
    video.pause();
    choice1.innerHTML = choiceTexts[4][0];
    choice2.innerHTML = choiceTexts[4][1];
    choicesMenu.style.display = "block";
    stoppers[4] = true;
    leftChoice = video.currentTime;
    rightChoice = 498;
  }
  if (video.currentTime >= 579.4 && video.currentTime <= 580 && !stoppers[5]) {
    video.pause();
    choice1.innerHTML = choiceTexts[4][0];
    choice2.innerHTML = choiceTexts[4][1];
    choicesMenu.style.display = "block";
    stoppers[5] = true;
    leftChoice = video.currentTime;
    rightChoice = 647;
  }
} */