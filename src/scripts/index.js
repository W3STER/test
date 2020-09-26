document.querySelectorAll('.top-link').forEach(item => {
    item.addEventListener('mouseover', showSecondMenu)
    item.addEventListener('mouseout', removeClasses)
})

function removeClasses() {
    document.querySelector('.header').classList.remove('_white-header')
    document.querySelectorAll('.second-menu').forEach(item => item.classList.remove('_show'))
}

function showSecondMenu(e) {
    const header = document.querySelector('.header')
    const link = e.target.closest('.top-link')
    const secondMenu = link.querySelector('.second-menu')
    if(secondMenu){
        header.classList.add('_white-header')
        secondMenu.classList.add('_show')
    }
}

