basic.pause(randint(100, 1000))
let list = randint(1, 45)
if (list == 1) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, randint(0, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 2) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, randint(0, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 3) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, randint(0, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 4) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, randint(0, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 5) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, randint(0, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 6) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, randint(0, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 7) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, randint(0, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 8) {
    music.setVolume(randint(0, 255))
    mbit_Robot.Music_Car(mbit_Robot.enMusic.funereal)
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 9) {
    music.setVolume(randint(0, 255))
    mbit_Robot.Music_Car(mbit_Robot.enMusic.wedding)
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 10) {
    music.setVolume(randint(0, 255))
    mbit_Robot.Music_Car(mbit_Robot.enMusic.ode)
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 11) {
    music.setVolume(randint(0, 255))
    mbit_Robot.Music_Car(mbit_Robot.enMusic.nyan)
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 12) {
    basic.showString("Hello!")
    basic.pause(randint(5000, 12500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 13) {
    basic.showString("Goodbye")
    basic.pause(randint(5000, 12500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 14) {
    basic.showString("DIE!")
    basic.pause(randint(5000, 12500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 15) {
    basic.showString("Credit to trevor.")
    basic.pause(randint(5000, 12500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 16) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(randint(1, 500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 17) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    basic.pause(randint(1, 500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 18) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(randint(1, 500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 19) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
    basic.pause(randint(1, 500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 20) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(randint(1, 500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 21) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
    basic.pause(randint(1, 500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 22) {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
    basic.pause(randint(1, 500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 23) {
    basic.showString("Fart noises")
    basic.pause(randint(5000, 12500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 23) {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, randint(1, 255), randint(1, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 24) {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Left, randint(1, 255), randint(1, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 25) {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Right, randint(1, 255), randint(1, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 26) {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Stop, randint(1, 255), randint(1, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 27) {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_SpinLeft, randint(1, 255), randint(1, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 28) {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_SpinRight, randint(1, 255), randint(1, 255))
    basic.pause(randint(1, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 29) {
    basic.showIcon(IconNames.Heart)
    basic.pause(randint(1, 1000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 30) {
    basic.showIcon(IconNames.Happy)
    basic.pause(randint(1, 1000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 31) {
    basic.showIcon(IconNames.Asleep)
    basic.pause(randint(1, 1000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 32) {
    basic.showIcon(IconNames.Skull)
    basic.pause(randint(1, 1000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 33) {
    basic.showIcon(IconNames.Ghost)
    basic.pause(randint(1, 1000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 34) {
    basic.showIcon(IconNames.Sad)
    basic.pause(randint(1, 1000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 35) {
    basic.showString("Space Dino")
    basic.pause(randint(5000, 12500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 36) {
    basic.showString("Put your hands up")
    basic.pause(randint(5000, 12500))
    for (let index = 0; index < 4; index++) {
        music.playMelody("C D C D C D C D ", 500)
    }
    basic.pause(randint(30, 200))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 37) {
    basic.showString("Wiggle Wiggle")
    basic.pause(randint(5000, 12500))
    for (let index = 0; index < 4; index++) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, randint(0, 255))
        basic.pause(randint(1, 100))
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, randint(0, 255))
    }
    basic.pause(randint(30, 200))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 38) {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, randint(0, 255))
    basic.pause(randint(100, 5000))
    mbit_Robot.Music_Car(mbit_Robot.enMusic.dadadum)
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 39) {
    mbit_Robot.Music_Car(mbit_Robot.enMusic.wawawawaa)
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 40) {
    mbit_Robot.Music_Car(mbit_Robot.enMusic.baddy)
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 41) {
    basic.showString("Guess what number!")
    basic.pause(randint(2000, 7500))
    basic.showNumber(randint(randint(1, 100), randint(1, 100)))
    basic.pause(randint(1000, 7500))
    basic.showString("Did you get it?")
    basic.pause(randint(2000, 7500))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 42) {
    music.setVolume(randint(1, 255))
    music.playMelody("C5 B A G F E D C ", randint(1, 500))
    basic.pause(randint(1000, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 43) {
    music.setVolume(randint(1, 255))
    music.playMelody("C D E F G A B C5 ", randint(1, 500))
    basic.pause(randint(1000, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 44) {
    music.setVolume(randint(1, 255))
    music.playMelody("F E D C G A B C5 ", randint(1, 500))
    basic.pause(randint(1000, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
if (list == 45) {
    music.setVolume(randint(1, 255))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    basic.pause(randint(1000, 5000))
    control.reset()
} else {
    game.removeLife(0)
}
