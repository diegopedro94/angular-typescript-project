/**
 * Created by dpedro on 1/21/2016.
 */
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angular-ui-router/angular-ui-router.d.ts" />
// JAVASCRIPT
//var myApp = angular.module('myApp',['controllers']);
// TYPESCRIPT
var AppModule;
(function (AppModule) {
    var app = angular.module('myApp', ['ui.router']);
    AppModule.getModule = function () {
        return angular.module('myApp');
    };
})(AppModule || (AppModule = {}));
//# sourceMappingURL=app.js.map