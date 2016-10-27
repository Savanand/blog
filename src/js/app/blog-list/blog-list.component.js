'use strict';

angular.module('blogList').
    component('blogList',{
        //template: "<div class=''><h1 class='.new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!!!</button> </div>",
        templateUrl: "/templates/blog-list.html",
        controller: function (Post, $routeParams, $scope) {

            // Post.query(function (data) {
            //     $scope.notFound = true
            //     angular.forEach(data, function (post) {
            //         if(post.id == $routeParams.id){
            //             $scope.notFound = false
            //             $scope.post = post
            //         }
            //     })
            // })




            console.log($routeParams)
            // var blogItems = [
            //     {title: "Harry Potter", id: 1, description: "This is a very good fantasy book", publishDate: "10/23/2016"},
            //     {title: "Tea is Healthy", id: 2, description: "This is a list of advantages of tea"},
            //     {title: "EDM concenrt", id: 3, description: "These DJs will play"},
            //     {title: "Tourist Places", id: 4, description: "This is a list of places"},
            // ]     //simulating back-end data
            // $scope.items = blogItems;
            $scope.items = Post.query();
            //
            // console.log("Hello")
            // $scope.title = "Hi there" //scope allows add in own context variable into blogListController'
            // $scope.clicks= 0;
            // $scope.someClickTest = function () {
            //     console.log("clicked")
            //     $scope.clicks += 1;
            //     $scope.title = "Clicked "+ $scope.clicks+ " times"
            // }
        }

    });
//     controller('BlogListController',function ($scope) {
//         // console.log("Hello")
//         $scope.title = "Hi there" //scope allows add in own context variable into blogListController'
//         $scope.clicks= 0;
//         $scope.someClickTest = function () {
//             console.log("clicked")
//             $scope.clicks += 1;
//             $scope.title = "Clicked "+ $scope.clicks+ " times"
//         }
// });
  //  component('blogList');
//