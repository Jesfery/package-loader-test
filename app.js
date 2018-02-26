/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'PackageLoaderTest.Application',

    name: 'PackageLoaderTest',

    requires: [
        // This will automatically load all classes in the PackageLoaderTest namespace
        // so that application classes do not need to require each other.
        'PackageLoaderTest.*'
    ],

    // The name of the initial view to create.
    mainView: 'PackageLoaderTest.view.main.Main'
});
