$(document).ready(function () {

    // parallax effect for sliders
    $(window).scroll(function() {
       let wScroll = $(window).scrollTop();
        let dScroll = wScroll - $(window).height();
        $('.parallax-bg').css('background-position', `center ${wScroll*0.5}px`);
        $('.parallax-bg-2').css('background-position', `center ${dScroll*0.75}px`);
    });

    // using scrollOut for form and inputs
    ScrollOut({
        targets: ".input-wrapper",
        once: true,
    });
    ScrollOut({
        targets: '.form-btn',
        once: true,
    });

    // scroll from registration
    $('.first-link').click((e) => {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': $('.second').offset().top
        }, 1500);
    });

    // country select
    $('#country').click(function(event) {
        let target = $( event.target );
        if (target.is($(this))) {
            $('.country-select').fadeIn(300);
            $('.select').addClass('select_active');
        }  
    });

    function disactiveSelect() {
        $('.country-select').fadeOut(300);
        $('.select').removeClass('select_active');
    }

    $('.country-name').click(function(event) {
        let telCode = $(event.target).attr('data-tel');
        let text = $(event.target).text();
        if (text == 'Afghanistan') {
            $('#country').val(text);
            console.log(telCode);
            $('#phone').val(telCode);
        } else if (text == 'Albania') {
            $('#country').val(text);
            $('#phone').val(telCode);
        }
        else if (text == 'Algeria') {
            $('#country').val(text);
            $('#phone').val(telCode);
        }
        else if (text == 'Andorra') {
            $('#country').val(text);
            $('#phone').val(telCode);
        } else {
            return false;
        }
        disactiveSelect();
    }); 

    // js for validation form
    const firstName = document.getElementById('firstName'),
          secondName = document.getElementById('secondName'),
          country = document.getElementById('country'),
          phone = document.getElementById('phone'),
          password = document.getElementById('password'),
          confirmPassword = document.getElementById('confirm-password'),
          email = document.getElementById('email'),
          checkbox = document.getElementById('checkbox'),
          checkmark = document.getElementById('checkmark'),
          form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const firstNameValue = firstName.value.trim(),
              secondNameValue = secondName.value.trim(),
              countryValue = country.value,
              phoneValue = phone.value.trim(),
              passwordValue = password.value.trim(),
              confirmPasswordValue = confirmPassword.value.trim(),
              emailValue = email.value.trim();


        if (firstNameValue.length < 2) {
            setErrorFor(firstName);
        } else {
            setSuccessFor(firstName);
        }

        if (secondNameValue.length < 2) {
            setErrorFor(secondName);
        } else {
            setSuccessFor(secondName);
        }

        if (countryValue === '') {
            setErrorFor(country);
        } else {
            setSuccessFor(country);
        }

        if (phoneValue.length <= 3 || phoneValue.length > 10) {
            setErrorFor(phone);
        } else {
            setSuccessFor(phone);
        }
        
        if (passwordValue === '') {
            setErrorFor(password);
        } else if (!passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{3,10}$/)) {
            setErrorFor(password);
        } else {
            setSuccessFor(password);
        }

        if (confirmPasswordValue === '') {
            setErrorFor(confirmPassword);
        } else if (confirmPasswordValue !== passwordValue) {
            setErrorFor(confirmPassword);
        } else {
            setSuccessFor(confirmPassword);
        }

        if (emailValue === '') {
            setErrorFor(email);
        } else if (!isEmail(emailValue)) {
            setErrorFor(email);
        } else {
            setSuccessFor(email);
        }

        if (!checkbox.checked) {
            checkmark.classList.add('checkmark-error');
            setTimeout(function() {
                checkmark.classList.remove('checkmark-error');
            }, 4000);
        } 
        checkmark.addEventListener('click', () => {
            checkmark.classList.remove('checkmark-error');
        });
    }

    function setErrorFor(input) {
        const formControl = input.parentElement;
        const error = formControl.querySelector('.error');
        error.style.opacity = '1';
        setTimeout(function() {
            error.style.opacity = '0';
        }, 4000);
    }
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        const error = formControl.querySelector('.error');
        error.style.opacity = '0';
    }
    function isEmail(email) {
	    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});