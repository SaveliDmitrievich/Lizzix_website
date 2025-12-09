export class Router {
	constructor(routes) {
		this.routes = routes
		window.addEventListener('hashchange', () => this.route())
		window.addEventListener('load', () => this.route())
	}

	route() {
		const hash = location.hash.slice(1) || 'home'
		if (this.routes[hash]) this.routes[hash]()
	}
}
