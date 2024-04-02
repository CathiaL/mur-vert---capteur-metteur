function capteurs_G3 () {
    humidité3 = pins.analogReadPin(AnalogPin.P10)
    basic.showString("" + (pins.analogReadPin(AnalogPin.P10)))
    basic.pause(1000)
    if (humidité3 <= 600) {
        ouvrir_servo3()
        radio.sendNumber(humidité3)
        basic.pause(10000)
        fermer_servo3()
    }
    basic.pause(5000)
    humidité3 = 0
}
function fermer_servo1 () {
    servos.P0.setAngle(0)
    basic.pause(1000)
    servos.P0.stop()
    basic.pause(1000)
}
function capteurs_G2 () {
    humidité2 = pins.analogReadPin(AnalogPin.P4)
    basic.showString("" + (pins.analogReadPin(AnalogPin.P4)))
    basic.pause(1000)
    if (humidité2 <= 600) {
        ouvrir_servo2()
        radio.sendNumber(humidité2)
        basic.pause(10000)
        fermer_servo2()
    }
    basic.pause(5000)
    humidité2 = 0
}
function fermer_servo2 () {
    servos.P1.setAngle(0)
    basic.pause(1000)
    servos.P1.stop()
    basic.pause(1000)
}
function ouvrir_servo1 () {
    servos.P0.setAngle(160)
    basic.pause(1000)
    servos.P0.stop()
    basic.pause(1000)
}
function ouvrir_servo2 () {
    servos.P1.setAngle(160)
    basic.pause(1000)
    servos.P1.stop()
    basic.pause(1000)
}
function fermer_servo3 () {
    servos.P2.setAngle(0)
    basic.pause(1000)
    servos.P2.stop()
    basic.pause(1000)
}
function ouvrir_servo3 () {
    servos.P2.setAngle(160)
    basic.pause(1000)
    servos.P2.stop()
    basic.pause(1000)
}
function capteurs_G1 () {
    humidité1 = pins.analogReadPin(AnalogPin.P3)
    basic.showString("" + (pins.analogReadPin(AnalogPin.P3)))
    basic.pause(1000)
    if (humidité1 >= 600) {
        ouvrir_servo1()
        radio.sendNumber(humidité1)
        basic.pause(10000)
        fermer_servo1()
    }
    basic.pause(5000)
    humidité1 = 0
}
let humidité3 = 0
let humidité2 = 0
let humidité1 = 0
radio.setGroup(120)
led.setBrightness(50)
humidité1 = pins.analogReadPin(AnalogPin.P3)
humidité2 = pins.analogReadPin(AnalogPin.P4)
humidité3 = pins.analogReadPin(AnalogPin.P10)
fermer_servo1()
fermer_servo2()
fermer_servo3()
basic.forever(function () {
    capteurs_G1()
    basic.pause(5000)
    capteurs_G2()
    basic.pause(5000)
    capteurs_G3()
    basic.pause(345600000)
})
