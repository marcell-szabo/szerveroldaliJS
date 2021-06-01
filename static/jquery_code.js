$.validator.addMethod("alphanumeric", function (value, element) {
    return this.optional(element) || /^[a-zA-z0-9]+$/i.test(value);
}, "Letters, numbers, and underscores only please");

function sendAJAX(element, targetURL, id, addToHistory = false, path = '', newURL = '') {
    const clicked = element
    $.ajax({
        type: "GET",
        url: targetURL,
        success: function (result) {
            $(id).html(result)
            console.log('kaki2')
            if(addToHistory) {
                console.log('kaki2')
                state = {page: path}
                // it is always ordered correctly, so this is sufficient
                history.pushState(state, '', newURL)
            }
        },
        error: function (result) {
            $("html").html('error')
        }
    })
}

function openNav(e) {
    const sidenav  = $('#sidenav')
    if ($(window).width() < 767) {
        sidenav.prepend("<a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav(null)\">x</a>")
        sidenav.css('width', '100%')
        sidenav.css('text-align', 'center')
    } else {
        const width = '150px'
        sidenav.css('width', width)
        $('.transition').css('margin-left', width)
        $('footer').css('width', `calc(100% - ${width})`)
    }
}

function closeNav(e) {
    const sidenav  = $('#sidenav')
    if ($(window).width() < 767) {
        setTimeout(() => {
            $('#sidenav a:first-child').remove()
        }, 500)
        sidenav.css('width', '1px')
        sidenav.css('text-align', 'left')
    } else {
        sidenav.css('width', '1px')
        $('.transition').css('margin-left', '0px')
        $('footer').css('width', '100%')
    }
}

function editmyclass() {
    sendAJAX(this, '/myclass/edit/', '#myclassdiv')
}
function submitmyclass(form) {
    event.preventDefault()
    $.ajax({
        type: "POST",
        url: '/myclass/save/',
        data: $(form).serialize(),
        success: function (result) {
            $('#myclassdiv').html(result)
        },
        error: function (result) {
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

    $('#sidenav').hover(openNav, closeNav)
    $('#hamburgerbutton').click(openNav)
    $('#myclass').click(function (e) {
        e.preventDefault()
        const url = '/myclass/'
        if(url !== window.location.pathname)
            sendAJAX(this, url, '#main', true, 'myclass', '/myclass/')
    })
    $(window).bind("popstate", function(e) {
        var state = e.originalEvent.state;
        location.reload()
    });


});