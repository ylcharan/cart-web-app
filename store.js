let carts = document.querySelectorAll('.btn-dark');

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener(
		'click',
		() => {
			console.log(i);
		},
		true
	);
}
