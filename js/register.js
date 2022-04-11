const submitForm = document.querySelector('#submit-form');

submitForm.addEventListener('click', (e) => {
    const checkbox = document.querySelector('#captcha');
    const userPassword = document.querySelector('#u-password').value
    const userPasswordConfirm = document.querySelector('#u-password-confirm').value
    if(!captcha.checked){
        e.preventDefault();
        alert('Please check the captcha');
    }
    if(!passwordConfirmation(userPassword, userPasswordConfirm)){
        e.preventDefault();
        alert('Passwords do not match');
        userPassword.value = ''
        userPasswordConfirm.value = ''
    }
})


const getValues = () => {
    const userEmail = document.querySelector('u-email').value
    const userName = document.querySelector('#username').value
    const userSurname = document.querySelector('#u-surname').value
    const userPassword = document.querySelector('#u-password').value
    const userPasswordConfirm = document.querySelector('#u-password-confirm').value

}

const passwordConfirmation = (passwdOne, passwdTwo) => passwdOne === passwdTwo ? true : false