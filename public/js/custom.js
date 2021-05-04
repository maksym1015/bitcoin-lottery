jQuery("#owl-demo").owlCarousel({
    loop: true,
    nav: true,
    navText: ["<div class='owl-prev'></div>", "<div class='owl-next'></div>"],
    pagination: false,
    items: 5,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        },
        1440: {
            items: 4,
            nav: true,
            loop: true
        },
        1600: {
            items: 5,
            nav: true,
            loop: true
        }
    }
});

jQuery("#owl-home-banner").owlCarousel({
    autoplay: true,
    loop: true,
    navigation: false, // Show next and prev buttons
    dots: false,
    slideSpeed: 1000,
    paginationSpeed: 400,
    singleItem: true,
    pagination: false,
    items: 1,
});

jQuery("#owl-download-app").owlCarousel({
    autoplay: true,
    loop: true,
    navigation: false,
    dots: false,
    slideSpeed: 3000,
    singleItem: true,
    animateIn: 'fadeIn',
    pagination: false,
    items: 1,
});
jQuery("#scroller").simplyScroll({
    customClass: 'vert',
    orientation: 'vertical',
    auto: true,
    manualMode: 'loop',
    speed: 1,
    pauseOnTouch: true
});

jQuery(".ico-close").click(function(e) {
    e.preventDefault();
    jQuery('.payment_cart_detail').hide();
    jQuery('#sign-in-form').hide();
    jQuery('#sign-up-form').hide();

    jQuery('.popup-form-overlay').removeClass('active');
});

jQuery(".close-signup-signin").click(function(e) {
    jQuery('.popup-form').hide();
    jQuery("#sign-up-form").hide();
    jQuery('#sign-in-form').hide();
    jQuery('.blur').hide();

    jQuery('.popup-form-overlay').removeClass('active');
});

jQuery("#close-group-lines-popup").click(function(e) {
    jQuery('#group-lines-popup').hide();
    jQuery('' +
        '').hide();
});

jQuery(".close-iframe-button").click(function(e) {
    jQuery('#popup-lottery-modal').hide();
    jQuery('.dark-blur').hide();
});

jQuery(".contact-us-modal").on("click", function() {
    jQuery("#contact-us-modal").modal({
        fadeDuration: 300,
    });
});

jQuery("#contact-us-modal .fa-close").on("click", function() {
    jQuery("#contact-us-modal a.close-modal").click();
});

jQuery(".tc-modal").on("click", function() {
    jQuery('.close-signup-signin').click();
    jQuery("#tc-modal").modal({
        fadeDuration: 300,
    });
});

jQuery("#tc-modal .fa-close").on("click", function() {
    jQuery("#tc-modal a.close-modal").click();
});

jQuery(".privacy-modal").on("click", function() {
    jQuery('.close-signup-signin').click();
    jQuery("#privacy-modal").modal({
        fadeDuration: 300,
    });
});

jQuery("#privacy-modal .fa-close").on("click", function() {
    jQuery("#privacy-modal a.close-modal").click();
});
var btns = '.show-sign-in';
jQuery(btns).click(function(e) {
    //e.preventDefault();

    jQuery('.popup-form-overlay').removeClass('active')
    jQuery(".popup-form-overlay.sign-in").addClass('active');
    jQuery("#sign-in-form").show();
    jQuery('#header').removeClass('show-nav');
    jQuery(".signin_error").empty();
    // jQuery('.blur').show();
});
jQuery('.show-sign-up').click(function(e) {
    e.preventDefault();
    //jQuery('.popup-form').hide();
    jQuery('.popup-form-overlay').removeClass('active')
    jQuery(".popup-form-overlay.sign-up").addClass('active');
    jQuery("#sign-up-form").show();
    jQuery('#header').removeClass('show-nav');
    //jQuery('.blur').show();
});

jQuery('.forgotpass').click(function(e) {
    e.preventDefault();
    jQuery('.signin_error').empty();
    jQuery('.popup-form-overlay').removeClass('active')
    jQuery(".popup-form-overlay.forgot-password").addClass('active');
    jQuery("#forget-password-form").show();

    jQuery('#forgetpassword').show();
    jQuery('#forgetpassword-commit').hide();
    jQuery('#forget-password-form.popup-form').height(250);
});


jQuery('.btn-contact-us').click(function(e) {
    e.preventDefault();
    //jQuery('.popup-form').hide();
    jQuery('.popup-form-overlay').removeClass('active')
    jQuery(".popup-form-overlay.sign-up").addClass('active');
    jQuery("#contactus_dialog").show();
    jQuery('#header').removeClass('show-nav');
    // jQuery('.blur').show();
});

jQuery(document).ready(function(jQuery) {
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    jQuery(window).load(function() {
        jQuery('#preloader').fadeOut('slow', function() {
            jQuery(this).remove();
        });
    });

    jQuery('#owl-demo .slide').each(function () { 
        var deadline = jQuery(this).data('date');
        var number = jQuery(this).data('number');
        var x = setInterval(function() { 
            var now = new Date().getTime(); 
            var timezoneOffset = new Date().getTimezoneOffset();
            var t = (deadline + timezoneOffset*60*1000) - now;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            jQuery("#owl-demo .caro_clock_"+number).html('<div class="itemCt"><div class="itemBg">'+ days + 'd ' + hours + ':' + minutes + ':' + seconds + '</div></div>');
    
            if (t < 0) {
                clearInterval(x);
                jQuery("#owl-demo .caro_clock_"+number).html('<div class="itemExpired"><div class="itemBg">EXPIRED</div></div>');
            }
        }, 1000);
    });

    jQuery('.exclusive-lotteries .track').each(function () {
        var self = this;
        function countdownDrawDate(deadline) {
            var number = jQuery(self).data('number');
            if (!deadline) {
                deadline = jQuery(self).data('date');
                if (number === 1) {
                    deadline += (-180*60*1000);
                }
            } else {
                var timezoneOffset = new Date().getTimezoneOffset();
                if (number === 1) {
                    deadline += (-180 - timezoneOffset)*60*1000;
                } else {
                    deadline += timezoneOffset*60*1000;
                }
            }
    
            var x = setInterval(function() { 
                var now = new Date().getTime();
                var t = deadline - now;
                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
                var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((t % (1000 * 60)) / 1000);
    
                var formattedHours = hours < 10 ? '0' + hours : hours;
                var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
                var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
                if (t < 0) {
                    clearInterval(x);
                    jQuery(".exclusive-lotteries .caro_clock_"+number).html('<div class="itemExpired"><div class="itemBg">EXPIRED</div></div>');
    
                    if (number === 1) {
                        
                    }
                } else {
                    jQuery(".exclusive-lotteries .caro_clock_"+number).html('<div class="itemCt"><div class="itemBg">Next Draw: '+ formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + '</div></div>');
                }
            }, 1000);
        }
        countdownDrawDate();
    });
    
    jQuery(function ($) {
        jQuery(this).find("#middle_sec")
        .click(function(){
            jQuery(".show-sign-up").click();
        });
    });

    jQuery(function ($) {
        jQuery(".btn-signup").click(function(){
            jQuery(".show-sign-up").click();
        });
    });
    
    jQuery(document).on("click", ".custom-dropdown-menu-button", function() {
        var currentDataShow = jQuery(this).attr('data-show');
        jQuery(this).closest(".custom-dropdown-menu").find(".custom-dropdown-menu-items").toggle();

        if (currentDataShow === "true") {
        	
            currentDataShow = "false";
            
        } else if (currentDataShow === "false") {
        
            currentDataShow = "true"; 
        }
		
        jQuery(this).attr('data-show', currentDataShow);
    });

    jQuery("#single").find(".dropdown-option").click(function(event) {
        event.stopPropagation();
    });

    jQuery("#group").find(".group-option-row").click(function(event) {
        var self = this;
        // setTimeout(function(){
        var id = jQuery(this).attr("for");
        jQuery("#group").find('#' + id).trigger("click");
    });

    jQuery("#group").find(".group-dropdown-option").click(function(event) {
        event.stopPropagation();
    });
    // Hide dropdown menu on click outside
    jQuery(document).on("click", function(event) {
        if (!jQuery(event.target).closest(".custom-dropdown-menu-button").length) {
            jQuery(".custom-dropdown-menu-button").attr('data-show', false);
        }
    });
    jQuery('.top-menu li').mouseover(function() {
        if (!jQuery(this).hasClass('show-dd')) {
            jQuery('.nav_dropdown').hide();
        };
    });

    jQuery(".playlottary ul li").on("click", function() {
        window.location = jQuery(this).find(".dd_play_button").attr("href");
    });

    jQuery('.lottary-play').mouseover(function() {
        jQuery('.result_info').hide();
        jQuery('.result_info .dropdown-menu').hide();
        jQuery('.playlottary').show();
        jQuery('.playlottary .dropdown-menu').show();
    });

});
/*--------------------------------Myaccount Page Change password--------------*/
jQuery(".u_changepassword").click(function() {
    jQuery(".account_form.change_pass").toggle("blind");
});

 
jQuery('#start-rotation').on('click', function() {
    jQuery('#horizontalTab').responsiveTabs('startRotation', 1000);
    jQuery('#horizontalTab').responsiveTabs('active');
});
jQuery('#stop-rotation').on('click', function() {
    jQuery('#horizontalTab').responsiveTabs('stopRotation');
});
jQuery('.select-tab').on('click', function() {
    jQuery('#horizontalTab').responsiveTabs('activate', jQuery(this).val());
});

/*******************************************
 *
 * My Account JS
 *
 *******************************************/
jQuery(".macloader").hide();

jQuery("#myaccount_update").click(function() {
    var email = jQuery("#myaccount_detail").find('input[name=email]')
    email.val(email.val().trim());

    var formdata = jQuery("#myaccount_detail").serialize();
    //console.log(formdata);

    var datastring = "action=lottery_data&m=userinfo/update-personal-details&" + formdata;
    var error = jQuery("#signup").find(".signup_error");

    if (error) {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
    }

    var checkresp = validateMyaccount();
    if (checkresp) {

        error.html("");
        jQuery.ajax({
            type: "POST",
            url: CONFIG.adminURL,
            data: datastring,
            dataType: 'json',
            success: function(data) {
                var resp;

                if (data.error_msg != undefined) {
                    resp = lottoMsgTranslate(data.error_msg);
                    jQuery('.myaccount_detail_error').html(resp)
                    return false;
                } else if (data.Result != undefined) {
                    resp = lottoMsgTranslate(data.Result)
                    jQuery('.myaccount_detail_error').html(resp);
                    window.location.reload(true);
                }
            }
        });
    }
});

function validateMyaccount() {
    var email = jQuery("#myaccount_detail").find("input[name=email]");
    var first_name = jQuery("#myaccount_detail").find("input[name=first_name]");
    var last_name = jQuery("#myaccount_detail").find("input[name=last_name]");
    var country = jQuery("#myaccount_detail").find("input[name=country]");
    var city = jQuery("#myaccount_detail").find("input[name=city]");
    var address = jQuery("#myaccount_detail").find("input[name=address]");
    var zipcode = jQuery("#myaccount_detail").find("input[name=zipcode]");
    //            var state = jQuery("#myaccount_detail").find("input[name=state]");
    var phone = jQuery("#myaccount_detail").find("input[name=phone]");
    var mobno = jQuery("#myaccount_detail").find("input[name=mobno]");
    var error = jQuery("#myaccount_detail").find(".myaccount_detail_error");

    var emailReg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var numericReg = /^([0-9]{6,14})+$/;
    var numeric = /^([0-9])+$/;
    var phoneReg = /^\+?[0-9 \-()]{6,25}$/;
    var nameReg = /^[-'a-z A-Z]+$/;
    //var numericReg = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (jQuery.trim(first_name.val()) === '') {
        error.html(object_name.first_name_should_not_be_empty + " ");
        return false;
    } else if (!nameReg.test(jQuery.trim(first_name.val()))) {
        error.html(object_name.first_name_is_invalid);
        return false;
    } else if (jQuery.trim(last_name.val()) != '' && !nameReg.test(jQuery.trim(last_name.val()))) {
        error.html(object_name.last_name_is_invalid);
        return false;
    } else if (jQuery.trim(email.val()) === '') {
        error.html(object_name.email_should_not_be_empty);
        return false;
    } else if (jQuery.trim(email.val()) !== "" && !emailReg.test(jQuery.trim(email.val()))) {
        error.html(object_name.email_address_is_not_valid);
        return false;
    } else if (jQuery.trim(zipcode.val()) !== "" && !numeric.test(jQuery.trim(zipcode.val()))) {
        error.html(object_name.zipcode_should_contain_only_digits);
        return false;
    } else if (jQuery.trim(phone.val()) !== "" && !phoneReg.test(jQuery.trim(phone.val()))) {
        error.html(object_name.phone_one_is_invalid);
        return false;
    } else if (jQuery.trim(mobno.val()) !== "" && !phoneReg.test(jQuery.trim(mobno.val()))) {
        error.html(object_name.phone_two_is_invalid);
        return false;
    } else {
        return true;
    }
}

/*---------------------------------------validation for password-------------------*/
function validatepassword() {

    var oldpassword = jQuery("#myaccount_detail").find("input[name=oldpassword]");
    var newpassword = jQuery("#myaccount_detail").find("input[name=newpassword]");
    var retypepassword = jQuery("#myaccount_detail").find("input[name=retypepassword]");
    var error = jQuery("#myaccount_detail").find(".myaccount_detail_error");

    if (error) {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");

    }

    if (jQuery.trim(oldpassword.val()) === '' && jQuery.trim(newpassword.val()) === '' && jQuery.trim(retypepassword.val()) === '') {
        error.html(object_name.all_password_fields_are_mandatory);
        return false;
    } else if (jQuery.trim(oldpassword.val()) === '') {
        error.html(object_name.old_password_should_not_be_empty);
        return false;
    } else if (jQuery.trim(newpassword.val()) === '') {
        error.html(object_name.new_password_should_not_be_empty);
        return false;
    } else if (jQuery.trim(retypepassword.val()) === '') {
        error.html(object_name.retype_password_should_not_be_empty);
        return false;
    } else if (jQuery.trim(newpassword.val().length) < 7 || jQuery.trim(newpassword.val().length) > 20) {
        error.html(object_name.new_password_must_be_between_number_and_number_characters);
        return false;
    } else if (jQuery.trim(retypepassword.val().length) < 7 || jQuery.trim(retypepassword.val().length) > 20) {
        error.html(object_name.retype_password_must_be_between_number_and_number_characters);
        return false;
    } else if (jQuery.trim(newpassword.val()) != jQuery.trim(retypepassword.val())) {
        error.html(object_name.new_password_and_retype_password_does_not_match);
        return false;
    } else {
        return true;
    }
}

jQuery("#change_password").click(function() {
    var checkpassword = validatepassword();
    var email = jQuery("#email");
    email.val(email.val().trim());

    var password = jQuery("#newpassword").val();
    var oldpassword = jQuery("#oldpassword").val();
    var datastring = "action=lottery_data&m=userinfo/update-password&email=" + email.val() + "&password=" + password + "&oldpassword=" + oldpassword;

    if (checkpassword) {

        jQuery.ajax({
            type: "POST",
            url: CONFIG.adminURL,
            data: datastring,
            dataType: "json",
            success: function(data) {

                var message = data.Result;
                if (message === undefined) {
                    message = data;
                }
                jQuery("#myaccount_detail").find(".myaccount_detail_error").html(message);
            }
        });
    }
});

jQuery(".meter > span").each(function() {
    jQuery(this).data("origWidth", perc)
        .width(0)
        .animate({
            width: jQuery(this).data("origWidth")
        }, 1200);
});

jQuery('#horizontalTab ul li a').click(function(e) {
    e.preventDefault();
    jQuery('.r_tabs').hide();
    var current_tab = jQuery(this).attr("data");
    jQuery('#' + current_tab).show();
});


    function mainNumbersCheckForAutoclose(numberContext, rangeFunc) {
        var mainselected = jQuery(numberContext).parent().children(".main_active").length;
        var extraselected = jQuery(numberContext).parents(".select_num_col").find(".select_num_part_wrapper").find(".extra_active").length;
        triggerLineClose(numberContext, mainselected, extraselected);
    }

    function extraNumbersCheckForAutoclose(numberContext, rangeFunc) {
        var mainselected = jQuery(numberContext).parents(".select_num_col_part").find(".lt_numbers_wrapper").children(".main_active").length;
        var extraselected = jQuery(numberContext).parent().children(".extra_active").length;
        triggerLineClose(numberContext, mainselected, extraselected);
    }
    jQuery(document).on("click", ".lt_numbers_wrapper > span", function() {

        //needed in the mobile version
        if (jQuery(this).parent().hasClass('edit-lock')) {
            jQuery(this).parent().removeClass('edit-lock');
            // remove lock on extra numbers
            if (jQuery(this).parent().parent().parent().find('.select_num_part_wrapper').hasClass('edit-lock')) {
                jQuery(this).parent().parent().parent().find('.select_num_part_wrapper').removeClass('edit-lock');
            }
            //triger edit mode
            jQuery(this).parent().trigger('click');
        } else {

            var m1 = jQuery("#m1").val();
            var e1 = jQuery("#e1").val();

            var mainselected = jQuery(this).parent().children(".main_active").length;
            var extraselected = jQuery(this).parents(".select_num_col").find(".select_num_part_wrapper").find(".extra_active").length;


            if (parseInt(mainselected + 1) == m1 && parseInt(extraselected) == e1) {
                jQuery(this).parents(".select_num_col").addClass("selected");
                totalForSingle();
            }

            if (mainselected < m1) {
                if (jQuery(this).hasClass("main_active")) {
                    jQuery(this).removeClass("main_active");
                    jQuery(this).parents(".select_num_col").removeClass("selected");
                    totalForSingle();

                } else {
                    jQuery(this).addClass("main_active");
                }
            } else if (jQuery(this).hasClass("main_active")) {
                jQuery(this).removeClass("main_active");
                jQuery(this).parents(".select_num_col").removeClass("selected");
                totalForSingle();

            } else {
                return false;
            }

            if (isMobile) {
                mainNumbersCheckForAutoclose(this);
            }
        }
    });
     function setNumbers(target){
            var num = getRandomInt(m1, m);
            for (var i = 0; i < num.length; i++) {
                var randomID = num[i];

                target.find(".lt_numbers_wrapper").children("#" + randomID).addClass("main_active");
            }

            var num1 = getRandomInt(e1, e);
			if(num1){
				for (var i = 0; i < num1.length; i++) {
					var megaball = num1[i];

					target.find(".select_num_part_wrapper").children("#" + megaball).addClass("extra_active");
				}
				var lottery = jQuery("#otherdata").val().split('|');
				if (lottery[1].toUpperCase() == "ELGORDO") {
					//selectSameExtraNumbers(num1[1]);
					selectSameExtraNumbers(num1);
				}
			}

            // Calculating total.
            totalForSingle();
        }
        
        
        
jQuery(document).ready(function($) {

    var menu_collapse = false;

    $('.arrow_down_button').on('click', function() {
        if ($(this).closest('li.has-child.mobile-menu').hasClass('active')) {
            $('li.has-child.mobile-menu').removeClass('active');
        } else {
            $('li.has-child.mobile-menu').removeClass('active');
            $(this).closest('li.has-child.mobile-menu').addClass('active');
        }
    })


    $('.mobile-trigger').on('click', function(e) {
        e.preventDefault();
        var headerHeight = $('header').innerHeight();
        var toggleClass = `show-${$(this).data('href')}`;
        var menuItemsHeight = $('#menu-container > .wrap-top-menu').innerHeight();

        if (!menu_collapse) {
            // menu_collapse = true;
            if ( !$('#header').is(`.${toggleClass}`) ) {
                $('#header').addClass( toggleClass );
                // $('html').css({'overflow-y': 'hidden'})
                // $('#menu-container').animate({
                //     height: menuItemsHeight
                // }, 500, function() {
                //     menu_collapse = false;
                // })
            } else {
                $('#header').removeClass( toggleClass );
                // $('html').css({'overflow-y': 'auto'})
                // $('#menu-container').animate({
                //     height: 0
                // }, 500, function() {
                //     menu_collapse = false;
                // })
            }
        }
    });
});
    