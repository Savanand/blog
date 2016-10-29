/**
 * Created by aniket on 10/29/16.
 */
'use strict';

angular.module('blogNav').
directive('blogNav', function () {

    return{
        restrict: 'E',
        templateUrl: '/templates/blog-nav.html',
        link: function(scope, element, attr){

        }
    }
})