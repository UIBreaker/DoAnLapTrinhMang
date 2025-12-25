---
title: "Hiểu đúng về Lập trình hướng đối tượng (OOP) trong Java"
date: 2023-10-25
draft: false
tags: ["Java", "OOP"]
summary: "4 tính chất quan trọng nhất của OOP mà mọi lập trình viên Java cần nắm vững."
---

## 1. Tính đóng gói (Encapsulation)

Đóng gói giúp che giấu dữ liệu, ngăn chặn truy cập trái phép từ bên ngoài.

```java
public class Student {
    private String name; // Private: Chỉ truy cập được trong class này

    public String getName() {
        return name; // Public: Cho phép lấy dữ liệu
    }
}
```
