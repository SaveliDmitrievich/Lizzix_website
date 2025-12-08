import { getRandomInt } from '../../utils/random.js'

export function initHeartAnimation({
	container,
	min = 10,
	max = 25,
	emojis = ['💗', '💙', '💛', '💜', '💚'],
}) {
	if (!container) {
		console.warn('initHeartAnimation: container is missing')
		return
	}

	container.addEventListener('click', () =>
		addLike(container, min, max, emojis)
	)
}

// делаем простой вариант: передаём элемент напрямую
export function addLike(
	container,
	min = 10,
	max = 25,
	emojis = ['💗', '💙', '💛', '💜', '💚']
) {
	if (!container) return
	const isLiked = container.classList.toggle('liked')
	if (isLiked) {
		const heartCount = getRandomInt(min, max)
		for (let i = 0; i < heartCount; i++) {
			createLittleHeart(container, emojis)
		}
	}
}

function createLittleHeart(parent, emojis) {
	const littleHeart = document.createElement('span')
	littleHeart.textContent = emojis[Math.floor(Math.random() * emojis.length)]

	littleHeart.style.position = 'absolute'
	littleHeart.style.top = Math.random() * 50 + 'px'
	littleHeart.style.left = Math.random() * 40 + 'px'
	littleHeart.style.opacity = 1
	littleHeart.style.pointerEvents = 'none'
	littleHeart.style.transition = 'all 1.5s ease'
	littleHeart.style.userSelect = 'none'
	parent.appendChild(littleHeart)

	setTimeout(() => {
		const x = Math.random() * 130 - 25
		const y = -100 - Math.random() * 20
		littleHeart.style.transform = `translate(${x}px, ${y}px)`
		littleHeart.style.opacity = 0
	}, 50)

	setTimeout(() => {
		if (littleHeart.parentNode) littleHeart.remove()
	}, Math.floor(Math.random() * 1200) + 400)
}
