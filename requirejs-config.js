var requireContext = require.config({
    "context": "theme",
    paths: {
        'jquery': "https://code.jquery.com/jquery-3.3.1",
        'bootstrap': "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.bundle.min"
    }
});
requireContext(['require', 'jquery'], function (require, $) {
    $.noConflict();
    require(['bootstrap']);
});

var config = {};