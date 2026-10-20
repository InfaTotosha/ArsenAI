const button = document.getElementById('colorBtn');

button.addEventListener('click', function() {
    const body = document.body;
    
    // Змінюємо колір фону сторінки на світло-жовтий або повертаємо назад
    if (body.style.backgroundColor === 'rgb(255, 255, 224)') {
        body.style.backgroundColor = '#f4f4f9';
    } else {
        body.style.backgroundColor = '#ffffe0';
    }
});