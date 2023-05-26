// close video when user clicks outside it
const videoOverlay = document.getElementById(`videoOverlay`);
const videoHolder = document.getElementById(`videoHolder`);
const video = document.getElementById(`mainVideo`);
const playIcon = document.querySelector(`.video_play_image`);

videoOverlay.addEventListener(`click`, (e) => {
  if (!e.target.classList.contains(`dont-close`)) {
    videoOverlay.style.display = `none`;
    videoHolder.classList.remove(`fadeIn`);
    video.pause();
    video.currentTime = 0;
    playIcon.style.display = `block`;
  }
});
// play video when user click play icon
playIcon.addEventListener(`click`, () => {
  video.play();
});
// hide play icon when video starts
video.onplay = function () {
  playIcon.style.display = `none`;
};
// show video when user click play button
const playButton = document.getElementById(`videoButton`);

playButton.addEventListener(`click`, () => {
  videoOverlay.style.display = `flex`;
  videoHolder.classList.add(`fadeIn`);
});

// record when user enters the website so the video doesnt keep appearing

let visits;
if (sessionStorage.getItem(`visits`)) {
  visits = sessionStorage.getItem(`visits`);
  visits++;
  sessionStorage.setItem(`visits`, visits);
} else {
  visits = 1;
  sessionStorage.setItem(`visits`, visits);
}
// if user has more than one visit (opened site already) dont show video
if (visits > 1) {
  videoOverlay.style.display = `none`;
}

// making transition on page change

// change body background and hide elements before page swap
const imprint = document.getElementById(`imprint`);
const sections = document.querySelectorAll(`section`);
const footer = document.querySelector(`footer`);
const html = document.querySelector(`html`);

imprint.addEventListener(`click`, () => {
  document.body.style.backgroundColor = `var(--imprint-background)`;
  sections.forEach((s) => (s.style.opacity = `0`));
  footer.style.opacity = `0`;
  html.style.backgroundColor = `var(--imprint-background)`;
  setTimeout(() => {
    location.href = `imprint/index.html`;
  }, 500);
});

// playing video on hover

function onYouTubeIframeAPIReady() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const players = []; // Array to store YouTube players

  thumbnails.forEach(function(thumbnail) {
    const videoOverlay = thumbnail.querySelector(".video-overlay");
    const videoId = thumbnail.dataset.videoId;
    let player;
    let hoverTimer;

    thumbnail.addEventListener("mouseenter", function() {
      if (!player) {
        player = new YT.Player(videoOverlay, {
          videoId: videoId,
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0
          }
        });
        players.push(player);
      } else {
        player.playVideo();
      }

      this.querySelector('.video-overlay').style.display = "block";
    });

    thumbnail.addEventListener("mouseleave", function() {
      player.stopVideo();
      this.querySelector('.video-overlay').innerHTML = "";
      this.querySelector('.video-overlay').style.display = "none";
    });
  });
}
