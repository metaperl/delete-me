/* ************************************************************************

   Copyright:

   License:

   Authors:

   ************************************************************************ */

/* ************************************************************************

   #asset(tweets/*)

   ************************************************************************ */

/**
 * This is the main application class of your custom application "tweets"
 */
qx.Class.define("tweets.Application", {

    extend : qx.application.Standalone,

    members :  {
    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     *
     * @lint ignoreDeprecated(alert)
     */
        main : function()    {
            // Call super class
            this.base(arguments);

            // Enable logging in debug variant
            if (qx.core.Environment.get("qx.debug"))   {
                // support native logging capabilities, e.g. Firebug for Firefox
                qx.log.appender.Native;
                // support additional cross-browser console. Press F7 to toggle visibility
                qx.log.appender.Console;
            }


            // Create a button
            var button1 = new qx.ui.form.Button("First Button", "tweets/test.png");

            // Document is the application root
            var doc = this.getRoot();

            var main = new tweets.MainWindow();

            doc.add(main);

            main.moveto(50,30);
            main.open();

        } // main()
    } // main:
});
