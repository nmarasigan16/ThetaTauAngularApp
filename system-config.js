/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material',
    'ng2-material': 'vendor/ng2-material',
    '@angular/router-deprecated': 'vendor/@angular/router-deprecated'
};
/** User packages configuration. */
var packages = {
    'ng2-material': { defaultExtension: 'js', main: 'index.js' },
    '@angular/router-deprecated': { defaultExtension: 'js', main: 'index.js' }
};
var materialPkgs = [
    'core',
    'button',
    'card',
    'input',
    'list',
    'sidenav',
    'toolbar',
    'checkbox',
    'progress-bar',
    'progress-circle',
    'radio',
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/nav',
    'app/login',
    'app/+login',
    'app/+brothers',
    'app/+events',
    'app/search',
    'app/overlay-test',
    'app/+password',
    'app/+interview',
    'app/+email',
    'app/+meetings',
    'app/+dashboard',
    'app/+interview-check',
    'app/recent',
    'app/upcoming',
    'app/hours',
    'app/interview-list',
    'app/interview-detail',
    'app/meetings-list',
    'app/meetings-detail',
    'app/+interview-check-detail',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map