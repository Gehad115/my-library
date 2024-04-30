
    function searchBooks() {
        var searchTerm = document.getElementById('bookSearch').value.toLowerCase().trim();

        var books = document.querySelectorAll('.pro');

        books.forEach(function(book) {
            var bookTitle = book.querySelector('h5').textContent.toLowerCase();
            var displayStyle = bookTitle.includes(searchTerm) ? 'block' : 'none';
            book.style.display = displayStyle;
        });
    }

   document.addEventListener("DOMContentLoaded", function() {
    const starsContainers = document.querySelectorAll(".star-rating");

    starsContainers.forEach(container => {
        const productId = container.getAttribute("data-product-id");
        const stars = container.querySelectorAll(`[data-product-id="${productId}"] .star`);

        stars.forEach(star => {
            star.addEventListener("click", function() {
                const rating = parseInt(this.getAttribute("data-rating"));

                stars.forEach(s => s.classList.remove("active"));

                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add("active");
                }
            });
        });
    });
});



function updateSelectedBooks() {
    const bookSelection = document.getElementById('bookSelection');
    const selectedBooks = document.getElementById('selectedBooks');

    // مسح جميع الخيارات الحالية من عنصر select
    selectedBooks.innerHTML = '';

    // إضافة الكتب المختارة كخيارات إلى عنصر select
    for (let i = 0; i < bookSelection.elements.length; i++) {
        const checkbox = bookSelection.elements[i];
        if (checkbox.type === 'checkbox' && checkbox.checked) {
            const option = document.createElement('option');
            option.value = checkbox.value;
            option.text = checkbox.value;
            selectedBooks.appendChild(option);
        }
    }
}

// دالة لعملية شراء الكتب المختارة
function buyBooks() {
    updateSelectedBooks(); // تحديث الكتب المختارة قبل عملية الشراء
    const selectedBooks = document.getElementById('selectedBooks');
    const selectedOptions = Array.from(selectedBooks.selectedOptions).map(option => option.value);
    // يمكنك هنا إضافة التعليمات لعملية الشراء، مثل فتح صفحة شراء أو إجراء الإجراء المطلوب
    console.log('الكتب المحددة:', selectedOptions);
    // هنا يمكنك إضافة الخطوات الخاصة بعملية الشراء
}

// تحديث الكتب المختارة عند تغيير حالة الـ checkboxes
const checkboxes = document.querySelectorAll('#bookSelection input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedBooks);
});

// تحديث الكتب المختارة عند تحميل الصفحة لأول مرة
window.addEventListener('load', updateSelectedBooks);
