document.body.addEventListener("click", onClick)

function onClick(e) {
	if (e.target.closest("#menu-open") || e.target.closest("#menu-close"))
		toggleMenu()
}

function toggleOverflow() {
	document.body.style.overflow =
		document.body.style.overflow === "hidden" ? "visible" : "hidden"
}

function toggleMenu() {
	document.body.classList.toggle("mobile-menu__show")
	toggleOverflow()
}

window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
	if (!e.matches) return
	document.body.classList.remove("mobile-menu__show")
	toggleOverflow()
})
