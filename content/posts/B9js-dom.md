---
title: "Làm chủ DOM JavaScript: Biến giao diện tĩnh thành động"
date: 2023-11-12
draft: false
tags: ["JavaScript", "DOM", "Frontend", "Interactive"]
summary: "DOM là gì? Học cách bắt sự kiện click, lấy dữ liệu từ ô Input và tạo tính năng Dark Mode 'xịn sò' chỉ với vài dòng code."
---

HTML/CSS tạo ra một trang web đẹp, nhưng nó "chết" (tĩnh). Để trang web "sống" (động) và phản hồi lại người dùng, chúng ta cần **DOM (Document Object Model)**.

Hãy coi DOM như một cái cây, mỗi thẻ HTML là một nhánh cây mà JavaScript có thể bẻ cong, tô màu hoặc cắt tỉa tùy ý.

## 1. Quy trình 3 bước thao tác DOM

Mọi tính năng JS đều tuân theo quy tắc: **Chọn -> Nghe -> Hành động**.

1.  **Chọn (Select):** Tìm phần tử HTML cần xử lý.
2.  **Nghe (Listen):** Đợi người dùng làm gì đó (Click, Gõ phím, Scroll...).
3.  **Hành động (Act):** Thay đổi màu sắc, nội dung, ẩn/hiện...

## 2. Ví dụ 1: Tính năng Dark Mode (Chuẩn Clean Code)

Thay vì sửa từng dòng CSS thủ công, các Dev chuyên nghiệp sẽ thêm/bớt một class CSS.

**HTML:**

```html
<body class="light-mode">
  <button id="btnToggle">Bật chế độ tối</button>
</body>
```

## CSS (Định nghĩa sẵn):

```java
.dark-mode {
    background-color: #2c3e50;
    color: white;
}
```

## JavaScript:

```java
// 1. Chọn phần tử
const btn = document.querySelector('#btnToggle');
const body = document.body;

// 2. Lắng nghe Click
btn.addEventListener('click', () => {
    // 3. Hành động: Tự động thêm hoặc xóa class 'dark-mode'
    body.classList.toggle('dark-mode');

    // Kiểm tra xem đang ở chế độ nào để đổi tên nút
    if (body.classList.contains('dark-mode')) {
        btn.innerText = "Về giao diện sáng";
    } else {
        btn.innerText = "Bật chế độ tối";
    }
});
```

## 3. Ví dụ 2: Lấy dữ liệu từ ô Input

Làm sao để lấy những gì người dùng gõ vào và hiển thị lời chào?

HTML:

```java
<input type="text" id="nameInput" placeholder="Nhập tên bạn...">
<button id="btnSayHi">Chào</button>
<p id="resultText"></p>
```

JavaScript:

```java
const input = document.querySelector('#nameInput');
const btnHi = document.querySelector('#btnSayHi');
const result = document.querySelector('#resultText');

btnHi.addEventListener('click', () => {
    // Lấy giá trị (value) từ ô input
    const name = input.value;

    // Kiểm tra rỗng
    if (name === "") {
        alert("Vui lòng nhập tên!");
        return;
    }

    // Gán nội dung text vào thẻ p
    result.innerText = `Xin chào, ${name}! Chúc bạn một ngày vui vẻ.`;
    result.style.color = "green"; // Đổi màu chữ kết quả
});
```

## 4. Cheat Sheet: Các lệnh DOM hay dùng nhất

| Nhóm          | Lệnh                                   | Tác dụng                         |
| :------------ | :------------------------------------- | :------------------------------- |
| **Truy vấn**  | `document.getElementById('id')`        | Chọn theo ID (Nhanh nhất)        |
|               | `document.querySelector('.class')`     | Chọn theo CSS Selector (Đa năng) |
| **Nội dung**  | `element.innerText = 'abc'`            | Sửa nội dung chữ                 |
|               | `element.innerHTML = '<b>abc</b>'`     | Sửa nội dung HTML                |
|               | `input.value`                          | Lấy giá trị ô nhập liệu          |
| **Giao diện** | `element.style.color = 'red'`          | Sửa CSS trực tiếp                |
|               | `element.classList.add('active')`      | Thêm class CSS                   |
|               | `element.classList.toggle('active')`   | Bật/Tắt class CSS                |
| **Sự kiện**   | `btn.addEventListener('click', ...)`   | Bắt sự kiện Click                |
|               | `input.addEventListener('input', ...)` | Bắt sự kiện khi đang gõ          |
