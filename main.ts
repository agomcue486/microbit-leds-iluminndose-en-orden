let y = 0
let sentido = 1
basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let index = 0; index <= 4; index++) {
            y = sentido * index
            if (sentido < 0) {
                y = y + 4
            }
            led.plot(x, y)
            basic.pause(100)
            led.toggle(x, y)
        }
        sentido = sentido * -1
    }
})
