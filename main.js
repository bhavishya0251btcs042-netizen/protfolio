import './style.css'

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// ===== Mobile menu toggle =====
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    const icon = navToggle.querySelector('i')
    if (icon) {
      icon.classList.toggle('fa-bars')
      icon.classList.toggle('fa-times')
    }
  })

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      const icon = navToggle.querySelector('i')
      if (icon) {
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-times')
      }
    })
  })
}

// ===== Smooth scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href')
    if (targetId && targetId !== '#') {
      const target = document.querySelector(targetId)
      if (target) {
        e.preventDefault()
        const navHeight = navbar ? navbar.offsetHeight : 70
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  })
})

// ===== Scroll animations (fade-in) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

// Add fade-in to elements
document.querySelectorAll(
  '.about-card-left, .about-card-right, .timeline-item, .project-card, .skill-category-card, .edu-card, .contact-box, .section-title, .section-subtitle'
).forEach(el => {
  el.classList.add('fade-in')
  observer.observe(el)
})
