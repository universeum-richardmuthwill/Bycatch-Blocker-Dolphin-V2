radio.onReceivedNumber(function (receivedNumber) {
    didntRecieveReply = 0
    if (receivedNumber == 5 && radio.receivedPacket(RadioPacketProperty.SignalStrength) > -70) {
        music.play(music.stringPlayable("B F B F B F B F ", 120), music.PlaybackMode.InBackground)
        basic.showString("VARNING!")
    } else if (receivedNumber == 5 && radio.receivedPacket(RadioPacketProperty.SignalStrength) <= -70) {
        basic.showIcon(IconNames.Yes)
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 7) {
        music.play(music.createSoundExpression(WaveShape.Sine, 4953, 369, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Happy)
    }
    if (receivedNumber == 42) {
        basic.showIcon(IconNames.Heart)
        for (let index = 0; index < 2; index++) {
            music.setTempo(60)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Quarter))
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Half))
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    didntRecieveReply = 1
    basic.showIcon(IconNames.Surprised)
    music.play(music.createSoundExpression(WaveShape.Sine, 500, 4003, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    radio.sendNumber(0)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(1000)
    if (didntRecieveReply == 1) {
        basic.showIcon(IconNames.Yes)
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
        didntRecieveReply = 0
    }
})
let didntRecieveReply = 0
radio.setGroup(1)
didntRecieveReply = 0
