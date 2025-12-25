---
title: "Xử lý ngoại lệ (Exception Handling) chuẩn trong Java"
date: 2023-10-27
draft: false
tags: ["Java", "Error"]
summary: "Đừng để chương trình bị Crash! Hãy sử dụng Try-Catch đúng cách."
---

Sử dụng khối `try-catch-finally` để bắt lỗi:

```java
try {
    int data = 50 / 0; // Lỗi chia cho 0
} catch (ArithmeticException e) {
    System.out.println(e); // Xử lý lỗi
} finally {
    System.out.println("Khối này luôn chạy dù có lỗi hay không");
}
```
