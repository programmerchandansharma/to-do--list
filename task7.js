
var app=angular.module("myapp", []);

app.controller("mycontroller", function($scope){
                 $scope.moredata=[];

                 $scope.savedata=function(){
                    var user={
                        work:$scope.work,
                        date:$scope.time
                      
                    }
                    $scope.moredata.push(user);
                    
                    $scope.work="",
                    $scope.time=""
                   
                 }
                 $scope.daletedata=function(user){
                    $scope.moredata.splice($scope.moredata.indexOf(user), 1)
                 }
})