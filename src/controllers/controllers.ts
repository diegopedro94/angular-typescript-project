/**
 * Created by dpedro on 1/21/2016.
 */

/// <reference path="../../typings/angularjs/angular.d.ts" />

import {getModule} from "./../app/app.ts";
import {CiudadanoService} from "./../services/services.ts";
import {Ciudadano} from "./../model/CiudadanoModel.ts"

module Controllers {
    var app = getModule();
    'use strict';

    export class CiudadanoController {

        public idCiudadano = 1;
        public ciudadanos = [];
        public nombre;
        public apellido;
        public domicilio;
        private ciudadano: Ciudadano;
        private $stateParams;


        /*@ngInject*/
        constructor(private $state: ng.ui.IStateService,$stateParams: ng.ui.IStateParamsService,private ciudadanoService: CiudadanoService) {
            this.$stateParams = $stateParams;
            this.asignarCiudadanos();
        }

        public asignarCiudadanos() {
            this.ciudadanoService.findAll().then((ciudadanos) => this.ciudadanos = ciudadanos);
        }

        public agregarCiudadano() {
            var ciudadano = this.ciudadanoService.crearCiudadano(this.idCiudadano,this.nombre, this.apellido, this.domicilio);
            this.ciudadanoService.agregarCiudadano(ciudadano);
        }

        editarCiudadano(ciudadano: Ciudadano) {
            this.ciudadano = ciudadano;
        }
    }

    export class EdicionCiudadanoController {
        public nombre;
        public apellido;
        public documento;
        public ciudadano;
        public domicilio;
        private $stateParams;

        /*@ngInject*/
        constructor(private $state: ng.ui.IStateService,$stateParams: ng.ui.IStateParamsService,private ciudadanoService: CiudadanoService) {
            this.$stateParams = $stateParams;
            this.obtenerCiudadano();
        }

        private obtenerCiudadano() {
            this.ciudadano = this.ciudadanoService.obtenerCiudadanoPorId(this.$stateParams.id);
            if(!this.ciudadano) {
                this.$state.go('cargaCiudadano');
                return;
            }
            this.nombre = this.ciudadano.nombre;
            this.apellido = this.ciudadano.apellido;
            this.documento = this.ciudadano.documento;
            this.domicilio = this.ciudadano.domicilio;
        };

         aceptar() {
            this.ciudadano.nombre = this.nombre;
            this.ciudadano.apellido = this.apellido;
            this.ciudadano.documento = this.documento;
            this.ciudadano.domicilio = this.domicilio;
            this.$state.go('cargaCiudadano');
        }


    }


    app.controller('ciudadanoCtrl', CiudadanoController);
    app.controller('edicionCiudadanoController', EdicionCiudadanoController);
}

export = Controllers;