/*
 *  TitleScene.js
 *  2015/02/12
 *  @auther minimo  
 *  This Program is MIT license.
 */
 
//タイトルシーン
tm.define("flyhigh.TitleScene", {
    superClass: tm.app.Scene,

    init: function() {
        this.superInit();
        app.background = "rgba(0, 0, 0, 1.0)";

        this.time = 0;
    },

    update: function() {
        this.time++;
    },

    ontouchend: function() {
        app.background = "rgba(0, 0, 0, 0.8)";
        app.score = 0;
        app.replaceScene(flyhigh.MainScene());
    },

});
