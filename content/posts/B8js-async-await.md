---
title: "Tạm biệt Callback Hell: Xử lý Bất đồng bộ đỉnh cao với Async/Await"
date: 2023-11-11
draft: false
tags: ["JavaScript", "Async", "Advanced", "ES7"]
summary: "Tại sao JS đơn luồng mà vẫn làm được nhiều việc cùng lúc? Hướng dẫn làm chủ Async/Await và kỹ thuật Promise.all để tối ưu hiệu năng."
---

JavaScript là ngôn ngữ đơn luồng (Single-threaded), nghĩa là nó chỉ có một tay để làm việc. Nếu bạn bắt nó tải một file nặng (mất 5 giây) theo cách thông thường, toàn bộ trang web sẽ bị "đơ" trong 5 giây đó.

Để giải quyết, chúng ta có **Bất đồng bộ (Asynchronous)**. Hãy cùng xem sự tiến hóa của nó.

## 1. Thời kỳ đồ đá: Callback Hell

Ngày xưa, code lồng nhau chằng chịt như hình tam giác, cực kỳ khó đọc và bảo trì.

```javascript
// Ác mộng mang tên Callback
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        console.log(d);
      });
    });
  });
});
```

## 2. Thời kỳ trung cổ: Promise (ES6)

Đỡ hơn chút, nhưng vẫn còn rườm rà với .then() và .catch().

```java
fetch("[https://api.github.com/users/UIBreaker](https://api.github.com/users/UIBreaker)")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

## 3. Thời kỳ hiện đại: Async/Await (ES7)

Đây là cú pháp "thanh lịch" nhất. Nó biến code bất đồng bộ nhìn y hệt như code đồng bộ (tuần tự từ trên xuống dưới), rất dễ hiểu.

Cú pháp chuẩn
async: Khai báo hàm này có xử lý bất đồng bộ.

await: "Tạm dừng" code tại dòng này để đợi kết quả trả về, sau đó mới chạy dòng tiếp theo.

```java
async function getUserProfile() {
    try {
        console.log("⏳ Đang tải dữ liệu...");

        // JS sẽ "đợi" ở dòng này cho đến khi fetch xong
        const response = await fetch("[https://api.github.com/users/UIBreaker](https://api.github.com/users/UIBreaker)");
        const data = await response.json();

        // Chỉ chạy khi dòng trên đã xong
        console.log("✅ Tên GitHub:", data.login);
        console.log("✅ Số Repo:", data.public_repos);

    } catch (error) {
        // Dùng try-catch truyền thống để bắt lỗi cực gọn
        console.error("❌ Có lỗi rồi:", error);
    }
}

getUserProfile();
```

## 4. Pro Tip: Tăng tốc độ với Promise.all

Giả sử bạn cần lấy thông tin của 3 người dùng. Nếu dùng await từng người thì sẽ mất: 1s + 1s + 1s = 3s. Thay vào đó, hãy dùng Promise.all để chạy song song cả 3 cùng lúc -> Chỉ mất 1s.

```java
async function getAllUsers() {
    console.time("Thời gian tải");

    const p1 = fetch("[https://api.github.com/users/UIBreaker](https://api.github.com/users/UIBreaker)");
    const p2 = fetch("[https://api.github.com/users/google](https://api.github.com/users/google)");
    const p3 = fetch("[https://api.github.com/users/facebook](https://api.github.com/users/facebook)");

    // Chạy song song 3 request, đợi tất cả cùng xong
    const results = await Promise.all([p1, p2, p3]);

    console.timeEnd("Thời gian tải"); // Kết quả sẽ cực nhanh!
    console.log("Đã tải xong 3 users.");
}
```

## Kết luận

Async/Await không phải là phép thuật, nó chỉ là "lớp vỏ ngọt ngào" (Syntactic Sugar) bọc lấy Promise. Nhưng nhờ nó, code của chúng ta sạch đẹp và logic hơn gấp 10 lần.
