angular.module('app').controller('quotesCtrl', function($scope, quoteSrv) {
    
    $scope.quotes = quoteSrv.getQuotes();

    $scope.deleteMe = function(textToDelete){
        quoteSrv.removeData(textToDelete);
      };
      
      $scope.addQuote = function(){
        var newQuote = {
          text:$scope.newQuoteText,
          author:$scope.newQuoteAuthor
        };
        if(quoteSrv.addData(newQuote))
        {
          $scope.newQuoteText = '';
          $scope.newQuoteAuthor= '';
        }
      };
      
    });