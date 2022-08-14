export function addHover(e) {
    let docWidth = window.innerWidth
    if (docWidth > 768) {
        if (e.target.className.includes('projects-page__project-block')) {
            e.target.classList.add('active')
        }
    
        if (e.target.tagName == 'IMG') {
            e.target.parentNode.parentNode.classList.add('active')
        }
    }
}

export function removeHover(e) {
    let docWidth = window.innerWidth
    if (docWidth > 768) {
        if (e.target.className.includes('projects-page__project-block')) {
            e.target.classList.remove('active')
        }

        if (e.target.tagName == 'IMG') {
            e.target.parentNode.parentNode.classList.remove('active')
        }
    }
}

export function btnAddActiveClass(btnText, setBtnText, event) {
    event.target.previousElementSibling.classList.toggle('active')
    setBtnText(!btnText)
}

export function overlay(e) {
    document.querySelector('.nav-ul').classList.toggle('active')
    document.querySelector('.burger').classList.toggle('active')
}

export function resize() {
    let docWidth = window.innerWidth
    if (docWidth > 768) {
        document.querySelector('.nav-ul').classList.remove('active')
        document.querySelector('.burger').classList.remove('active')
    }
}

window.addEventListener('resize', resize)
