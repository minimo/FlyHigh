/*
 *  MainScene.js
 *  2015/02/12
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */
(function() {

tm.define("flyhigh.MainScene", {
    superClass: tm.app.Scene,

    //マルチタッチ補助クラス
    touches: null,
    touchID: -1,

    //タッチ情報
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    beforeX: 0,
    beforeY: 0,
    mouseON: false,

    //経過時間
    time: 0,

    //スコア
    score: 0,

    //単位名
    unitName: "m",

    //ランク
    rank: 0,

    background: "rgba(0, 100, 0, 1.0)",
    labelParam: {fontFamily: "misaki", align: "left", baseline: "top",outlineWidth: 3},

    init: function() {
        this.superInit();

        //マルチタッチ初期化
        this.touches = tm.input.TouchesEx(this);

        //レイヤー作成
        this.layers = [];
        this.layerBase = tm.app.Object2D().addChildTo(this);
        for (var i = 0; i < LAYER_SYSTEM+1; i++) {
            this.layers[i] = tm.app.Object2D().addChildTo(this.layerBase);
        }

        //バックグラウンド
        this.bg = flyhigh.BackGround()
            .addChildTo(this.layers[LAYER_BACKGROUND]);

        //プレイヤー
        this.player = flyhigh.Player()
            .addChildTo(this)
            .setPosition(SC_W*0.5, SC_H*0.5);
        app.player = this.player;

        //システム表示ベース
        this.systemBase = tm.app.Object2D()
            .addChildTo(this)
            .setPosition(0, 0);

        //スコア表示ラベル
        var that = this;
        var sc = this.scoreLabel = tm.display.OutlineLabel("", 80)
            .addChildTo(this.systemBase)
            .setPosition(SC_W*0.5, SC_H*0.3)
            .setParam(this.labelParam);
        sc.score = 0;
        sc.update = function() {
            this.text = this.score+that.unitName;
            if (this.score < that.score) {
                var s = ~~((that.score-this.score)/5);
                if (s < 3) s=3;
                this.score += s;
                if (this.score > that.score)this.score = that.score;
            }
        };
    },

    update: function() {
        this.time++;
    },

    //タッチorクリック開始処理
    ontouchesstart: function(e) {
        if (this.touchID > 0)return;
        this.touchID = e.ID;
        this.mouseON = true;

        this.score++;
    },

    //タッチorクリック移動処理
    ontouchesmove: function(e) {
        if (this.touchID != e.ID) return;
    },

    //タッチorクリック終了処理
    ontouchesend: function(e) {
        if (this.touchID != e.ID) return;
        this.touchID = -1;
        this.mouseON = false;
    },

    //addChildオーバーライド
    addChild: function(child) {
        if (child.layer === undefined) {
            return this.superClass.prototype.addChild.apply(this, arguments);
        }
        child.parentScene = this;
        child.player = this.player;
        return this.layers[child.layer].addChild(child);
    },
});

})();
