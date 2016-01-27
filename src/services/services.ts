/**
 * Created by dpedro on 1/22/2016.
 */

/// <reference path="../../typings/underscore/underscore.d.ts" />
import {getModule} from "./../app/app.ts";
import {Ciudadano} from "./../model/CiudadanoModel.ts"
import {Domicilio} from "./../model/domicilioModel.ts"
//import {IHttpPromiseCallbackArg} from "angular"

module Services {

    var app = getModule();

    export class CiudadanoService {
        public ciudadanoId = 0;
        public ciudadanos: Array<Ciudadano> = [];

        /* @ngInject */
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {}

        findAll(): ng.IPromise<any> {
            return this.$http.get('http://localhost:8081/ciudadanos')
                             .then((response: ng.IHttpPromiseCallbackArg<Ciudadano[]>): Ciudadano[] => {
                                 var ciudadanos = _.union(this.ciudadanos,response.data);
                                 this.ciudadanos = _.unique(ciudadanos);
                                 return this.ciudadanos;
                             }).catch((response) => {
                                 return console.log(response, "ERROR DE SERVICIO!!");
                             });
        }

        crearCiudadano(id: number,nombre: string, apellido: string, domicilio: Domicilio) {
            this.ciudadanoId = id;
            var ciudadano = new Ciudadano(this.ciudadanoId,nombre,apellido,domicilio);
            return ciudadano;
        }

        agregarCiudadano(ciudadano: Ciudadano) {
            this.ciudadanos.push(ciudadano);
        }

        obtenerCiudadanoPorId(id: number) {
            return _.find(this.ciudadanos, (ciudadano) => {
                return ciudadano.id == id;
            })
        }
    }

    app.service('ciudadanoService',CiudadanoService);

}

export = Services;