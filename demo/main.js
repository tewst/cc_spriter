cc.game.onStart = function () {
    cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload([], function () {
        var playScene = new PlayScene();
        cc.director.runScene(playScene);
    }, this);

    var PlayScene = cc.Scene.extend({
        onEnter: function () {
            this._super();
            this.addChild(new AnimationLayer());
        }
    });

    var AnimationLayer = cc.Layer.extend({
        sprite: null,

        ctor: function () {
            this._super();

            var spriter = window.spriter =  new cc.Spriter('res/char_animation/animation_list.scon', 'anim_list');
            spriter.setScale(0.5);
            spriter.setPosition(cc.p(cc.winSize.width / 2, 100));
            spriter.play('hi', false);
            //spriter.play('sigh', false);
            //spriter.play('good_job', false);

            this.addChild(spriter);
        }

    });

};
cc.game.run();
