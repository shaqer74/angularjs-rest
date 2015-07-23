function RestTest($scope, $http) {
    $http.get('http://localhost:8080/grails-250-rest/restTest/get/1').
        success(function(data) {
            $scope.restTest = data;
        });
}