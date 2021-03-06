'use strict';


angular.module('confirmClick').
    directive('confirmClick', function () {

    return{
        restrict: 'A',
        link: function(scope, element, attr){
            var msg = attr.confirmClick || "Are you sure?";
            var clickAction = attr.confirmedClick;
            element.bind('click', function (event) {

                event.stopImmediatePropagation()  // preveting other things to happen
                event.preventDefault()
                if(window.confirm(msg)){
                    scope.$eval(clickAction)
                }
                else{
                    console.log("Cancelled")
                }

            })

        }
    }
})
// angular.module('confirmClick').
//     directive('confirmClick', function ($rootScope, $location) {
//
//     return{
//         scope: {
//             message: "@message",
//             eq: "=eq",
//             post: "=post"
//         },
//         restrict: "E",
//         template: "<a ng-href='#'>{{post.title}}</a>",
//         link: function (scope, element, attr) {
//
//             var msg = scope.message || "are you sure?"
//             element.bind("click", function (event) {
//                 if(window.confirm(msg)){
//                     console.log('/blog/' +scope.post.id)
//                     $rootScope.$apply(function () {
//                         $location.path("/blog/" +scope.post.id)
//                     })
//                 }
//             })
//
//
//
//             console.log(scope.post)
//             console.log(scope.eq)
//             console.log(attr.eq)
//             // console.log(element)
//             // console.log(attr)
//             // console.log(attr.confirmClick)
//             // console.log(attr.ngHref)
//             // console.log(attr.href)
//         }
//     }
// })