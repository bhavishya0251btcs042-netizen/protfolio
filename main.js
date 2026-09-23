import './style.css'

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// ===== Mobile menu toggle =====
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  const icon = navToggle.querySelector('i')
  icon.classList.toggle('fa-bars')
  icon.classList.toggle('fa-times')
})

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
    const icon = navToggle.querySelector('i')
    icon.classList.add('fa-bars')
    icon.classList.remove('fa-times')
  })
})

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const target = document.querySelector(anchor.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// ===== Scroll animations (fade-in) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

// Add fade-in class to sections and cards
document.querySelectorAll(
  '.about-content, .skill-card, .project-card, .contact-description, .section-title'
).forEach(el => {
  el.classList.add('fade-in')
  observer.observe(el)
})

// Stagger skill card animations
document.querySelectorAll('.skill-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.08}s`
})

// Stagger project card animations
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`
})
