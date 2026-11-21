const form = document.querySelector('.rating form')
const rating = document.querySelector('.rating')
const thankYou = document.querySelector('.thank-you')
const selected = document.querySelector('.thank-you__result span')
const foco = document.querySelector('.thank-you__title')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const option = form.querySelector('.rating__input:checked')
    selected.textContent = option.value
    rating.setAttribute('hidden', '')
    thankYou.removeAttribute('hidden')
    foco.focus()
})
