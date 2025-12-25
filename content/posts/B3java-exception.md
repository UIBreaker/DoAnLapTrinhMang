---
title: "Nghệ thuật xử lý lỗi (Exception Handling): Đừng để App bị Crash!"
date: 2023-10-27
draft: false
tags: ["Java", "Clean Code"]
summary: "Try-Catch không chỉ để sửa lỗi, nó là cách bạn giao tiếp với người dùng khi có sự cố xảy ra."
---

```java
Map<String, String> dictionary = new HashMap<>();
dictionary.put("Hello", "Xin chào");
System.out.println(dictionary.get("Hello")); // Output: Xin chào
```

## Bài 3: `java-exception.md`

_Nhấn mạnh vào Clean Code và cách xử lý lỗi chuyên nghiệp._

````markdown
Bạn đã bao giờ thấy phần mềm hiện thông báo _"Something went wrong"_ thay vì sập hoàn toàn chưa? Đó là nhờ Exception Handling.

## Cấu trúc chuẩn của Try-Catch

```java
try {
    // 1. Đặt code nghi ngờ gây lỗi ở đây
    int data = 50 / 0;
} catch (ArithmeticException e) {
    // 2. Xử lý khi lỗi xảy ra (Thay vì để app sập)
    System.err.println("Lỗi toán học: Không thể chia cho 0!");
} finally {
    // 3. Luôn chạy (Dọn dẹp tài nguyên)
    System.out.println("Kết thúc xử lý.");
}
```
````

## Sai lầm kinh điển: "Nuốt" ngoại lệ (Swallowing Exceptions)

Rất nhiều bạn mới học làm thế này:

```java
catch (Exception e) {
    // Để trống, không làm gì cả
}
```

👉 Hậu quả: Chương trình chạy sai nhưng không ai biết tại sao. Đây là điều tối kỵ!

Lời khuyên
Hãy Log lỗi ra màn hình hoặc file để debug.

Bắt cụ thể lỗi (FileNotFoundException) thay vì bắt chung chung (Exception).
