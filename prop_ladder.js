namespace SpriteKind {
    export const h = SpriteKind.create()
    export const Point = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`d`, function (sprite, location) {
    tiles.setTileAt(location, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`t`, function (sprite12, location12) {
    tiles.setTileAt(location12, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite6, location6) {
    if (info.score() == 9) {
        game.setDialogFrame(img`
            ..................................................................
            ............fff........fff.............fff..............ffff......
            ...........fddbf......fbdbf...........fbdbf............fbddf......
            ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
            ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
            ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
            .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
            .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
            .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
            .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
            ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
            ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
            ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
            ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
            ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
            ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
            ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
            ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
            .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
            .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
            .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
            ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
            ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
            .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
            .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
            .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
            ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
            ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
            .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
            .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
            .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
            ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
            .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
            ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
            .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
            .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
            ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
            .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
            .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
            .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
            ......fddbf............fbdbf...........fbdbf......fbddf...........
            ......ffff..............fff.............fff........fff............
            ..................................................................
            `)
        game.showLongText("Level 1: COMPLETE\\n \\n You gained knowledge on STAMP DUTY.\\n \\n Definition:\\n \\n A tax applied on legal documents to record monetary exchange.", DialogLayout.Full)
        game.showLongText("Continue to next level?\\n \\n Press SPACEBAR on your keyboard\\n \\n or\\n \\n 'A' on screen", DialogLayout.Full)
        level = false
        Level_2()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`s`, function (sprite3, location3) {
    tiles.setTileAt(location3, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`t_letter2`, function (sprite14, location14) {
    tiles.setTileAt(location14, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
function Splash_Screen () {
    scene.setBackgroundImage(assets.image`homepage_background`)
    game.splash("PLAY GAME (Press SPACEBAR)")
    game.showLongText("Aren't houses super expensive?\\n \\n I can't even understand half of these contracts!\\n \\n So many RESTRICTIONS. If only I was more familiar....", DialogLayout.Full)
    game.splash("Instructions : You must catch all the letters to discover the secret word , before the timer runs out . You only have 3 lives and must complete the game before the timer runs out OTHERWISE you will loose a point")
    play_game = true
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    human.vy = -300
    music.setVolume(14)
    music.jumpUp.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`p_letter`, function (sprite11, location11) {
    tiles.setTileAt(location11, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`c`, function (sprite7, location7) {
    tiles.setTileAt(location7, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    for (let index = 0; index < 2; index++) {
        info.startCountdown(20)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`u`, function (sprite8, location8) {
    tiles.setTileAt(location8, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`e`, function (sprite2, location2) {
    tiles.setTileAt(location2, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`a`, function (sprite4, location4) {
    tiles.setTileAt(location4, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`v`, function (sprite13, location13) {
    tiles.setTileAt(location13, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`o`, function (sprite9, location9) {
    tiles.setTileAt(location9, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`m`, function (sprite10, location10) {
    tiles.setTileAt(location10, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`y`, function (sprite15, location15) {
    tiles.setTileAt(location15, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
function Level_2 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    info.setLife(3)
    info.setScore(0)
    human.setPosition(130, 640)
    controller.moveSprite(human, 100, 0)
    human.ay = 500
    scene.cameraFollowSprite(human)
    info.startCountdown(60)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite16, location16) {
    if (info.score() == 8) {
        game.setDialogFrame(img`
            ..................................................................
            ............fff........fff.............fff..............ffff......
            ...........fddbf......fbdbf...........fbdbf............fbddf......
            ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
            ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
            ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
            .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
            .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
            .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
            .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
            ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
            ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
            ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
            ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
            ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
            ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
            ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
            ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
            .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
            .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
            .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
            ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
            ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
            .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
            .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
            .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
            ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
            ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
            .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
            .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
            .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
            ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
            .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
            ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
            .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
            .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
            ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
            .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
            .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
            .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
            ......fddbf............fbdbf...........fbdbf......fbddf...........
            ......ffff..............fff.............fff........fff............
            ..................................................................
            `)
        game.showLongText("Level 2: COMPLETE\\n \\n You gained knowledge on COVENANT.\\n \\n Definition:\\n \\n A tax applied on legal documents to record monetary exchange.", DialogLayout.Full)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`n`, function (sprite5, location5) {
    tiles.setTileAt(location5, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
let hitting = false
let human: Sprite = null
let level = false
let play_game = false
play_game = false
level = true
Splash_Screen()
if (play_game) {
    if (level == true) {
        info.setLife(3)
        tiles.setCurrentTilemap(tilemap`level1`)
        info.setScore(0)
        human = sprites.create(assets.image`human`, SpriteKind.Player)
        human.setPosition(150, 462)
        controller.moveSprite(human, 100, 0)
        human.ay = 500
        scene.cameraFollowSprite(human)
        info.startCountdown(60)
    }
}
game.onUpdate(function () {
    if (true) {
        if (human.isHittingTile(CollisionDirection.Bottom)) {
            if (!(hitting)) {
                music.setVolume(25)
                music.pewPew.play()
            }
            hitting = true
        } else {
            hitting = false
        }
    }
})