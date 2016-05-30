angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

    var dest = $stateParams.id;
    //console.log(typeof $stateParams.id);
    for (var i = 0; i < mainSrv.travelInfo.length; i++) {
        if (parseInt(dest) === mainSrv.travelInfo[i].id) {
            $scope.place = mainSrv.travelInfo[i];

        }
    }


})
