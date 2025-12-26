---
title: "Nghệ thuật xử lý lỗi (Exception Handling): Từ cơ bản đến Clean Code"
date: 2023-10-27
draft: false
tags: ["Java", "Clean Code", "Best Practice"]
summary: "Try-Catch không chỉ để sửa lỗi, nó là cách bạn giao tiếp với người dùng. Tìm hiểu về Try-with-resources và các sai lầm cần tránh."
---

Bạn đã bao giờ thấy phần mềm hiện thông báo _"Something went wrong"_ thay vì sập hoàn toàn (Crash) chưa? Đó chính là nhờ **Exception Handling**.

Trong Java, ngoại lệ (Exception) không phải là kẻ thù, mà là những tín hiệu giao thông giúp chúng ta điều hướng luồng chạy của chương trình an toàn hơn.

## 1. Phân cấp Ngoại lệ (Exception Hierarchy)

Trước khi bắt lỗi, bạn cần biết mình đang đối mặt với ai.

- **Error:** Lỗi nghiêm trọng từ hệ thống (tràn bộ nhớ, lỗi máy ảo JVM). Cái này **không thể** bắt bằng code (Vô phương cứu chữa).
- **Exception (Checked):** Lỗi bắt buộc phải xử lý khi viết code (Ví dụ: Đọc file mà file không tồn tại, Mất mạng...).
- **RuntimeException (Unchecked):** Lỗi do người lập trình ẩu (Chia cho 0, Truy cập biến Null, Sai index mảng...).

## 2. Cấu trúc Try-Catch-Finally kinh điển

Đây là cách truyền thống để xử lý ngoại lệ.

```java
try {
    // 1. Đặt code nghi ngờ gây lỗi ở đây
    int data = 50 / 0;
} catch (ArithmeticException e) {
    // 2. Xử lý khi lỗi xảy ra (Thay vì để app sập)
    System.err.println("Lỗi toán học: Không thể chia cho 0!");
    e.printStackTrace(); // In vết lỗi để debug
} finally {
    // 3. Khối này LUÔN chạy dù có lỗi hay không
    // Thường dùng để đóng kết nối Database, đóng File...
    System.out.println("Kết thúc xử lý.");
}
```

## 3. Nâng cấp: Try-with-resources (Java 7+)

Ngày xưa, việc đóng file trong finally rất rườm rà. Giờ đây, Java tự động làm việc đó giúp bạn nếu bạn khai báo trong try(...).

Cách cũ (Rườm rà):

```java
FileInputStream file = null;
try {
    file = new FileInputStream("data.txt");
} catch (IOException e) {
    // Xử lý lỗi
} finally {
    if (file != null) {
        try { file.close(); } catch (IOException e) {} // Lại phải try-catch lồng nhau
    }
}
```

Cách mới (Clean Code):

```java
// Tự động đóng file ngay sau khi chạy xong block này
try (FileInputStream file = new FileInputStream("data.txt")) {
    // Đọc file...
} catch (IOException e) {
    System.err.println("Không đọc được file!");
}
```

## 4. Những sai lầm "chí mạng" cần tránh

Sai lầm 1: "Nuốt" ngoại lệ (Swallowing Exceptions)
Đây là điều tối kỵ! Bạn bắt lỗi xong nhưng im lặng, chương trình chạy sai logic mà không ai biết tại sao.

```java
// ❌ ĐỪNG BAO GIỜ LÀM THẾ NÀY
catch (Exception e) {
    // Để trống
}
```

Sai lầm 2: Bắt lỗi quá chung chung
Bắt Exception (cha) sẽ tóm luôn cả những lỗi bạn không ngờ tới, khiến việc debug trở nên khó khăn.

```java
// ❌ Không nên
catch (Exception e) { ... }

// ✅ Nên bắt cụ thể
catch (FileNotFoundException e) {
    System.out.println("File không tìm thấy, vui lòng kiểm tra lại đường dẫn.");
}
```
