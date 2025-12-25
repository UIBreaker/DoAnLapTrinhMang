**Bài 9:** Tạo file `js-dom.md`

````markdown
---
title: "Thao tác DOM với JavaScript thuần"
date: 2023-11-12
draft: false
tags: ["JavaScript", "DOM"]
summary: "Không cần jQuery, JS thuần giờ đã rất mạnh mẽ."
---

DOM (Document Object Model) là cầu nối giữa JS và HTML.

- **Chọn phần tử:** `document.querySelector('.class')` hoặc `document.getElementById('id')`.
- **Thêm sự kiện:**
  ```javascript
  btn.addEventListener("click", () => {
    alert("Đã bấm nút!");
  });
  ```
````
