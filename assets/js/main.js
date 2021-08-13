/*----------| MENU SHOW |----------*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId)
	const nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			if (!nav.matches('.show')) {
				nav.classList.add('show')
				document.body.classList.add('block-scroll')
			} else {
				nav.classList.remove('show')
				document.body.classList.remove('block-scroll')
			}
		})
	}
}

showMenu('nav-toggle', 'nav-menu')

/*----------| CHANGE HEADER |----------*/
const header = document.getElementById('header')

let scrollPosition = 0

function scrollHead() {
	const top = this.pageYOffset

	if (top < scrollPosition) {
		header.classList.add('scroll-header')
		header.classList.remove('top')
	} else {
		header.classList.add('top')
		header.classList.remove('scroll-header')
	}

	scrollPosition = top
}

window.addEventListener('scroll', scrollHead)

/*----------| ACTIVE AND REMOVE MENU |----------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	/*-----| Active link |-----*/
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	document.body.classList.remove('block-scroll')

	/*-----| Remove menu mobile |-----*/
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*--------------------| SCROLL SECTIONS ACTIVE LINK |--------------------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		let sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(`.nav__menu a[href*=${sectionId}]`)
				.classList.add('active')
		} else {
			document
				.querySelector(`.nav__menu a[href*=${sectionId}]`)
				.classList.remove('active')
		}
	})
}

window.addEventListener('scroll', scrollActive)

/*--------------------| SHOW SCROLL UP |--------------------*/
const scrollUpLink = document.getElementById('scroll-up')

scrollUpLink.addEventListener('click', event => {
	event.preventDefault()

	window.scrollTo({ top: 0, behavior: 'smooth' })
})

function scrollUp() {
	// When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 200) {
		scrollUpLink.classList.add('show-scroll')
	} else {
		scrollUpLink.classList.remove('show-scroll')
	}
}

window.addEventListener('scroll', scrollUp)

/*----------| SCROLL REVEAL ANIMATION |----------*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	// reset: true,
})

/*-----| SCROLL HOME |-----*/
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

/*-----| SCROLL ABOUT |-----*/
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

/*-----| SCROLL SKILLS |-----*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 400 })

/*-----| SCROLL WORK |-----*/
sr.reveal('.work__img', { interval: 200 })

/*-----| SCROLL CONTACT |-----*/
sr.reveal('.contact__input', { interval: 200 })
