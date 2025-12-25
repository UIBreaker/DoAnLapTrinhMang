#### Nhóm 2: Lập trình mạng với Java (3 bài - Quan trọng cho đồ án môn này)

**Bài 4:** Tạo file `java-socket-tcp.md`

````markdown
---
title: "Lập trình mạng: Mô hình Client-Server với Java Socket (TCP)"
date: 2023-11-01
draft: false
tags: ["Java", "Network", "Socket"]
summary: "Hướng dẫn tạo kết nối TCP đơn giản giữa Client và Server."
---

TCP (Transmission Control Protocol) là giao thức tin cậy.

### Server Side

```java
ServerSocket server = new ServerSocket(1234);
Socket socket = server.accept(); // Chờ kết nối
// Đọc ghi dữ liệu...
Socket socket = new Socket("localhost", 1234);
// Gửi yêu cầu...
```
````
