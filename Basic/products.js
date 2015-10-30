(function() {
    var app = angular.module('store-products', []);

    // All the custom directives here
    
    app.directive('productTitle', function() {
        return {
            restrict : 'E',   // E stands for element 
            templateUrl : 'product-title.html'  // url for a template
        };
    });

    app.directive('productPanel', function() {
        return {
            restrict : 'E',
            templateUrl : 'product-panel.html',
            controller : function() {
                this.tab = 1;  // Initialization

                this.selectTab = function(selectedTab) {
                    debugger;
                    this.tab = selectedTab;
                };

                this.isSelected = function(checkTab) {
                    debugger;
                    return this.tab === checkTab;
                }
            },
            controllerAs : 'panel'
        };
    });

    app.directive('productReview', function() {
        return {
            restrict : 'E',
            templateUrl : 'product-review.html'
        };
    });

    app.directive('productSpec', function() {
        return {
            restrict : 'A',
            templateUrl : 'product-spec.html'
        };
    });
})();