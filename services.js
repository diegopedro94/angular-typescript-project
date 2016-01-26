/**
 * Created by dpedro on 1/22/2016.
 */
/// <reference path="typings/underscore/underscore.d.ts" />
var Services;
(function (Services) {
    var Ciudadano = CiudadanoModel.Ciudadano;
    var getModule = AppModule.getModule;
    var app = getModule();
    var CiudadanoService = (function () {
        function CiudadanoService() {
            this.ciudadanoId = 0;
            this.ciudadanos = [];
        }
        CiudadanoService.prototype.crearCiudadano = function (nombre, apellido, documento) {
            this.ciudadanoId = this.ciudadanoId + 1;
            var ciudadano = new Ciudadano(this.ciudadanoId, nombre, apellido, documento);
            return ciudadano;
        };
        CiudadanoService.prototype.agregarCiudadano = function (ciudadano) {
            this.ciudadanos.push(ciudadano);
        };
        CiudadanoService.prototype.getTareaaPorId = function (id) {
            return _.find(this.ciudadanos, function (ciudadano) {
                return ciudadano.id == id;
            });
        };
        return CiudadanoService;
    })();
    Services.CiudadanoService = CiudadanoService;
    app.factory('ciudadanoService', function () {
        return new CiudadanoService();
    });
})(Services || (Services = {}));
//# sourceMappingURL=services.js.map