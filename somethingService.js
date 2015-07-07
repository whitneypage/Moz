var app = angular.module('mozApp');


app.service('mainService', function($http, $q) {

   this.getMetrics = function(url) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/metrics',
            data: {
              url: url
            }
        }).then(function(response) {
            deferred.resolve(response.data)
        });
        return deferred.promise;
    }

});