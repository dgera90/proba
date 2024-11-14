// AngularJS alkalmazás és routing definiálása
var app = angular.module('myApp', ['ngRoute']);  // ngRoute hozzáadása az alkalmazáshoz

// Routing beállítása
app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: './html/home.html',
      controller: 'homeCtrl'  // A homeCtrl nem szükséges, ha csak statikus tartalom van
    })
    .when('/services', {
      templateUrl: './html/services.html',
    })
    .when('/contact', {
      templateUrl: './html/contact.html',
    })
    .otherwise({
      redirectTo: '/home'  // Az alapértelmezett útvonal a home
    });
});

// Kontroller (ha szükséges, például dinamikus tartalomhoz)
app.controller('homeCtrl', function($scope) {
  $scope.message = "Üdvözlünk a kezdőoldalon!";
});

// Szolgáltatások Controller
app.controller('ServicesController', function($scope, $http) {
  // HTTP kérés a PHP fájlhoz, amely a szolgáltatásokat adja vissza
  $http.get('./php/services.php')
      .then(function(response) {
          // Az adatok sikeresen visszaérkeztek
          $scope.services = response.data;
      }, function(error) {
          // Ha hiba történik
          console.error('Hiba történt a szolgáltatások lekérésekor:', error);
      });
});