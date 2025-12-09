import { addLike } from './heart.js'

export function initSlider({
	sliderId = 'slider',
	heartId = null,
	images = [],
} = {}) {
	const slider = document.getElementById(sliderId)
	if (!slider) return

	const slideWidth = slider.querySelector('.post-image-container').offsetWidth

	if (heartId) {
		const heart = document.getElementById(heartId)

		if (heart) {
			let lastTap = 0
			slider.addEventListener('dblclick', () => addLike(heart))
			slider.addEventListener('touchend', () => {
				const currentTime = new Date().getTime()
				const tapLength = currentTime - lastTap
				if (tapLength < 350) {
					addLike(heart)
				}
				lastTap = currentTime
			})
		}
	}

	let start
	let isDown = false
	let scrollLeft

	slider.addEventListener('dragstart', e => e.preventDefault())

	slider.addEventListener('mousedown', e => {
		isDown = true
		slider.classList.add('slider-active')
		start = e.pageX - slider.offsetLeft
		scrollLeft = slider.scrollLeft
	})

	slider.addEventListener('mouseleave', () => {
		isDown = false
		slider.classList.remove('slider-active')
	})

	slider.addEventListener('mouseup', () => {
		isDown = false
		slider.classList.remove('active')

		// const index = Math.round(slider.scrollLeft / slideWidth)
		// const scrollX = index * slider.clientWidth

		// slider.scrollTo({
		// 	left: scrollX,
		// 	behavior: 'smooth',
		// })
	})

	slider.addEventListener('mousemove', e => {
		if (!isDown) return
		e.preventDefault()
		const x = e.pageX - slider.offsetLeft
		const walk = (start - x) * 1.6
		slider.scrollLeft = scrollLeft + walk
	})
}

// ================ PAGINATION =================

export function initPagination({
	slider = document.getElementById('slider'),
	paginationContainer = document.getElementById('pagination'),
} = {}) {
	const bullets = paginationContainer.querySelectorAll('.bullet')

	function updatePagination() {
		const slideIndex = Math.round(slider.scrollLeft / slider.clientWidth)
		bullets.forEach((bullet, i) =>
			bullet.classList.toggle('active', i === slideIndex)
		)
	}

	bullets.forEach((bullet, i) => {
		bullet.addEventListener('click', () => {
			const scrollX = i * slider.clientWidth

			slider.scrollTo({
				left: scrollX,
				behavior: 'smooth',
			})
		})
	})

	slider.addEventListener('scroll', updatePagination)
}

// ============== SLIDER BUTTONS ===============
export function initSliderButtons({
	slider = document.getElementById('slider'),
	leftBtn = document.getElementById('left-btn'),
	rightBtn = document.getElementById('right-btn'),
} = {}) {
	if (!slider || !leftBtn || !rightBtn) return

	function updateButtons() {
		if (slider.scrollLeft <= 0) leftBtn.classList.add('hide')
		else leftBtn.classList.remove('hide')

		const rightSideX = slider.scrollLeft + slider.clientWidth
		if (rightSideX >= slider.scrollWidth - 1) rightBtn.classList.add('hide')
		else rightBtn.classList.remove('hide')
	}

	leftBtn.addEventListener('click', () => {
		slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' })
	})
	rightBtn.addEventListener('click', () => {
		slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' })
	})

	slider.addEventListener('scroll', updateButtons)

	updateButtons()
}
