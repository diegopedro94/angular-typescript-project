/**
 * Created by dpedro on 1/21/2016.
 */
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

var app = angular.module('myApp',['ui.router']);

export var getModule: () => ng.IModule = () => {
    return angular.module('myApp');
}

