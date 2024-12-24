let timeout;

function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(goToNextSection, 1000); // 3 giây không có hành động, chuyển đến section tiếp theo
}

// Lắng nghe sự kiện cuộn và nhấn phím
window.addEventListener('scroll', resetTimeout);
window.addEventListener('keydown', resetTimeout);

// Khởi tạo timeout khi trang được tải
timeout = setTimeout(goToNextSection, 1000); // Sau 3 giây, tự động chuyển đến section tiếp theo