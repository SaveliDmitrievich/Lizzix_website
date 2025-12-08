export function initBurger({
	burgerBtn,
	menu,
	closeBtn,
	overlay,
	openClass = 'open',
	overlayActiveClass = 'active',
	breakpoint = 800,
}) {
	if (!burgerBtn || !menu || !overlay || !closeBtn) {
		console.warn('initBurger: missing required parameters.')
		return
	}

	const transitionDuration =
		parseFloat(getComputedStyle(menu).transitionDuration) * 1000

	burgerBtn.addEventListener('click', () => {
		menu.classList.toggle(openClass)
		overlay.classList.toggle(overlayActiveClass)
		lockScroll()
	})

	window.addEventListener('resize', () => {
		if (window.innerWidth > breakpoint) {
			menu.style.transition = 'none'
			menu.classList.remove(openClass)
			overlay.classList.remove(overlayActiveClass)

			menu.offsetHeight
			menu.style.transition = ''
			unlockScroll(0)
		}
	})

	overlay.addEventListener('click', () => {
		overlay.classList.remove(overlayActiveClass)
		menu.classList.remove(openClass)
		unlockScroll(transitionDuration)
	})

	closeBtn.addEventListener('click', () => {
		menu.classList.remove(openClass)
		overlay.classList.remove(overlayActiveClass)
		unlockScroll(transitionDuration)
	})

	function lockScroll() {
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = scrollbarWidth + 'px'
	}

	function unlockScroll(transitionDuration) {
		setTimeout(() => {
			document.body.style.overflow = ''
			document.body.style.paddingRight = ''
		}, transitionDuration)
	}
}
