$(document).ready(function () {

    $('#point_form').validate({ // initialize the plugin
        rules: {
            task: {required: true},
            description: {required: true},
            date: {required: true, date: true},
        },
        submitHandler: function (form) { // for demo
            form.submit()
        }
    });
});