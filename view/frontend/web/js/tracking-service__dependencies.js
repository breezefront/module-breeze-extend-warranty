define([
    'jquery'
], function ($) {
    'use strict';

    if (!$.inArray) {
        $.inArray = function( elem, arr, i ) {
            return arr == null ? -1 : Array.prototype.indexOf.call( arr, elem, i );
        };
    }

    $.breezemap['Magento_Customer/js/section-config'] = $.sections;
});
