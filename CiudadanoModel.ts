/**
 * Created by dpedro on 1/22/2016.
 */

import {Domicilio} from "./domicilioModel.ts";

module CiudadanoModel {

    export class Ciudadano {
        public id;
        private apellido;
        private nombre;
        private domicilio;

        constructor(id: number,nombre: string, apellido: string, domicilio: Domicilio) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.domicilio = domicilio;
        }
    }

}

export = CiudadanoModel;