angular.module('directivePractice')
.controller('lessonCtrl', function($scope, lessonSrv) {
  $scope.lessons = lessonSrv.lessons;

  $scope.test = 'Two-way data binding!';

  $scope.announceDay = function(lesson, day) {
    if (!day) {
      alert(lesson + ' is not in the schedule.');
    } else {
      alert(lesson + ' is active on ' + day + '.');
    }
  }

})
