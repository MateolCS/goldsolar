const submitForm = document.querySelector('#submit-form');

submitForm.addEventListener('click', (e) => {
    e.preventDefault()
    const checkbox = document.querySelector('#captcha');
    const userPassword = document.querySelector('#u-password').value
    const userPasswordConfirm = document.querySelector('#u-password-confirm').value
    if(!captcha.checked){
        alert('Please check the captcha');
    }
    if(!passwordConfirmation(userPassword, userPasswordConfirm)){
        e.preventDefault();
        alert('Passwords do not match');
        userPassword.value = ''
        userPasswordConfirm.value = ''
    }

    getValues()
})


const getValues = () => {
    const userEmail = document.querySelector('#u-email').value
    const userName = document.querySelector('#username').value
    const userSurname = document.querySelector('#u-surname').value
    const userPassword = document.querySelector('#u-password').value

    const userData = {
        email: userEmail,
        name: userName,
        surname: userSurname,
        password: userPassword,
    }

    return userData

}

const passwordConfirmation = (passwdOne, passwdTwo) => passwdOne === passwdTwo ? true : false