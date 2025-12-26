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
    // Dữ liệu được bảo vệ (Private)
    private int batteryLevel;

    // Phương thức công khai (Public) để tương tác
    public void charge() {
        if (batteryLevel < 100) {
            batteryLevel++;
            System.out.println("Đang sạc... Pin: " + batteryLevel + "%");
        }
    }
}
```

## 2. Tính trừu tượng (Abstraction)

(Mình đưa mục này lên trước để làm nền tảng cho Kế thừa và Đa hình nhé)

Nguyên tắc: "Tập trung vào cái LÀM ĐƯỢC thay vì LÀM NHƯ THẾ NÀO".

Tất cả Smartphone đều phải có chức năng chupAnh(). Nhưng chụp thế nào (xử lý AI, chỉnh sáng...) thì iPhone làm kiểu khác, Samsung làm kiểu khác. Ta dùng abstract để ép buộc các hãng phải có tính năng này.

```java
// Abstract Class: Chỉ định nghĩa khung sườn
public abstract class MobileDevice {
    // Phương thức trừu tượng: Không có thân hàm (body)
    public abstract void takePhoto();

    public void call() {
        System.out.println("Đang thực hiện cuộc gọi...");
    }
}
```

## 3. Tính kế thừa (Inheritance)

Nguyên tắc: "Đừng viết lại những gì đã có".

iPhone 15 và Samsung S24 đều là điện thoại. Chúng kế thừa các đặc tính chung (nghe, gọi) từ lớp cha, giúp code ngắn gọn hơn.

```java
// iPhone kế thừa từ MobileDevice
public class IPhone extends MobileDevice {
    public void faceID() {
        System.out.println("Mở khóa bằng khuôn mặt.");
    }

    // Bắt buộc phải hiện thực hóa hàm trừu tượng của cha
    @Override
    public void takePhoto() {
        System.out.println("Chụp ảnh xóa phông chuẩn Apple!");
    }
}
```

## 4. Tính đa hình (Polymorphism)

Nguyên tắc: "Một hành động, nhiều cách thể hiện".

Cùng là hành động takePhoto(), nhưng nếu biến là iPhone thì chụp kiểu Apple, nếu là Samsung thì chụp kiểu Samsung.

```java
public class Main {
public static void main(String[] args) {
// Biến tham chiếu là lớp Cha, nhưng đối tượng thực là lớp Con
MobileDevice myPhone = new IPhone();

        // Cùng 1 lệnh gọi, nhưng chạy code của IPhone
        myPhone.takePhoto(); // Output: "Chụp ảnh xóa phông chuẩn Apple!"

        myPhone.call(); // Dùng lại code của lớp Cha
    }

}
```
