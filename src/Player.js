/*
 *  player.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("flyhigh.Player", {
    superClass: "tm.display.AnimationSprite",
    layer: LAYER_PLAYER,

    width: 2,
    height: 2,

    parentScene: null,

    init: function() {
        this.superInit(flyhigh.SpriteSheet.player, 32, 32);
        this.setScale(2);
        this.scaleX *= -1;

        //当り判定設定
        this.boundingType = "circle";
        this.radius = 6;
        this.checkHierarchy = true;

        this.time = 0;
        return this;
    },
    update: function() {
        this.time++;
    },
});

})();
