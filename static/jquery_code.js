$.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^[a-zA-z0-9]+$/i.test(value);
}, "Letters, numbers, and underscores only please");

function sendAJAX(element, targetURL) {
    const clicked = element
    $.ajax({type: "GET",
            url: targetURL,
            success: function(result){
                $(".container").html(result)
            },
            error: function(result) {
                $("html").html('error')
            }
            })
}

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