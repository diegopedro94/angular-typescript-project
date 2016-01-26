/**
 * Created by dpedro on 1/22/2016.
 */
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angular-ui-router/angular-ui-router.d.ts" />
var Routing;
(function (Routing) {
    var getModule = AppModule.getModule;
    getModule().config(configureStates);
    configureStates.$inject = ['$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function configureStates($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('cargaCiudadano', {
            url: '/',
            templateUrl: 'templates/cargaCiudadano.html',
            controller: 'ciudadanoCtrl as vm'
        })
            .state('editarCiudadano', {
            url: '/editarCiudadano/:id',
            templateUrl: 'templates/edicionCiudadano.html',
            controller: 'edicionCiudadanoController as edicionCiudadanoCtrl'
        });
    }
})(Routing || (Routing = {}));
//# sourceMappingURL=routing.js.map