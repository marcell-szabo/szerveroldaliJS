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

function openNav(e) {
    console.log('kaki')
    if($(window).width() < 767) {
        $('#sidenav').prepend("<a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav(null)\">x</a>")
        $('#sidenav').css('width', '100%')
        $('#sidenav').css('text-align', 'center')
    } else {
        const width = '150px'
        $('#sidenav').css('width', width)
        $('.transition').css('margin-left', width)
        $('footer').css('width', `calc(100% - ${width})`)
    }
}
function closeNav(e) {
    if($(window).width() < 767) {
        setTimeout(() => { $('#sidenav a:first-child').remove()}, 500)
        $('#sidenav').css('width', '1px')
        $('#sidenav').css('text-align', 'left')
    } else {
        $('#sidenav').css('width', '1px')
        $('.transition').css('margin-left', '0px')
        $('footer').css('width', '100%')
    }
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

    $('#sidenav').hover(openNav, closeNav)
    $('#hamburgerbutton').click(function(){
        if($(window).width() < 767)
            return openNav(null)
        return (this.tog = !this.tog) ? openNav(null) : closeNav(null);
    })
});