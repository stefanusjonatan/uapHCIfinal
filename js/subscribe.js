function validate(){

    var firstName = document.getElementById('first-name')
    var lastName = document.getElementById('last-name')

    var genderMale = document.getElementById('gender-male').checked
    var genderFemale = document.getElementById('gender-female').checked
    var genderRns = document.getElementById('gender-rns').checked

    var dob = document.getElementById('dob')

    var country = document.getElementById('place-country')

    var email = document.getElementById('email')
    
    var phoneNumber = document.getElementById('phone-number')

    var checkbox = document.getElementById('checkbox-valid').checked

    var check_all = false
    var all_validate = 0


    if(firstName.value < 1){
        
        document.getElementById('error-first-name').innerText = 'First name cannot be empty'
    }
    else{

        document.getElementById('error-first-name').innerText = ''
        all_validate += 1
    }

    if(lastName.value < 1){
        
        document.getElementById('error-last-name').innerText = 'Please fill your second name'
    }
    else{

        document.getElementById('error-last-name').innerText = ''
        all_validate += 1
    }

    if(genderMale == false && genderFemale == false && genderRns == false){

        document.getElementById('error-gender').innerText = 'Gender cannot be empty'
    }
    else{

        document.getElementById('error-gender').innerText = ''
        all_validate += 1
    }

    if(dob.value == ''){

        document.getElementById('error-dob').innerText = 'Date of birth cannot be empty'
    }
    else{

        document.getElementById('error-dob').innerText = ''
        all_validate += 1
    }

    if(country.value == 0){

        document.getElementById('error-country').innerText = 'Email cannot be empty'
    }
    else{

        document.getElementById('error-country').innerText = ''
        all_validate += 1
    }

    if(email.value == ''){

        document.getElementById('error-email').innerText = 'Email cannot be empty'
    }
    else{

        document.getElementById('error-email').innerText = ''
        all_validate += 1
    }

    if(phoneNumber.value == ''){

        document.getElementById('error-phone-number').innerText = 'Phone number cannot be empty'
    }
    else{

        document.getElementById('error-phone-number').innerText = ''
        all_validate += 1
    }

    if(checkbox == false){

        if(all_validate < 7){

            return check_all
        }
        else{

            alert('Please confirm your subscription by checking on the checkbox below')
        }
    }
    else{

        all_validate += 1
    }


    if(all_validate != 8){

        return check_all
    }
    else{

        check_all = true
        return check_all
    }
}