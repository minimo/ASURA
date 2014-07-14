/*
 *  ASURA
 *  2014/07/10
 *  @auther minimo  
 *  This Program is MIT license.
 */

//namespace ASURA
asura = {
    core: null,
};

asura.ASURA = tm.createClass({
    superClass: tm.app.CanvasApp,
    score: 0,
    highScore: 0,       //ハイスコア
    highScoreStage: 0,  //ハイスコア時ステージ
    difficulty: 0,      //難易度(0-3)
    mainScene: null,
    init: function(id) {
        this.superInit(id);

        asura.core = this;
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = 60;
        this.background = "rgba(0, 0, 0, 0)";

        this.keyboard = tm.input.Keyboard(window);

        var loadingScene = tm.ui["LoadingScene"]({
            assets: assets,
            width: SC_W,
            height: SC_H,
            nextScene: function() {
                this._onLoadAssets();
                return asura.MainScene();
            }.bind(this),
        });
        loadingScene.bg.canvas.clearColor("black");
        this.replaceScene(loadingScene);
    },

    _onLoadAssets: function() {
    },

    exitApp: function() {
        this.stop();
        tm.social.Nineleap.postRanking(this.highScore, "");
    }
});