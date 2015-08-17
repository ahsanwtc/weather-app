// controller
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path('/forecast');
    }

}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams',  'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = function (dekg) {
        return Math.round((1.8 * (dekg - 273)) + 32);
    }
    $scope.convertToDate = function(d) {

        return new Date(d * 1000);
    }

}]);