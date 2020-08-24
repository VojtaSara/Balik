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
  choice1.addEventListener('click', skipToPart1, false);
  choice2.addEventListener('click', skipToPart2, false);

  onIOS = document.getElementById('isOnIOS')

  goBack = document.getElementById('goBack');
  goBackButton = document.getElementById('goBackButton');
  goBackButton.addEventListener('click', jumpBack, false);

  // COMING FROM YOUTUBE / NOT COMING FROM YOUTUBE
  player.pauseVideo();
  choice1.innerHTML = "pustit od začátku";
  choice2.innerHTML = "pustit od první volby";
  choicesMenu.style.display = "block";
  leftChoice = 0;
  rightChoice = 111;

  if(iOS()){
    choicesMenu.style.position = "initial";
  }
}


function onPlayerStateChange(event) {
  setInterval(showMenu, 200);
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
  player.playVideo();
  goBack.style.display = "none";
  goBackButton.style.display = "none";
}

function showMenu(){
  if (!iOS()){
    player.setSize(window.innerWidth, window.innerHeight);
  } else {
    player.setSize(window.innerWidth, window.innerHeight - 100);
  }
  
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
    goBackButton.style.display = "block";
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
  if (player.getCurrentTime() >= 213.4 && player.getCurrentTime() < 214) {
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
    goBackButton.style.display = "block";
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
  if (player.getCurrentTime() >= 496 && player.getCurrentTime() <= 497){
    player.stopVideo();
  }
  if (player.getCurrentTime() >= 547 && player.getCurrentTime() <= 548){
    player.stopVideo();
  }
  if (player.getCurrentTime() >= 645 && player.getCurrentTime() <= 646){
    player.stopVideo();
  }
}

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}