// Hàm xử lý khi tải trang xong
function initializeGallery() {
    console.log("Trang web đã tải xong! Bắt đầu khởi tạo các thuộc tính tabindex.");

    // Lấy tất cả các hình ảnh có class "preview"
    let images = document.querySelectorAll(".preview");

    // Vòng lặp for để thêm tabindex="0" cho từng ảnh
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex cho hình ảnh thứ " + (i + 1));
    }
}

// Hàm cập nhật khi di chuột/focus vào hình ảnh
function upDate(previewPic) {
    console.log("Sự kiện kích hoạt: upDate");
    console.log("Nguồn ảnh: " + previewPic.src);
    console.log("Mô tả alt: " + previewPic.alt);

    let displayBox = document.getElementById("image");
    
    // Đổi hình nền và văn bản của thẻ #image
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
    displayBox.innerHTML = previewPic.alt;
}

// Hàm khôi phục lại trạng thái ban đầu khi rời chuột/blur
function unDo() {
    console.log("Sự kiện kích hoạt: unDo");

    let displayBox = document.getElementById("image");

    // Khôi phục hình nền rỗng và văn bản ban đầu
    displayBox.style.backgroundImage = "url('')";
    displayBox.innerHTML = "Rê chuột hoặc nhấn Tab để xem ảnh ở đây.";
}

// Gán sự kiện onload cho cửa sổ trình duyệt
window.onload = initializeGallery;
