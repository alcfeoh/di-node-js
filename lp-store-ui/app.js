var app = angular.module("store-app", []);

app.controller('StoreController', ['$scope','$http', function($scope, $http) {
    $http.get("http://localhost:8080/plates.json").then(result => $scope.plates = result.data);
}]);

