/*
 *  main.js
 *  2015/02/12
 *  @auther minimo  
 *  This Program is MIT license.
 */

//乱数発生器
var mt  = new MersenneTwister(0);
var rand  = function(min, max) { return mt.nextInt(min, max); };    //乱数発生

//敵生成アルゴリズム用
var mt2 = new MersenneTwister(256);
var rand2 = function(min, max) { return mt2.nextInt(min, max); };   //乱数発生

//定数
//デバッグ
var DEBUG = false;

//スクリーンサイズ
SC_W = 640;
SC_H = 1136;

//レイヤー区分
LAYER_SYSTEM = 8;           //システム表示
LAYER_FOREGROUND = 7;       //フォアグラウンド
LAYER_EFFECT_UPPER = 6;     //エフェクト上位
LAYER_PLAYER = 5;           //プレイヤー
LAYER_BULLET = 4;           //弾
LAYER_SHOT = 3;             //ショット
LAYER_OBJECT = 2;           //オブジェクト中間
LAYER_EFFECT_LOWER = 1;     //エフェクト下位
LAYER_BACKGROUND = 0;       //バックグラウンド

//インスタンス
app = {};

//アプリケーションメイン
tm.main(function() {
    app = flyhigh.Application("#world");
    app.run();
});
