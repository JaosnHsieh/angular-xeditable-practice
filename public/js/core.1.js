// public/core.js
var app = angular.module('app', []);

// app.controler('mainController',function mainController($scope, $http) {   
// });

app.controller('mainController', function mainController($scope, $http) {
    $scope.formData = {};
    // when landing on the page, get all papers and show them
    $http.get('/api/papers')
        .success(function(data) {
            $scope.papers = data;
            console.table(data);
            $scope.tableHeaders = [];
            for(var key in data[0]){
                $scope.tableHeaders.push(key);
            }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/papers', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.papers = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/papers/' + id)
            .success(function(data) {
                $scope.papers = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});
