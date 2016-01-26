/**
 * Created by dpedro on 1/22/2016.
 */
var CiudadanoModel;
(function (CiudadanoModel) {
    var Ciudadano = (function () {
        function Ciudadano(id, nombre, apellido, documento) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.documento = documento;
        }
        return Ciudadano;
    })();
    CiudadanoModel.Ciudadano = Ciudadano;
})(CiudadanoModel || (CiudadanoModel = {}));
//# sourceMappingURL=CiudadanoModel.js.map