/*
 *  SpriteSheet.js
 *  2015/01/20
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

flyhigh.SpriteSheet = {};

//スプライトシート作成
flyhigh.createSpriteSheet = function() {

    //スタートアップ用
    flyhigh.SpriteSheet.egg = tm.asset.SpriteSheet({
        image: "egg",
        frame: {
            width: 32,
            height: 32,
            count: 15,
        },
        animations: {
            "stop": {
                frames:[14],
                next: "stop",
                frequency: 1,
            },
            "enter": {
                frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                frequency: 10,
            },
        },
    });

    //プレイヤー用
    flyhigh.SpriteSheet.player = tm.asset.SpriteSheet({
        image: "hiyoko",
        frame: {
            width: 32,
            height: 32,
            count: 18,
        },
        animations: {
            "stop": {
                frames:[0],
                next: "stop",
                frequency: 1,
            },
            "startup": {
                frames:[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3],
                next: "stop",
                frequency: 5,
            },
            "miss": {
                frames:[4,5],
                frequency: 23,
            },
            "fly": {
                frames:[1,2,3,2],
                next: "fly",
                frequency: 5,
            },
            "walk": {
                frames:[12,13,14,13],
                next: "walk",
                frequency: 10,
            },
            "damage": {
                frames:[4],
                next: "damage",
                frequency: 1,
            },
            "dawn": {
                frames:[5],
                next: "dawn",
                frequency: 30,
            },
        },
    });

    //敵１
    flyhigh.SpriteSheet.waru = tm.asset.SpriteSheet({
        image: "waru",
        frame: {
            width: 32,
            height: 32,
            count: 18,
        },
        animations: {
            "fly": {
                frames:[1,2,3,2],
                next: "fly",
                frequency: 7,
            },
            "walk": {
                frames:[12,13,14,13],
                next: "walk",
                frequency: 10,
            },
            "damage": {
                frames:[4],
                next: "damage",
                frequency: 1,
            },
            "dawn": {
                frames:[5],
                next: "dawn",
                frequency: 1,
            },
        },
    });

    //敵２
    flyhigh.SpriteSheet.mecha = tm.asset.SpriteSheet({
        image: "mecha",
        frame: {
            width: 32,
            height: 32,
            count: 18,
        },
        animations: {
            "fly": {
                frames:[1,2,3,2],
                next: "fly",
                frequency: 7,
            },
            "walk": {
                frames:[12,13,14,13],
                next: "walk",
                frequency: 10,
            },
            "damage": {
                frames:[4],
                next: "damage",
                frequency: 1,
            },
            "dawn": {
                frames:[5],
                next: "dawn",
                frequency: 1,
            },
        },
    });
};

})();