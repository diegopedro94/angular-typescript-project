/**
 * Created by dpedro on 1/26/2016.
 */

module DomicilioModel {

    export class Domicilio {
        private calle: string;
        private altura: number;

        constructor(calle: string, altura: number) {
            this.calle = calle;
            this.altura = altura;
        }
    }

}

export = DomicilioModel