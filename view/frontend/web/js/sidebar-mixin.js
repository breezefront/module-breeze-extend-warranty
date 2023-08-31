define([
    'jquery',
    'underscore',
    'Magento_Customer/js/customer-data'
], function ($, _, customerData) {
    'use strict';

    $.mixin('sidebar', {
        /**
         * @override
         */
        _removeItemAfter: function (original, elem) {
            var productData = this._getProductById(Number(elem.data('cart-item')));

            if (!_.isUndefined(productData)) {
                $(document).trigger('ajax:removeFromCart', {
                    productIds: [productData['product_id']],
                    productInfo: [
                        {
                            'id': productData['product_id']
                        }
                    ]
                });

                // CUSTOMIZATION HERE: trigger additional event for Extend Warranty
                $(document).trigger('extend:removeFromCart', productData);

                if (window.location.href.indexOf(this.shoppingCartUrl) === 0) {
                    window.location.reload();
                }
            }
        },

        /**
         * Retrieves product data by Id.
         *
         * @param {Number} productId - product Id
         * @returns {Object|undefined}
         * @private
         */
        _getProductById: function (productId) {
            return _.find(customerData.get('cart')().items, function (item) {
                return productId === Number(item['item_id']);
            });
        }
    });
});
