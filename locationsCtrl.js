angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){

$scope.getInfo = mainSrv.travI();

})
