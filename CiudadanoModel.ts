/**
 * Created by dpedro on 1/22/2016.
 */

import {Domicilio} from "./domicilioModel.ts";

module CiudadanoModel {

    export class Ciudadano {
        public id;
        private documento;
        private apellido;
        private nombre;
        private domicilio;

        constructor(id: number,nombre: string, apellido: string, documento: number, domicilio: Domicilio) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.documento = documento;
            this.domicilio = domicilio;
        }
    }

}

export = CiudadanoModel;