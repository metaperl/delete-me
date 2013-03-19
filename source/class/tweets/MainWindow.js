qx.Class.define("tweets.MainWindow", {

    extend : qx.ui.window.Window,

    construct: function() {
        this.base(arguments, 'tweets');
        this.setShowClose(false);
        this.setShowMaximize(false);
        this.setShowMinimize(false);
        this.setWidth(250);
        this.setHeight(300);
    }

});
