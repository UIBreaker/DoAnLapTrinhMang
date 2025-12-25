---
title: "Tạm biệt Callback Hell: Xử lý bất đồng bộ với Async/Await"
date: 2023-11-11
draft: false
tags: ["JavaScript", "Async", "Advance"]
summary: "Làm sao để JS đợi tải xong dữ liệu rồi mới chạy tiếp? Async/Await chính là câu trả lời thanh lịch nhất."
---

## Bài 8: `js-async-await.md`

_Giải quyết bài toán bất đồng bộ - Vấn đề đau đầu nhất của JS._

````markdown
JavaScript là ngôn ngữ đơn luồng (single-threaded). Nếu không xử lý khéo, việc tải một file nặng sẽ làm treo cả trang web.

## Cách ngày xưa (Promise)

Nhìn khá rối với `then` và `catch`.

```javascript
fetch(
  "[https://api.github.com/users/UIBreaker](https://api.github.com/users/UIBreaker)"
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```
````

## Cách hiện đại (Async/Await)

Code nhìn tuần tự như chạy từ trên xuống dưới, rất dễ đọc.

```java
async function getUserProfile() {
    try {
        console.log("Đang tải dữ liệu...");

        // Từ khóa 'await' bắt JS phải đợi dòng này chạy xong
        let response = await fetch('[https://api.github.com/users/UIBreaker](https://api.github.com/users/UIBreaker)');
        let data = await response.json();

        console.log("Tên GitHub:", data.login);
    } catch (error) {
        console.log("Có lỗi rồi:", error);
    }
}

getUserProfile();
```
