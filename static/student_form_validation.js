$.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^[a-zA-z0-9]+$/i.test(value);
}, "Letters, numbers, and underscores only please");

$(document).ready(function () {

    $('#student_form').validate({ // initialize the plugin
        rules: {
            firstname: {required: true},
            lastname: {required: true},
            zip: {digits: true},
            email: {required: true, email: true},
            studentid: {required: true, alphanumeric: true},
            class: {required: true}
        },
        submitHandler: function (form) { // for demo
            form.submit()
        }
    });

});