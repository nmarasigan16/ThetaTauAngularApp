// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'ng2-material': 'vendor/ng2-material',
  '@angular/router-deprecated': 'vendor/@angular/router-deprecated'
};

/** User packages configuration. */
const packages: any = {
  'ng2-material': { defaultExtension: 'js', main: 'index.js' },
  '@angular/router-deprecated': { defaultExtension: 'js', main: 'index.js' }
};

const materialPkgs: string[] = [
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

materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
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
  'app/moo',
  'app/router',
  'app/login',
  'app/brothers',
  'app/events',
  'app/meetings',
  'app/interviews',
  'app/interview-check',
  'app/event-check',
  'app/brother-list',
  'app/event-list',
  'app/interview-list',
  'app/interview-checklist',
  'app/meeting-list',
  'app/interview-detail',
  'app/interview-checkdetail',
  'app/brother-detail',
  'app/event-detail',
  'app/meeting-detail',
  'app/attendance',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

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
System.config({ map, packages });
