angular.module('directivePractice')
.controller('lessonCtrl', function($scope, lessonSrv) {
  $scope.lessons = lessonSrv.lessons;

  $scope.test = 'Two-way data binding!';

  $scope.announceDay = function(lesson, day) {
    alert(lesson + ' is active on ' + day + '.');
  }

})
