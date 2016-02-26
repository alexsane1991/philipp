var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
       
    $routeProvider
    .when('/',                  { title: 'Philipp Glaninger :: Home',                   templateUrl: "partials/main.html", menuSelected: "home" })
    .when('/skills',            { title: 'Philipp Glaninger :: Skills',                 templateUrl: "partials/skills.html", menuSelected: "skills" })
    .when('/datenrettung',      { title: "Philipp Glaninger :: Datenrettung",           templateUrl: "partials/datenrettung.html" })
    .when('/demoreel',          { title: 'Philipp Glaninger :: Demoreel',               templateUrl: "partials/demoreel.html" })
    .when('/impressum',         { title: 'Philipp Glaninger :: Impressum',              templateUrl: "partials/impressum.html" })
    .when('/lebenslauf',        { title: 'Philipp Glaninger :: Lebesnlauf',             templateUrl: "partials/lebenslauf.html" })
    .when('/preise',            { title: 'Philipp Glaninger :: Preise',                 templateUrl: "partials/preise.html" })
    .when('/projekte',          { title: 'Philipp Glaninger :: Projekte',               templateUrl: "partials/projekte.html" })
    .when('/videorekonstruktion', { title: 'Philipp Glaninger :: Videorekonstruktion',  templateUrl: "partials/videorekonstruktion.html", })
    .when('/workshops',         { title: 'Philipp Glaninger :: Workshops',              templateUrl: "partials/workshops.html", 
                                  controller: "WorkshopsCtrl" })
    .when('/kurse/aftereffects',{ title: 'Philipp Glaninger :: After Effects',          templateUrl: "partials/kurse/aftereffects.html", })
    .when('/kurse/applecolor',  { title: 'Philipp Glaninger :: Apple Color',            templateUrl: "partials/kurse/applecolor.html", })
    .when('/kurse/autodeskxsi', { title: 'Philipp Glaninger :: Autodesk XSI',           templateUrl: "partials/kurse/autodeskxsi.html", })
    .when('/kurse/davinci',     { title: 'Philipp Glaninger :: DaVinci Resolve Studio', templateUrl: "partials/kurse/davinci.html", })
    .when('/kurse/dramaturgie', { title: 'Philipp Glaninger :: Dramaturgie',            templateUrl: "partials/kurse/dramaturgie.html", })
    .when('/kurse/dvdstudio',   { title: 'Philipp Glaninger :: DVD Studio Pro',         templateUrl: "partials/kurse/dvdstudio.html", })
    .when('/kurse/finalcutpro', { title: 'Philipp Glaninger :: Final Cut Pro',          templateUrl: "partials/kurse/finalcutpro.html", })
    .when('/kurse/finalcutx',   { title: 'Philipp Glaninger :: Final Cut X',            templateUrl: "partials/kurse/finalcutx.html", })
    .when('/kurse/kamera',      { title: 'Philipp Glaninger :: Kamera, Light und Ton',  templateUrl: "partials/kurse/kamera.html", })
    .when('/kurse/pftrack',     { title: 'Philipp Glaninger :: 2D und 3D Tracking',     templateUrl: "partials/kurse/pftrack.html", })
    .when('/kurse/photoshop',   { title: 'Philipp Glaninger :: Photoshop',              templateUrl: "partials/kurse/photoshop.html", })
    .when('/kurse/soundtrack',  { title: 'Philipp Glaninger :: Soundtrack',             templateUrl: "partials/kurse/soundtrack.html", })
});


app.controller("AppCtrl", function($scope, $route, $location) {
    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };
});


app.controller("WorkshopsCtrl", function($scope) {
    $scope.workshops = [ 
    { theme: 'red', title: 'DaVinci Resolve Studio',    img: 'workshops/davinci.png', snippet: 'High End Farbkorrektur' },
    { theme: 'orange', title: 'Photoshop',                 img: 'workshops/ps.png',      snippet: 'Mit Schwerpunkt auf Postproduktion' },
    { theme: 'yellow',title: 'After Effects',             img: 'workshops/ae.png',      snippet: 'das ultimative Tool für Special Effects und Motion Graphics' },
    { theme: 'lightblue',          title: 'Adobe Audition',            img: 'workshops/au.png',     snippet: 'Tricks für besseren Videoton' },
    { theme: 'lightpurple', title: 'Adobe Encore',              img: 'workshops/en.png',     snippet: 'vom Transcodieren bis Finalisieren' },
    { theme: 'lightgreen',      title: '2D und 3D Tracking',        img: 'workshops/pf.png',        snippet: 'Mit Mocha (AE) und PFTrack' },
    { theme: 'bluegreen',  title: 'Avid Media Composer',       img: 'workshops/avid.png',     snippet: 'der Klassiker unter den Profi-Tools' },
    { theme: 'purple',      title: 'Kamera, Licht und Ton',     img: 'workshops/light.png',   snippet: 'Equipment kreativ und korrekt nutzen' },
    { theme: 'grey', title: 'Dramaturgie in der Praxis', img: 'workshops/drama.png',  snippet: 'Tipps und Tricks für das magische Eintauchen' },
    ];

    /*{
        theme: 'orange',
        url: '#/kurse/finalcutx',
        title: 'Final Cut Pro',
        img: 'final.cut.pro.png',
        snippet: 'für einen beru- flichen Einsatz im professionellen Team' },
    {
        theme: 'yellow',
        url: '#/kurse/soundtrack',
        title: 'Soundtrack',
        img: 'soundtrack.png',
        snippet: 'Tonbearbeitung macht den Unterschied' },
    {
        theme: 'lightgreen',
        url: '#/kurse/applecolor',
        title: 'Apple Color',
        img: 'apple.color.png',
        snippet: 'kinotaugliche Farbbearbei- tung' },*/
    /*{
        theme: 'purple',
        url: '#/kurse/dvdstudio',
        title: 'DVD Studio Pro',
        img: 'dvd.png',
        snippet: 'vom Menü- Design bis zur Pressung' },*/
});

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
