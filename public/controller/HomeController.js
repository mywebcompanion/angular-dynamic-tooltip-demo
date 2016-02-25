/**
 * Created by ARUN on 24/2/2016.
 */

var testapp = testapp || {};

testapp.controller('HomeController', function($scope,$sce){

    $scope.product = {};
    $scope.product.desc = "Loading ....";
    $scope.message = "loading....";
    $scope.tooltip = {};
    $scope.kaka = "maka";
    $scope.tooltip.toolMessage = $sce.trustAsHtml("<b>" + "loading lah..." + "</b>");
    $scope.alertme = function(alertMessage){
        alert(alertMessage);
    }
   /* $scope.someFunction = function(name) {
        console.log("Some Function" + name);
        //fetch data or perform some process
        $http.get('/product')
            .success(function (data) {
                console.log(data);
                $scope.product.desc = data.product;
            });
    }*/
});