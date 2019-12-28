var app = angular.module("twitterApp", ['toastr']);


app.controller("friendListController", function ($scope, $rootScope) {
    $scope.friendList = [];
    $rootScope.$on("friendlist", function (evt, list) {
        $scope.friendList = list;
    });
});



app.controller("userFormController", function ($scope, $rootScope, $http, toastr) {

    $scope.fusername = 'twitterapi';
    $scope.susername = 'twitterapi';
    $scope.isFormSubmitting = false;
    $scope.submitForm = () => {

        $scope.isFormSubmitting = true;
        $http.get(`/api/v1/twitter/friends/${$scope.fusername}/${$scope.susername}/mutual`)
            .then(function ({ data }) {
                console.log(data)

                $scope.isFormSubmitting = false;

                if (data.success) {
                    toastr.success(data.message, "Success");
                    return $rootScope.$broadcast("friendlist", data.data);
                }

                toastr.error(data.message, "Error");
                $rootScope.$broadcast("friendlist", []);

            }).catch(function (error) {
                console.log(error);
                toastr.error("Unkonwn Error", "Error");
                $rootScope.$broadcast("friendlist", []);
                $scope.isFormSubmitting = false;
            });
    };


});