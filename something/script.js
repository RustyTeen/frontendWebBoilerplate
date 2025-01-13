function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});