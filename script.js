"use strict";

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {

  const btn = document.createElement("button");

  btn.classList.add("sound")
  btn.innerText = sound;

  btn.addEventListener("click", () => {

    stopSounds();
    document.getElementById(sound).play();
  })
  document.getElementById("container").appendChild(btn);
})

function stopSounds() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  })
}