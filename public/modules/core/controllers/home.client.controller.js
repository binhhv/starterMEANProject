'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        $scope.alerts = [
            {
                icon:'glyphicon-user',
                color:'btn-success',
                total:'20,408',
                descriptions:'TOTAL CUSTOMERS'
            },
            {
                icon:'glyphicon-calendar',
                color:'btn-primary',
                total:'8,382',
                descriptions:'UPCOMING EVENTS'
            },
            {
                icon:'glyphicon-th-large',
                color:'btn-success',
                total:'527',
                descriptions:'NEW CUSTOMERS IN 24H'
            },
            {
                icon:'glyphicon-pencil',
                color:'btn-info',
                total:'85,000',
                descriptions:'EMAILS SENT'
            },
            {
                icon:'glyphicon-piggy-bank',
                color:'btn-warning',
                total:'268',
                descriptions:'FOLLOW UP REQUIRED'
            },
            {
                icon:'glyphicon-ice-lolly',
                color:'btn-danger',
                total:'348',
                descriptions:'REFERRALS TO MODERATE'
            }
        ];
	}
]);