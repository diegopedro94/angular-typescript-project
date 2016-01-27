/**
 * Created by dpedro on 1/21/2016.
 */
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="./services.ts"/>
var Controllers;
(function (Controllers) {
    var getModule = AppModule.getModule;
    var app = getModule();
    var CiudadanoController = (function () {
        function CiudadanoController($state, $stateParams, ciudadanoService) {
            this.idCiudadano = 0;
            this.ciudadanos = [];
            this.state = $state;
            this.stateParams = $stateParams;
            this.ciudadanoService = ciudadanoService;
            this.asignarCiudadanos();
        }
        CiudadanoController.prototype.asignarCiudadanos = function () {
            this.ciudadanos = this.ciudadanoService.ciudadanos;
        };
        CiudadanoController.prototype.agregarCiudadano = function () {
            var ciudadano = this.ciudadanoService.crearCiudadano(this.nombre, this.apellido, this.documento);
            this.ciudadanoService.agregarCiudadano(ciudadano);
        };
        CiudadanoController.$inject = ['$state', '$stateParams', 'ciudadanoService'];
        return CiudadanoController;
    })();
    var EdicionCiudadanoController = (function () {
        function EdicionCiudadanoController($state, $stateParams, ciudadanoService) {
            this.state = $state;
            this.stateParams = $stateParams;
            this.ciudadanoService = ciudadanoService;
            this.obtenerCiudadano();
        }
        EdicionCiudadanoController.prototype.obtenerCiudadano = function () {
            this.ciudadano = this.ciudadanoService.getTareaaPorId(this.stateParams.id);
            if (!this.ciudadano) {
                this.state.go('cargaCiudadano');
                return;
            }
            this.nombre = this.ciudadano.nombre;
            this.apellido = this.ciudadano.apellido;
            this.documento = this.ciudadano.documento;
        };
        ;
        EdicionCiudadanoController.prototype.aceptar = function () {
            this.ciudadano.nombre = this.nombre;
            this.ciudadano.apellido = this.apellido;
            this.ciudadano.documento = this.documento;
            this.state.go('cargaCiudadano');
        };
        EdicionCiudadanoController.$inject = ['$state', '$stateParams', 'ciudadanoService'];
        return EdicionCiudadanoController;
    })();
    app.controller('ciudadanoCtrl', CiudadanoController);
    app.controller('edicionCiudadanoController', EdicionCiudadanoController);
})(Controllers || (Controllers = {}));
//# sourceMappingURL=controllers.js.map