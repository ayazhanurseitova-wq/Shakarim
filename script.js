// Бет жүктелгенде орындалатын код
document.addEventListener('DOMContentLoaded', () => {
    
    // Жоғарыға көтерілу батырмасын табу
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Пайдаланушы 300px төмен түскенде батырманы көрсету
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Батырманы басқанда плавно жоғарыға апару
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});