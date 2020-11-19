controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 5 5 5 5 . . 
    . . . . . . . 5 5 5 5 5 f f f . 
    . . . . . . . 5 5 5 5 5 f f 1 . 
    . . . . 5 5 5 5 5 5 5 5 f f f . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
    5 5 5 5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . . 5 4 5 5 5 5 4 5 5 . . . . . 
    . . 4 4 4 . . 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.x += -50
info.setScore(0)
info.startCountdown(60)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . d d d d d . . . . . . . . 
        . . . d d d d d d d d d . . . . 
        . f f d d d d d d d f d . . . . 
        . f f d d d d d f f d f d d . . 
        . d d d d d d d d d d d d d d . 
        . d d d d d d d f f f d d d d d 
        . d d d d d d d d d d d d d . . 
        . . d d d d d d d d d d d d . . 
        . . . . d d d d d d d d . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(154, randint(0, 120))
    mySprite2.setVelocity(-48, 0)
})
