/**
 * Created by dpedro on 1/21/2016.
 */

/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="./services.ts"/>

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
        public documento;
        public domicilio;


        static $inject = ['$state','$stateParams','ciudadanoService'];

        constructor(private $state: ng.ui.IStateService,private $stateParams: ng.ui.IStateParamsService,private ciudadanoService: CiudadanoService) {
            this.asignarCiudadanos();
        }

        public asignarCiudadanos() {
            this.ciudadanoService.findAll().then((ciudadanos) => this.ciudadanos = ciudadanos);
        }

        public agregarCiudadano() {
            var ciudadano = this.ciudadanoService.crearCiudadano(this.nombre, this.apellido, this.documento, this.domicilio);
            this.ciudadanoService.agregarCiudadano(ciudadano);
        }
    }

    class EdicionCiudadanoController {
        private state;
        private stateParams;
        private ciudadanoService;
        public nombre;
        public apellido;
        public documento;
        public ciudadano;
        public domicilio;

        static $inject = ['$state','$stateParams','ciudadanoService'];

        constructor($state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService, ciudadanoService: CiudadanoService) {
            this.state = $state;
            this.stateParams = $stateParams;
            this.ciudadanoService = ciudadanoService;
            this.obtenerCiudadano();
        }

        private obtenerCiudadano() {
            this.ciudadano = this.ciudadanoService.obtenerCiudadanoPorId(this.stateParams.id);
            console.log(this.ciudadano);
            if(!this.ciudadano) {
                this.state.go('cargaCiudadano');
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
            this.state.go('cargaCiudadano');
        }


    }

    app.controller('ciudadanoCtrl', CiudadanoController);
    app.controller('edicionCiudadanoController', EdicionCiudadanoController);
}

export = Controllers;