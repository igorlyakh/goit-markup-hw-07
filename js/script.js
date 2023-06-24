document.body.addEventListener("click", onClick)

function onClick(e) {
	if (
		e.target.closest("[data-modal-open]") ||
		e.target.closest("[data-modal-close]")
	)
		toggleModal()
}

function toggleOverflow() {
	document.body.style.overflow =
		document.body.style.overflow === "hidden" ? "visible" : "hidden"
}

function toggleModal() {
	document.body.classList.toggle("show-modal")
	toggleOverflow()
}
