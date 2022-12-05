const speakBtn = document.querySelector(".speak-btn")

// 
var msg = new SpeechSynthesisUtterance()

// speechSynthesis.speak(msg)

// async settup

let m = ""

async function setupVoice() {
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[4]
  msg.voiceURI = "native"
  msg.volume = 1
  msg.rate = 1
  msg.pitch = 1.1
  msg.lang = "en-US"
  m = "You're so handsome"
  msg.text = m
  return msg
}



speakBtn.addEventListener('click', e => {
  e.preventDefault()
  console.log("click")
  setupVoice().then(
    function(value) {
      speechSynthesis.speak(value)
    }
  )
})


// why the default voice goes first?

