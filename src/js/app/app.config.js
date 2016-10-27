'use strict';
angular.module('blog').
    config(
        function (
            $locationProvider,
            $routeProvider
        ){
            $locationProvider.
                    html5Mode({
                enabled:true
                })
            $routeProvider.
                when("/",{
                        template: "<blog-list></blog-list>"
                }).
                when("/about",{
                        templateUrl: "/templates/about.html"
                }).
                when("/blog/:id",{
                        template: "<blog-detail></blog-detail>"
                }).
                // when("/blog/:id/:abc",{
                //         template: "<blog-list></blog-list>"
                // }).
                otherwise({
                        template: "Page not Found"
                })
    });