document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll('section');
    var index = 0;
    var buttonClicked = false;

    function showNextSection() {
        if (!buttonClicked) {
            buttonClicked = true;
            showButton.style.display = 'none';
        }

        if (index < sections.length) {
            // Ẩn section trước đó (nếu có)
            if (index > 0) {
                sections[index - 1].style.display = 'none';
            }

            // Hiển thị section hiện tại
            sections[index].style.display = 'block';

            // Nếu đã hiển thị hết các section và là section cuối cùng, không ẩn button
            if (index === sections.length - 1) {
                return;
            }

            // Tăng chỉ số để hiển thị section tiếp theo
            index++;

            // Gọi đệ quy để hiển thị section tiếp theo
            setTimeout(showNextSection, 3000);
        }
    }

    var showButton = document.getElementById('showButton');
    showButton.addEventListener('click', showNextSection);
});
