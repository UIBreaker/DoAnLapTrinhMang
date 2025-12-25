---
title: "Thao tác DOM: Biến trang web tĩnh thành động"
date: 2023-11-12
draft: false
tags: ["JavaScript", "DOM", "Frontend"]
summary: "Học cách dùng JavaScript để thay đổi màu sắc, nội dung HTML khi người dùng bấm nút."
---

## Bài 9: `js-dom.md`

_Bài cuối cùng, tạo tương tác thực tế._

````markdown
DOM (Document Object Model) là cây cầu nối giữa JavaScript và giao diện HTML.

## Ví dụ: Làm nút bấm đổi màu nền

Hãy tưởng tượng bạn có 1 nút bấm trong HTML: `<button id="btnClick">Đổi màu ngay</button>`

Dưới đây là đoạn script để "thổi hồn" cho nó:

```javascript
// 1. Truy tìm phần tử
const button = document.getElementById("btnClick");
const body = document.body;

// 2. Lắng nghe sự kiện Click
button.addEventListener("click", () => {
  // 3. Thực hiện hành động
  body.style.backgroundColor = "#2c3e50"; // Đổi nền sang màu tối
  body.style.color = "white"; // Chữ màu trắng

  alert("Đã kích hoạt Dark Mode thủ công!");
});
```
````

## Các lệnh DOM phổ biến

document.getElementById('id'): Chọn theo ID.

document.querySelector('.class'): Chọn theo Class CSS.

element.innerHTML = 'Mới': Thay đổi nội dung HTML.

element.classList.add('active'): Thêm class CSS động.
