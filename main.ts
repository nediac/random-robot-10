basic.pause(randint(100, 1000))
let list = randint(1, 25)
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
