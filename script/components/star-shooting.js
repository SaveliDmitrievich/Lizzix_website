// =========================== STAR SHOOTING =========================
import { getRandom } from '../../utils/random.js'
import { getRandomInt } from '../../utils/random.js'

export function initStarShooting({
	container,
	starsMin = 1,
	starsMax = 7,
	delayMin = 500,
	delayMax = 2000,
	durationMin = 1.5,
	durationMax = 4,
}) {
	if (!container) {
		console.warn('initStarShooting: container not provided.')
		return
	}

	startWave()
	function startWave() {
		const count = getRandomInt(starsMin, starsMax)

		for (let i = 0; i < count; i++) {
			const star = createStar(durationMin, durationMax)
			container.appendChild(star)

			const totalDuration =
				parseFloat(star.style.animationDuration) * 1000 +
				parseFloat(star.style.animationDelay) * 1000

			setTimeout(() => {
				if (star.parentNode) star.remove()
			}, totalDuration)
		}

		const nextDelay = getRandom(delayMin, delayMax)
		setTimeout(startWave, nextDelay)
	}
}

function createStar(durationMin, durationMax) {
	const star = document.createElement('span')
	star.classList.add('star')

	star.style.left = window.innerWidth * Math.random() + 200 + 'px'
	star.style.animationDelay = getRandom(0, 3) + 's'
	star.style.animationDuration = durationMin + getRandom(0, durationMax) + 's'

	return star
}
