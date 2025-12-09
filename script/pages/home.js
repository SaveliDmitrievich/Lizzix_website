export function home() {
	const template = document.createElement('template')

	template.innerHTML = `
	<section class="hero-wrapper">
		<div class="hero"> 
			<h1>Elizabeth. Где нежность встречает стиль</h1>
			<div id="starShooting"></div>
		</div>
	</section>

	<div class="container">	

		<section class="blocks"> 
			<h2>Pickme - nyasha</h2>
			<div class="post">
				<header class="post-header">
					<img class="post-avatar" src="img/avatar.jpg" alt="User avatar">

					<div class="post-user-info">
						<p class="post-username">wqbunnix</p>
						<p class="post-meta">from my cutie dreams</p>
					</div>
				</header>

				<div class="post-content-wrapper">
					<div class="post-content" id="slider">
						<div class="post-image-container">
							<img class="post-image" src="img/post.jpg" width="500" height="500" alt="Post image">
						</div>
						<div class="post-image-container">
							<img class="post-image" src="img/avatar.jpg" width="500" height="500" alt="Post image">
						</div>
						<div class="post-image-container">
							<img class="post-image" src="img/post.jpg" width="500" height="500" alt="Post image">
						</div>
					</div>

					<div class="post-buttons">
						<button id="left-btn"><</button>
						<button id="right-btn">></button>
					</div>
				</div>


				<footer class="post-footer">
					<div class="buttons">
						<span id="heart-icon"></span>
						<img src="img/comment-white.png">
						<img id="direct" src="img/direct-white.png">
					</div>

					<div class="pagination" id="pagination">
						<div class="bullet active"></div>
						<div class="bullet"></div>
						<div class="bullet"></div>
					</div>
					
					<div class="buttons">
						<img src="img/favorits-white.png">
					</div>
				</footer>
			</div>

			<div class="circular">
				<img id="elizabeth-text" src="img/ELIZABETH.png"></img>
				<img id="pickme-text" src="img/pickme-text.png"></img>
				<img id="creator-text" src="img/creator-text.png"></img>
			</div> 
		</section>

	</div>

	<section class="heaven-block">
		<div class="heaven-wrapper">
			<h2>Маленькая история Лизы</h2>
			<p>
				<a href="#biography" class="link">узнать больше</a>
			</p>
		</div>
	</section> 
				`
	return template.content.cloneNode(true)
}
