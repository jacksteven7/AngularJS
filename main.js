 angular.module('miAp', []);

angular.module('miAp').factory('Dato', function() {
  return {mensaje: 'Saludos desde la Fabrica!'};
});

angular.module('miAp').controller('ControladorUno', function($scope, Dato) {
  $scope.dato = Dato;
});

angular.module('miAp').controller('ControladorDos', function($scope, Dato) {
  $scope.dato = Dato;
});