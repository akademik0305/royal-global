// Toggle burger menu
const navbarBurger = document.querySelector('.navbar-burger')
navbarBurger.addEventListener('click', () => {
    const headerMenu = document.querySelector('.header-menu')
    headerMenu.classList.toggle('active')
})


// Toggle partner modal
const partnerModal = document.querySelector('.partner')
const partnerButtons = document.querySelectorAll('.partner-button')
const partnerCloseBtn = document.querySelector('.partner__close-btn')
const partnerBody = document.querySelector('.partner-body')
const partnerCompleteButton = document.querySelector('.partner-complete__button')

partnerButtons.forEach((partnerButton) => {
    partnerButton.addEventListener('click', () => {
        partnerModal.classList.add('active')
        blockScrool()
    })
})

partnerBody.addEventListener('click', (event) => {
    event.stopPropagation()
})

partnerModal.addEventListener('click', () => {
    partnerModal.classList.remove('active')
    openScrool()
})

partnerCloseBtn.addEventListener('click', () => {
    partnerModal.classList.remove('active')
    openScrool()
})

partnerCompleteButton.addEventListener('click', () => {
    partnerModal.classList.remove('active')
    openScrool()
})

// if open modal block scrool
function blockScrool() {
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
}

function openScrool() {
    document.body.style.height = 'auto'
    document.body.style.overflowY = 'auto'
}

// Validation
const partnerMain = document.querySelector('.partner-main')
const partnerFormBtn = document.querySelector('.partner-form__button')
const partnerInputName = document.querySelector('.partner-input-name')
const partnerInputEmail = document.querySelector('.partner-input-email')

partnerFormBtn.addEventListener('click', () => {
    let validateName = validator.isLength(partnerInputName.value, {min: 4, max: 9})
    let validateEmail = validator.isEmail(partnerInputEmail.value)
    if (validateName && validateEmail) {
        partnerMain.classList.add('completed')
    } else if (!validateName && validateEmail) {
        createNotification(partnerInputName, 'error', "Nomi")
        changeBorderColor(partnerInputName, '#ff0000')
        changeBorderColor(partnerInputEmail, '#fff')
        // partnerInputEmail.parentElement.style.borderColor = '#ff0000'
    } else if (!validateEmail && validateName) {
        createNotification(partnerInputEmail, 'error', "Email xato")
        changeBorderColor(partnerInputName, '#fff')
        changeBorderColor(partnerInputEmail, '#ff0000')
    } else {
        createNotification(partnerInputName, 'error', "Malumot kiriting")
        createNotification(partnerInputEmail, 'error', "Malumot kiriting")
        changeBorderColor(partnerInputName, '#ff0000')
        changeBorderColor(partnerInputEmail, '#ff0000')
    }
})

function createNotification(element, type, message) {
    $(element).notify(message, {
        className: type,
        clickToHide: true,
        autoHideDelay: 2000,
    });
}

function changeBorderColor(element, color) {
    element.parentElement.style.borderColor = color
}

// Smooth Scrool

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    // clip: true,
    offset: 30
});

// change language
const langButtons = [...document.querySelectorAll('.navbar-lang__button')]
const allLanguages = ['en', 'ru']
langButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let lang = button.getAttribute('data-lang')
        location.href = window.location.pathname + '#' + lang
        location.reload()
    })
})

function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substr(1)
    if (!allLanguages.includes(hash)) {
        location.href = window.location.pathname + '#ru'
        location.reload()
    }
    // document.querySelector('.lang-home').innerHTML = langArr['home'][hash]
    // for (let key in langArr){
    //     console.log(document.querySelector('.lang-' + key))
    //     document.querySelector('.lang-' + key).innerHTML = langArr[key][hash]
    // }
    langButtons.forEach(button => {
        button.classList.remove('active')
        if (button.getAttribute('data-lang') === hash){
            button.classList.add('active')
        }
    })
    let elements = [...document.querySelectorAll(`[data-lang*="lang-"]`)]
    elements.forEach(elem => {
        const lang = elem.getAttribute('data-lang').slice(5)
        elem.innerHTML = langArr[lang][hash]
    })
}
changeLanguage()


