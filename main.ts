tiles.setCurrentTilemap(tilemap`level1`)
let Red_senpai = sprites.create(img`
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    .........6.........6...............
    .........6666...6666...............
    ...........6666666.................
    ............62226..................
    ...........61f2f16.................
    .....222...6322236...222...........
    .....222...6222226...222...........
    .....66.....62226.....66...........
    .....66......666......66...........
    .....22....6f666f6....22...........
    .....22..2266f6f6622..22...........
    .....222222666c666222222...........
    .....22222266ccc66222222...........
    ...........66ccc66.................
    ............6ccc6..................
    ............66666..................
    ...........6666666.................
    ..........666666666................
    .........66666666666...............
    .........66666666666...............
    .........66666666666...............
    .........66666666666...............
    .........66666666666...............
    ..........6666.6666................
    ...........66...66.................
    ...........66...66.................
    ...........66...66.................
    ..........6666.6666................
    `, SpriteKind.Player)
Red_senpai.changeScale(1, ScaleAnchor.Middle)
let PonyChan = sprites.create(img`
    ..................33bbbbbbb........
    .................333bbbbbbbb.......
    ................b3b33bb333bb.......
    ...............bb3b33333333b333....
    ..............bbb3b3333ccc3333333..
    ..............bbb3bb3ccc11c3333b33.
    ..............bbb33333c11bb3333333.
    ..............bbbb3333c11bb3333333.
    ..............bbbbbb333cc333333333.
    ...............bbbbb33333333333333.
    ................bbbb3333333333333..
    ...bbbb......bb.bbbb3333333333.....
    ..bbbbb3333333bbbbbb3333333........
    .bbbbb333333333bbbb33333333........
    bbbbb33333333333333333333333.......
    bbbbb33333333333333333333333.......
    bbbb33bb33b33333333333333333.......
    bbb3333b3bb333333333333333333......
    bbb.33333333333333333333333333.....
    bbb.33bb3b333333333333333333333....
    bbb.33b33bb333333333333333333333...
    bbb.333333333.....333333333333333..
    bbb..333333333.......333333333333..
    bbbb.3333333333......333333333333..
    bbbb..33333333333....3333333333333.
    .bbbb..3333333333....333333..333333
    ..bbb..333333333333...33333...3....
    ..bbb..33333.333333..333333........
    ...bbb.333333.33333..333333........
    ....bb.333333..3333..33333.........
    .......333333..33....33333.........
    .......33333.........33333.........
    ...................................
    ...................................
    ...................................
    `, SpriteKind.Player)
controller.moveSprite(PonyChan)
let PonySan = sprites.create(img`
    ..................44ccccccc........
    .................444cccccccc.......
    ................c4644cc444cc.......
    ...............cc4644444444c444....
    ..............ccc464444fff4444444..
    ..............ccc4664fff11f4444644.
    ..............ccc44444f11664444444.
    ..............cccc4444f11664444444.
    ..............cccccc444ff444444444.
    ...............ccccc44444444444444.
    ................cccc4444444444444..
    ...cccc......cc.cccc4444444444.....
    ..ccccc4444444cccccc4444444........
    .ccccc444444444cccc44444444........
    ccccc44444444444444444444444.......
    ccccc44444444444444444444444.......
    cccc44cc44c44444444444444444.......
    ccc4444c4cc444444444444444444......
    ccc.44444444444444444444444444.....
    ccc.44cc4c444444444444444444444....
    ccc.44c44cc444444444444444444444...
    ccc.444444444.....444444444444444..
    ccc..444444444.......44444.444444..
    cccc.4444444444......44444..44444..
    cccc..44444444444....444444.444444.
    .cccc..4444444444....444444..4444..
    ..ccc..444444444444...44444...4....
    ..ccc..44444.444444..444444........
    ...ccc.444444.44444..444444........
    ....cc.444444..4444..44444.........
    .......444444..44....44444.........
    .......44444.........44444.........
    ...................................
    ...................................
    ...................................
    `, SpriteKind.Player)
