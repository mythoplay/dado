input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        . # . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
