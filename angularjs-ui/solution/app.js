var app = angular.module("store-app", []);

app.controller('StoreController', function($scope, $http) {

    console.log('We are ready');

    $http.get('http://localhost:8000/data')
        .success(function(data){
            $scope.plates = data;
        })
        .error(function(err){
            alert('End of the world');
        });

    $scope.addToCart = function(id) {
        $http.put('http://localhost:8000/cart/' + id)
            .success(function(data){
                alert('Plate added to cart');
            });
    }

});

app.controller('CartController', function($scope, $http) {

    $scope.removeFromCart = function(id) {
        $http.delete('http://localhost:8000/cart/' + id)
            .success(function(data){
                alert('Plate removed from cart');
                $scope.refreshCart();
            });
    };

    $scope.refreshCart = function() {
        $http.get('http://localhost:8000/cart')
            .success(function(data){
                $scope.cartPlates = data;
            })
            .error(function(err){
                alert('End of the world');
            });
    };

    $scope.refreshCart();
});

