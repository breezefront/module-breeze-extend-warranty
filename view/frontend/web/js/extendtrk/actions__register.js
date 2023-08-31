define([
    'jquery',
    'underscore'
], function ($, _) {
    'use strict';

    const key = _.findKey($.breezemap, (item) => {
            return item
                && typeof item.trackProductAddToCart === 'function'
                && typeof item.trackOfferAddToCart === 'function'
                && typeof item.trackProductRemoveFromCart === 'function'
                && typeof item.trackOfferRemoveFromCart === 'function'
                && typeof item.trackProductQtyUpdate === 'function';
        });

    if (key) $.breezemap['Extend_Warranty/js/extendtrk/actions'] = $.breezemap[key];
});
