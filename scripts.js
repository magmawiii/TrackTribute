// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const previews = document.querySelectorAll('.preview-overlay');

    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            const previewId = product.id.replace('product', 'preview');
            const preview = document.getElementById(previewId);
            preview.style.display = 'flex';
        });

        product.addEventListener('mouseleave', () => {
            const previewId = product.id.replace('product', 'preview');
            const preview = document.getElementById(previewId);
            preview.style.display = 'none';
        });
    });
});
