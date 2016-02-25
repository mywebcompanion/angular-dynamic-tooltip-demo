/**
 * Created by ARUN on 24/2/2016.
 */

var testapp = testapp || {};

testapp.directive('dynamicTooltip',function($sce,$http){
    return{
        restrict : 'AE',
        scope:{
            message : '@',
            callback : '&',
            outtip : '='
        },
        templateUrl : '../views/dynamictooltip.html',
        link : function( scope, element, attr){
            $(element).bind('mouseover', function(e) {
                var promise = $http.get('/product');
                promise.success(function(resp){
                    scope.outtip = $sce.trustAsHtml("<b>" + "pa" + resp.product + "</b>");
                });

            });
        }
    }
});