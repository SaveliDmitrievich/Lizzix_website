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
			unlockScroll()
		}
	})

	overlay.addEventListener('click', () => {
		overlay.classList.remove(overlayActiveClass)
		menu.classList.remove(openClass)
		unlockScroll()
	})

	closeBtn.addEventListener('click', () => {
		menu.classList.remove(openClass)
		overlay.classList.remove(overlayActiveClass)
		unlockScroll()
	})

	function lockScroll() {
		document.documentElement.style.overflow = 'hidden'
	}

	function unlockScroll() {
		document.documentElement.style.overflow = ''
	}
}
