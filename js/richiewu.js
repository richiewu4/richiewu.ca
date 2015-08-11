var app = angular.module('richiewu' , ['sidenavDemo1']);

app.controller('skillsCtrl', ['$scope', function($scope){

  $scope.skills = [
    {
      skillName: 'HTML/CSS',
      skillLevel: 80
    },
    {
      skillName: 'AngularJS',
      skillLevel: 40
    },
    {
      skillName: 'Node.js',
      skillLevel: 40
    },
    {
      skillName: 'MongoDB',
      skillLevel: 30
    }
  ];

  $scope.languages = [
    {
      skillName: 'Java',
      skillLevel: 65
    },
    {
      skillName: 'JavaScript',
      skillLevel: 60
    },
    {
      skillName: 'C',
      skillLevel: 25
    },
    {
      skillName: 'Python',
      skillLevel: 10
    }
  ];

}]);
