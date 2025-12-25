---
title: "Hiểu thấu đáo 4 tính chất của OOP qua ví dụ chiếc Smartphone"
date: 2023-10-25
draft: false
tags: ["Java", "OOP", "Kiến Thức Nền Tảng"]
summary: "Tại sao OOP lại thống trị thế giới phần mềm? Cùng giải mã qua Đóng gói, Kế thừa, Đa hình và Trừu tượng."
---

Lập trình hướng đối tượng (OOP) không chỉ là code, nó là tư duy mô phỏng thế giới thực. Để hiểu rõ 4 tính chất này, hãy tưởng tượng chúng ta đang thiết kế một chiếc **Smartphone**.

## 1. Tính đóng gói (Encapsulation)

_Nguyên tắc: "Giấu việc cần giấu, khoe việc cần khoe"._

Bạn không cần biết bên trong pin điện thoại đấu dây thế nào, bạn chỉ cần cắm sạc là xong. Trong Java, chúng ta dùng `private` để che giấu dữ liệu và `public` để cung cấp tính năng.

```java
public class Smartphone {
    private int batteryLevel; // Người dùng không thể tự chỉnh pin thành 1000% được!

    public void charge() {
        if (batteryLevel < 100) {
            batteryLevel++;
            System.out.println("Đang sạc... Pin: " + batteryLevel + "%");
        }
    }
}
```

## 2. Tính kế thừa (Inheritance)

Nguyên tắc: "Đừng viết lại những gì đã có".

iPhone 15 và Samsung S24 đều là Smartphone. Chúng kế thừa các đặc tính chung (nghe, gọi) nhưng có thương hiệu khác nhau.

```java

public class IPhone extends Smartphone {
    public void faceID() {
        System.out.println("Mở khóa bằng khuôn mặt.");
    }
}
```

## 3. Tính đa hình (Polymorphism)

Nguyên tắc: "Một hành động, nhiều cách thể hiện".

Cùng là hành động chupAnh(), nhưng iPhone chụp kiểu khác, Samsung chụp kiểu khác (xử lý AI).

```java
@Override
public void takePhoto() {
    System.out.println("Chụp ảnh xóa phông chuẩn Apple!");
}

```

## 4. Tính trừu tượng (Abstraction)

Nguyên tắc: "Tập trung vào cái LÀM ĐƯỢC thay vì LÀM NHƯ THẾ NÀO".

Khi bấm nút Home, bạn chỉ biết nó sẽ về màn hình chính, còn bên dưới nó gửi tín hiệu điện thế nào thì lập trình viên hệ thống lo. Interface trong Java chính là hiện thân của tính chất này.
