/**
 * Created by aniket on 10/29/16.
 */
'use strict';

angular.module('blogNav').
directive('blogNav', function (Post, $location) {

    return{
        restrict: 'E',
        templateUrl: '/templates/blog-nav.html',
        link: function(scope, element, attr){
            scope.items = Post.query()
            scope.selectItem = function($item, $model, $label){
                console.log($item)
                console.log($model)
                console.log($label)
                $location.path("/blog/" + $item.id)
                scope.searchQuery = ""
            }
            scope.seachItem = function () {
                console.log(scope.searchQuery)
                $location.path("/blog/").search("q", scope.searchQuery)
            }
        }
    }
})