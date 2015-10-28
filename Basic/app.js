(function() {
    // Firs param is app name, and second param is dependencies
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;  // Initialization

        this.selectTab = function(selectedTab) {
            this.tab = selectedTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });

    app.controller('ReviewController', function() {
        this.review = {};

        // Add the current live review to review list
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [
        {
            name : 'Dodecahedron',
            price : 2.95,
            description : 'This is Dodecahedron',
            canPurchase : true,
            images : [
                {
                    full : 'Dodecahedron.png',
                    thumb : 'Dodecahedron.png'
                }
                
            ], 
            reviews : [
                {
                    stars : 5,
                    body : 'very good',
                    author : 'qshi'
                },
                {
                    stars : 4,
                    body : 'good',
                    author : 'rohit'
                }
            ]
        },
        {
            name : 'Pentagonal Gem',
            price : 5.95,
            description : 'This is Pentagonal',
            canPurchase : true,
            images : [
                {
                    full : 'Pentagonal.jpg',
                    thumb : 'Pentagonal.jpg'
                }
                
            ],
            reviews : [
                {
                    stars : 3,
                    body : 'its ok',
                    author : 'qshi'
                },
                {
                    stars : 4,
                    body : 'um.... not bad',
                    author : 'nishant'
                }
            ]
        }
    ]
})();

