/**
 * Created by dpedro on 1/21/2016.
 */

/// <reference path="typings/angularjs/angular.d.ts" />

import {getModule} from "./app.ts";
import {CiudadanoService} from "./services.ts";


module Controllers {
    var app = getModule();
    'use strict';

    class CiudadanoController {

        public idCiudadano = 0;
        public ciudadanos = [];
        public nombre;
        public apellido;
        public domicilio;
        private $stateParams;


        /*@ngInject*/
        constructor(private $state: ng.ui.IStateService,$stateParams: ng.ui.IStateParamsService,private ciudadanoService: CiudadanoService) {
            console.log(this.ciudadanos);
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
    }

    class EdicionCiudadanoController {
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
            console.log(this.ciudadano);
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