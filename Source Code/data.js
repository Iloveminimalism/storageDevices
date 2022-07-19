var app = angular.module('myApp',[]);
app.controller('myCtrl',function ($scope){
$scope.count=0;
$scope.addShop=function(){
    $scope.count++;
    alert("Your product has been added to the shopping cart successfully !");
}
});