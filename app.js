(function () {
  'use strict';
  angular.module('nameCalculator', [])
  .controller('nameCalculatorController', function($scope) {
    $scope.name = "";
    $scope.totalLetters = 0;
    $scope.numberLettersFunction = function() {
      $scope.totalLetters = totalName($scope.name);
    };
    function totalName(string) {
      var i = 0, newString = string.length;
      for(i; i < newString; i++) {
       string = string.replace(" ", "");
      }
      return string.length;
    }


  })
})
();
