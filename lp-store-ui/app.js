var app = angular.module("store-app", []);

app.controller('StoreController', ['$scope','$http', function($scope, $http) {
    $http.get("http://localhost:8000/data").then(result => $scope.plates = result.data);

    $http.get("http://localhost:8000/cart").then(result => $scope.cartItems = result.data);

    $scope.addToCart = function(id) {
        $http.put("http://localhost:8000/cart/" + id).then(result => alert("Item added to your cart"));
    }
}]);

