angular.module('jgs').config(function($routeProvider) {
	$routeProvider
    .when("/", {
        templateUrl : "view/main.html",
        controller: "main"
    }) 
    .when("/tema", {
        templateUrl : "view/tema.html",
        controller: "tema"
    })
    .when("/criar-tema", {
        templateUrl : "view/tema.html",
        controller: "tema"
    });
});