document.querySelector('.cta').addEventListener('click', () => {
    alert('¡Gracias por elegir nuestro supermercado! Explora nuestros productos.');
});

const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.1)';
        product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
        product.style.boxShadow = 'none';
    });
});

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});