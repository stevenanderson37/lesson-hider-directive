angular.module('directivePractice')
.service('lessonSrv', function($http) {
  var lessonNames = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  this.lessons = lessonNames;

  this.getSchedule = function() {
    return $http.get('../schedule.json');
  }
})
