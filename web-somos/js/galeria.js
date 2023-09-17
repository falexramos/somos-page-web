document.addEventListener('DOMContentLoaded', function () {
const fileInput = document.getElementById('fileInput');
const gallery = document.querySelector('.gallery');

fileInput.addEventListener('change', function () {
    const files = Array.from(fileInput.files);

    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;

                const li = document.createElement('li');
                li.appendChild(img);
                gallery.appendChild(li);
            };

            reader.readAsDataURL(file);
        }
    });
});
})