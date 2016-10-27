'use strict';

angular.module('blogDetail').
component('blogDetail',{
    templateUrl: "/templates/blog-detail.html",
    controller: function ($routeParams, $scope) {

        var blogItems = [
            {title: "Harry Potter", id: 1, description: "This is a very good fantasy book", publishDate: "10/23/2016"},
            {title: "Tea is Healthy", id: 2, description: "This is a list of advantages of tea"},
            {title: "EDM concenrt", id: 3, description: "These DJs will play"},
            {title: "Tourist Places", id: 4, description: "This is a list of places"},
        ]     //simulating back-end data

        //console.log($routeParams)
        $scope.title = "Blog " + $routeParams.id

    }

});
