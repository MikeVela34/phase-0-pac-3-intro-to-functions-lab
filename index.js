function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
    return string.toUpperCase();
}

function logWhisper(string) {
    console.log(string.toLowerCase())
    return string.toLowerCase();
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!"
      }
    if (string.toUpperCase() === string) {
        return "YES INDEED!"
    }
    if (string === string) {
        return "I would love to!"
    }
}