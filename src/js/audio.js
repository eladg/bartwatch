const sounds = {
    HIGH_DING: 'C3',
    LOW_DING: 'D3',
    WOOSH: 'E3',
}

var sampler = new Tone.Sampler({
    "C3" : "./audio/high-ding.mp3",
    "D3" : "./audio/low-ding.mp3",
    "E3" : "./audio/woosh.mp3",
});


function playSampler(string_of_the_sound_to_play){
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
    sampler.triggerAttack(string_of_the_sound_to_play);
}