const pageController = (() =>{
    let currentStep = 0
    const handleFirstStep = () => {
        const getCash = document.querySelector('#get-cash')
    
        getCash.addEventListener('change', () => {
            const caschOutput = document.querySelector('.main__step__calculator__calc__info')
            caschOutput.textContent = `Płacisz ${getCash.value} zł, zuzywasz około ${getCash.value == 0 ? 0 : getCash.value * 2 + 1} kWh`
        })
    }

    const handleThirdStep = () => {
        const sunPosition = document.querySelector('#sun-position').value
        const roofAngle = document.querySelector('#roof-angle').value
        const roofType = document.querySelector('#roof-type').value
        const cash = document.querySelector('#get-cash').value

        //logika wyświetlania informacji o zamówieniu. na potrzeby pokazania, działania będą tam bao

        const invValue = document.querySelector('#inv-value-output')
        invValue.textContent = '0zł'

        const dotation = document.querySelector('#inv-dotation-output')
        dotation.textContent = '5000zł'

        const taxRefund = document.querySelector('#inv-taxrefund-output')
        taxRefund.textContent = '0zł'

        const ourGift = document.querySelector('#inv-ourgift-output')
        ourGift.textContent = '0zł'

        const fullCost = document.querySelector('#inv-fullcost-output')
        fullCost.textContent = '-5500zł'

        const payback = document.querySelector('#inv-payback-output')
        payback.textContent = 'po 0 latach i 2 miesiącach'

        const yourSavings = document.querySelector('#inv-yoursavings-output')
        yourSavings.textContent = '0zł'

    }

    const handleFourthStep = () => {
        if(!document.querySelector('#consent').checked || !document.querySelector('.personal-info')){
            alert('Please fill in all the required fields')
        }
        const userName = document.querySelector('#u-name').value
        const phoneNumber = document.querySelector('#u-phone').value
        const userEmail = document.querySelector('#u-email').value

        return {userName, phoneNumber, userEmail}
    }
    const increaseStep = () => {
        currentStep++
    }

    const decreaseStep = () => {
        currentStep--
    }
    
    return {handleFirstStep, decreaseStep, increaseStep, handleThirdStep}
})()

pageController.handleFirstStep()