scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    scene.setBackgroundColor(8)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    100,
    false
    )
    pause(100)
    game.splash("level 3", "invisible walls")
    game.showLongText("there are walls you can't see.", DialogLayout.Bottom)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . 7 7 7 7 7 7 7 7 . 
        9 9 9 9 9 9 9 9 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 f f 9 9 9 9 
        . 9 9 9 9 9 9 9 9 . 
        . 6 6 6 6 6 6 6 6 . 
        7 7 7 7 7 7 7 7 7 7 
        7 9 7 7 7 7 7 7 7 7 
        . 2 2 . . . . 2 2 . 
        . . . . . . . 2 2 . 
        `,img`
        . 7 7 7 7 7 7 7 7 . 
        9 9 9 9 9 9 9 9 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 f f 9 9 9 9 
        . 9 9 9 9 9 9 9 9 . 
        . 6 6 6 6 6 6 6 6 . 
        7 7 7 7 7 7 7 7 7 7 
        7 9 7 7 7 7 7 7 7 7 
        . 2 2 . . . . 2 2 . 
        . 2 2 . . . . . . . 
        `],
    100,
    true
    )
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . 7 7 7 7 7 7 7 7 . 
        9 9 9 9 9 9 9 9 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 f 9 9 9 9 f 9 9 
        9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 f f 9 9 9 9 
        . 9 9 9 9 9 9 9 9 . 
        . 6 6 6 6 6 6 6 6 . 
        7 7 7 7 7 7 7 7 7 7 
        7 9 7 7 7 7 7 7 7 7 
        . 2 2 . . . . 2 2 . 
        . 2 2 . . . . 2 2 . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    game.splash("level 2", "don't let your eyes deceive you")
    game.showLongText("you can go through some walls", DialogLayout.Bottom)
    scene.setBackgroundColor(13)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
    . 7 7 7 7 7 7 7 7 . 
    9 9 9 9 9 9 9 9 9 9 
    9 9 f 9 9 9 9 f 9 9 
    9 9 f 9 9 9 9 f 9 9 
    9 9 f 9 9 9 9 f 9 9 
    9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 f f 9 9 9 9 
    . 9 9 9 9 9 9 9 9 . 
    . 6 6 6 6 6 6 6 6 . 
    7 7 7 7 7 7 7 7 7 7 
    7 9 7 7 7 7 7 7 7 7 
    . 2 2 . . . . 2 2 . 
    . 2 2 . . . . 2 2 . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
