/* ===== МОБІЛЬНЕ МЕНЮ ===== */
const burgerBtn = document.getElementById('burger-btn')
const nav = document.getElementById('nav')

function openMenu() {
	nav.classList.add('is-open')
	burgerBtn.classList.add('is-open')
	burgerBtn.setAttribute('aria-expanded', 'true')
	burgerBtn.setAttribute('aria-label', 'Закрити меню')
}

function closeMenu() {
	nav.classList.remove('is-open')
	burgerBtn.classList.remove('is-open')
	burgerBtn.setAttribute('aria-expanded', 'false')
	burgerBtn.setAttribute('aria-label', 'Відкрити меню')
}

// відкрити / закрити по кліку на бургер
burgerBtn.addEventListener('click', () => {
	nav.classList.contains('is-open') ? closeMenu() : openMenu()
})

// сценарій 1: клік по посиланню в меню
nav.addEventListener('click', e => {
	if (e.target.closest('.nav-link')) closeMenu()
})

// сценарій 2: клік поза меню
document.addEventListener('click', e => {
	if (!nav.contains(e.target) && !burgerBtn.contains(e.target)) closeMenu()
})

// сценарій 3: клавіша Escape
document.addEventListener('keydown', e => {
	if (e.key === 'Escape') closeMenu()
})

// при розширенні екрана до десктопа — скинути стан меню
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
	if (e.matches) closeMenu()
})

/* ===== ТЕМНА ТЕМА ===== */
const themeBtn = document.getElementById('theme-btn')

function applyTheme(isDark) {
	document.body.classList.toggle('dark-theme', isDark)
	// у темній темі показуємо сонце (перемкнути на світлу), у світлій — місяць
	themeBtn.textContent = isDark ? '🌞' : '🌙'
}

function getSavedTheme() {
	try {
		return localStorage.getItem('theme')
	} catch {
		return null
	}
}

applyTheme(getSavedTheme() === 'dark')

themeBtn.addEventListener('click', () => {
	const isDark = !document.body.classList.contains('dark-theme')
	applyTheme(isDark)
	try {
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	} catch {}
})
