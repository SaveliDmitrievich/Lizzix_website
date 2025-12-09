import { home } from './pages/home.js'
import { initBurger } from './components/burger-menu.js'
import { initStarShooting } from './components/star-shooting.js'
import { initHeartAnimation } from './components/heart.js'
import { initSlider } from './components/slider.js'
import { initCircular } from './components/circular-text.js'
import { initSliderButtons } from './components/slider.js'
import { initPagination } from './components/slider.js'
import { Router } from '../utils/router.js'
import { gallery } from './pages/gallery.js'
import { biography } from './pages/biography.js'

function render(root, content) {
	root.innerHTML = ''
	root.appendChild(content)
}

document.addEventListener('DOMContentLoaded', () => {
	const main = document.getElementById('main')
	initBurger({
		burgerBtn: document.getElementById('burger'),
		closeBtn: document.getElementById('mobile-menu-close'),
		overlay: document.getElementById('mobile-menu-overlay'),
		menu: document.getElementById('mobile-menu'),
	})
	const router = new Router({
		home: () => {
			render(main, home())
			initHome()
		},
		gallery: () => {
			render(main, gallery())
			// initGallery()
		},
		biography: () => {
			render(main, biography())
			initBiography()
		},
	})

	router.route()
})

function initHome() {
	initStarShooting({ container: document.getElementById('starShooting') })
	initSlider({ sliderId: 'slider', heartId: 'heart-icon' })
	initHeartAnimation({ container: document.getElementById('heart-icon') })
	initSliderButtons()
	initPagination()
	initCircular(document.getElementById('elizabeth-text'), 0.8)
	initCircular(document.getElementById('pickme-text'), -0.8)
	initCircular(document.getElementById('creator-text'), 0.8)
}

function initBiography() {
	// initStarShooting({ container: document.getElementById('biography-block') })
}
