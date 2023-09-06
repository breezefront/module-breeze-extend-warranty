define([
    'jquery'
], function ($) {
    'use strict';

    $(document).on('breeze:mount:simpleProductWarranty', function (event, data) {
        data.el.simpleProductWarranty(data.settings);
    });
});
