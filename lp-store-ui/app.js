var app = angular.module("store-app", []);

app.controller('StoreController', ['$scope','$http', function($scope, $http) {
    $http.get("http://localhost:8000/data").then(result => $scope.plates = result.data);
}]);

