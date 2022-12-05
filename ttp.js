const ttsBtn = document.querySelector(".tts-btn")

function bottalk() {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  let voices = [];
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[4];
  speech.pitch = 1;
  speech.volume = 1;
  speech.rate = 1;
  speech.lang = "en-US"
  speech.text = "You're so fucking handsome"
  window.speechSynthesis.speak(speech);
}


// var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[2]; // Note: some voices don't support altering params
// msg.voiceURI = 'native';
// msg.volume = 1; // 0 to 1
// msg.rate = 1; // 0.1 to 10
// msg.pitch = 2; //0 to 2
// msg.text = 'Hello World';
// msg.lang = 'en-US';

// msg.onend = function(e) {
//   console.log('Finished in ' + event.elapsedTime + ' seconds.');
// };


const speak = (text) => {
  var msg = new SpeechSynthesisUtterance(text);
  msg.voice = window.speechSynthesis.getVoices()[4];
  window.speechSynthesis.speak(msg);
}

ttsBtn.addEventListener("click", e => {
  e.preventDefault()
  // speechSynthesis.speak(msg);
  speak("You're so great")

})









// let speech = new SpeechSynthesisUtterance();
// speech.lang = "en";


// let voices = [];
// window.speechSynthesis.onvoiceschanged = () => {
//   voices = window.speechSynthesis.getVoices();
//   speech.voice = voices[0];
//   let voiceSelect = document.querySelector("#voices");
//   voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };

// document.querySelector("#rate").addEventListener("input", () => {
//   const rate = document.querySelector("#rate").value;
//   speech.rate = rate;
//   document.querySelector("#rate-label").innerHTML = rate;
// });

// document.querySelector("#volume").addEventListener("input", () => {
//   const volume = document.querySelector("#volume").value;
//   speech.volume = volume;
//   document.querySelector("#volume-label").innerHTML = volume;
// });

// document.querySelector("#pitch").addEventListener("input", () => {
//   const pitch = document.querySelector("#pitch").value;
//   speech.pitch = pitch;
//   document.querySelector("#pitch-label").innerHTML = pitch;
// });

// document.querySelector("#voices").addEventListener("change", () => {
//   speech.voice = voices[document.querySelector("#voices").value];
// });

// document.querySelector("#start").addEventListener("click", () => {
//   speech.text = document.querySelector("textarea").value;
//   window.speechSynthesis.speak(speech);
// });


