// ============== circular text (text rotation around himself) ============
export function initCircular(container, speed = 1) {
	let rotation = 0
	let lastScroll = 0
	document.addEventListener('scroll', () => {
		const currentScroll = window.scrollY
		if (currentScroll < lastScroll) {
			rotation += speed
		} else {
			rotation -= speed
		}
		container.style.transform = `rotate(${rotation}deg)`
		lastScroll = currentScroll
	})
}
