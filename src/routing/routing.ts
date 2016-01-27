import {getModule} from "./../app/app";
/**
 * Created by dpedro on 1/22/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

module Routing {

    getModule().config(configureStates);



    /* @ngInject */
    function configureStates($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
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
            })
    }
}