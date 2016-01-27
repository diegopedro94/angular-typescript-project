/**
 * Created by dpedro on 1/27/2016.
 */

/// <reference path="../../typings/angularjs/angular.d.ts" />

import {getModule} from "../app/app";
import {CiudadanoService} from "./../services/services.ts";
import {CiudadanoController} from "./../controllers/controllers.ts"

module Directives{

    var app = getModule();

    export class CiudadanoDirective implements ng.IDirective {
        bindToController = true;
        controllerAs = 'ciudadanoCtrl';
        restrict = 'E';
        scope = {
            ciudadano: "="
        };
        templateUrl =  'templates/editarCiudadanosModel.html';
        controller = CiudadanoController;

    }

    app.directive(CiudadanoDirective);
}