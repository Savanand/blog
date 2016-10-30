'use strict';

angular.module('blogList').
    component('blogList',{
        //template: "<div class=''><h1 class='.new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click me!!!</button> </div>",
        templateUrl: "/templates/blog-list.html",
        controller: function (Post, $location, $routeParams, $rootScope, $scope) {
            console.log($location.search())
            var q = $location.search().q
            console.log(q)

            if(q){
                $scope.query = q
                $scope.searchQuery = true
            }


            $scope.order = "title"
            $scope.goToItem = function(post){
                $rootScope.$apply(function () {
                    $location.path("/blog/" + post.id)
                })
            }
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


            $scope.changeCols = function (number) {

                if(angular.isNumber(number)){
                    $scope.numCols = number
                }
                else {
                    $scope.numCols = 2
                }

                setupColumn($scope.items, $scope.numCols)
            }

            $scope.loadingQuery = false;
            $scope.$watch(function () {   // if loading query do it otherwise if not set to default
                console.log($scope.query)

                if($scope.query){
                    $scope.loadingQuery = true
                    $scope.cssClass = 'col-sm-12'
                    if($scope.query != q){
                        $scope.searchQuery = false;
                    }
                }
                else {
                    if($scope.loadingQuery){
                        setupColumn($scope.items, 2)
                        $scope.loadingQuery = false
                    }
                }
            })

            function setupColumn(data, number) {

                if(angular.isNumber(number)){
                    $scope.numCols = number
                }
                else {
                    $scope.numCols = 2
                }
                $scope.cssClass = 'col-sm-' + (12/$scope.numCols)
                $scope.items = data
                $scope.colItems = chunkArrayInGroups(data, $scope.numCols)
            }
            
            
            Post.query(function (data) {

                // for columns
                // var numCols = 2
                // $scope.cssClass = 'col-sm-' + (12/numCols)
                //
                //
                // $scope.items = data
                // $scope.colItems = chunkArrayInGroups(data, numCols)

                    setupColumn(data, 2)

                },
                function (errData) {

            })
            //$scope.items = Post.query();
            //
            // console.log("Hello")
            // $scope.title = "Hi there" //scope allows add in own context variable into blogListController'
            // $scope.clicks= 0;
            // $scope.someClickTest = function () {
            //     console.log("clicked")
            //     $scope.clicks += 1;
            //     $scope.title = "Clicked "+ $scope.clicks+ " times"
            // }

            function chunkArrayInGroups(array, unit){
                var results = []
                var length = Math.ceil(array.length / unit);
                for(var i = 0; i< length; i++){
                    results.push(array.slice(i * unit, (i + 1) * unit))
                }
                return results
            }
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