'use strict';

angular.module('blogDetail').
component('blogDetail',{
    templateUrl: "/templates/blog-detail.html",
    controller: function (Post, $http, $location, $routeParams, $scope) {

        // console.log(Post.query())
        // console.log(Post.get())

        Post.query(function (data) {
            $scope.notFound = true
            angular.forEach(data, function (post) {
                if(post.id == $routeParams.id){
                    $scope.notFound = false
                    $scope.post = post
                    resetReply()
                }
            })
        })

        $scope.addReply = function () {
            console.log($scope.reply)
            $scope.post.comments.push($scope.reply)
            resetReply()
        }
        
        function resetReply() {
            $scope.reply = {
                    "id": $scope.post.comments.length + 1,
                    "text": ""
            }

        }

        // $http.get("/json/posts.json", {}).then(successCallback, errorCallback);
        //
        // function successCallback(response, status, config, statusText) {
        //
        //     $scope.notFound = true
        //     var blogItems= response.data
        //     $scope.posts = blogItems
        //
        //     angular.forEach(blogItems, function (post) {
        //
        //         if(post.id == $routeParams.id){
        //             $scope.notFound = false
        //             $scope.post = post
        //         }
        //     })
        // }
        //
        // function errorCallback(response, status, config, statusText) {
        //     $scope.notFound = true
        //     console.log(response)
        // }
        
        //
        // var blogItems = [
        //     {title: "Harry Potter", id: 1, description: "This is a very good fantasy book", publishDate: "10/23/2016"},
        //     {title: "Tea is Healthy", id: 2, description: "This is a list of advantages of tea", publishDate: "9/5/2014"},
        //     {title: "EDM concenrt", id: 3, description: "These DJs will play", publishDate: "1/2/2015"},
        //     {title: "Tourist Places", id: 4, description: "This is a list of places", publishDate: "7/4/2016"},
        // ]     //simulating back-end data

        //console.log($routeParams)
        // $scope.title = "Blog " + $routeParams.id
        // $scope.notFound = true
        //
        // angular.forEach(blogItems, function(post) {
        //     if(post.id == $routeParams.id){
        //         $scope.notFound = false
        //         $scope.post= post
        //         console.log($routeParams.id)
        //     }
        // })
        if($scope.notFound){
            console.log("Not Found")
            $location.path("/404")
        }
    }
});
